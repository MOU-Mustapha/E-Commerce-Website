import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  getSpecificAddressAction,
  editAddressAction,
} from "../../Redux/actions/addressAction";
import notify from "../../CustomHook/useNotification";

const UserEditAddressHook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loadingSpecific, setLoadingSpecific] = useState(true);
  const [loading, setLoading] = useState(true);
  const onAliasChange = (e) => {
    setAlias(e.target.value);
  };
  const onDetailsChange = (e) => {
    setDetails(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  useEffect(() => {
    const getAddress = async () => {
      await dispatch(getSpecificAddressAction(id));
      setLoadingSpecific(false);
    };
    getAddress();
  }, []);
  const { specificAddress } = useSelector((state) => state.address);
  useEffect(() => {
    if (!loadingSpecific) {
      if (specificAddress) {
        setAlias(specificAddress.data.alias);
        setDetails(specificAddress.data.details);
        setPhone(specificAddress.data.phone);
      }
    }
  }, [loadingSpecific]);
  const validation = () => {
    if (alias === "") {
      notify("من فضلك إدخل تسمية العنوان", "warn");
      return;
    }
    if (details === "") {
      notify("من فضلك إدخل تفاصيل العنوان", "warn");
      return;
    }
    if (phone === "") {
      notify("من فضلك إدخل رقم الهاتف", "warn");
      return;
    }
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      editAddressAction(id, {
        alias,
        details,
        phone,
      })
    );
    setLoading(false);
  };
  const { editAddress } = useSelector((state) => state.address);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      if (editAddress) {
        if (editAddress.status && editAddress.status === 200) {
          notify("تم تعديل العنوان بنجاح", "success");
          setTimeout(() => navigate("/user/address"), 2000);
        } else {
          notify("هناك مشكلة في عملية التعديل", "error");
        }
      }
    }
  }, [loading]);
  return [
    alias,
    details,
    phone,
    onAliasChange,
    onDetailsChange,
    onPhoneChange,
    handleEdit,
  ];
};

export default UserEditAddressHook;

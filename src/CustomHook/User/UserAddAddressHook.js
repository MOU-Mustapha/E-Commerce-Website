import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import notify from "../../CustomHook/useNotification";
import { addAddressAction } from "../../Redux/actions/addressAction";

const UserAddAddressHook = () => {
  const navigate = useNavigate();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
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
  const dispatch = useDispatch();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      addAddressAction({
        alias,
        details,
        phone,
        city: "",
        postalCode: "",
      })
    );
    setLoading(false);
  };
  const { addAddress } = useSelector((state) => state.address);
  useEffect(() => {
    if (!loading) {
      if (addAddress) {
        if (addAddress.status && addAddress.status === 200) {
          setAlias("");
          setDetails("");
          setPhone("");
          notify("تم إضافة العنوان بنجاح", "success");
          setTimeout(() => navigate("/user/address"), 2000);
        } else {
          notify("هناك مشكلة في عملية الإضافة", "error");
        }
      }
    }
  }, [loading]);
  return [
    alias,
    details,
    phone,
    loading,
    onAliasChange,
    onDetailsChange,
    onPhoneChange,
    handleSubmit,
  ];
};

export default UserAddAddressHook;

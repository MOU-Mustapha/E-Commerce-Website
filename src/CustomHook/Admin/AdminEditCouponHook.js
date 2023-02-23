import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificCouponAction,
  editSpecificCouponAction,
} from "../../Redux/actions/couponAction";
import notify from "../../CustomHook/useNotification";
import { useNavigate, useParams } from "react-router";

const AdminEditCouponHook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dateRef = useRef();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loadingSpecific, setLoadingSpecific] = useState(true);
  const [loading, setLoading] = useState(true);
  const onCouponNameChange = (e) => {
    setCouponName(e.target.value);
  };
  const onCouponDateChange = (e) => {
    setCouponDate(e.target.value);
  };
  const onCouponValueChange = (e) => {
    setCouponValue(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const getCoupon = async () => {
      await dispatch(getSpecificCouponAction(id));
      setLoadingSpecific(false);
    };
    getCoupon();
  }, []);
  const { specificCoupon } = useSelector((state) => state.coupon);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    if (!loadingSpecific) {
      if (specificCoupon) {
        setCouponName(specificCoupon.data.name);
        setCouponDate(
          new Date(specificCoupon.data.expire).toLocaleDateString(
            "en-EG",
            options
          )
        );
        setCouponValue(specificCoupon.data.discount);
      }
    }
  }, [loadingSpecific]);
  const validation = () => {
    if (couponName === "") {
      notify("من فضلك إدخل إسم الكوبون", "warn");
      return;
    }
    if (couponDate === "") {
      notify("من فضلك إدخل تاريخ إنتهاء الكوبون", "warn");
      return;
    }
    if (couponValue === "" || couponValue <= 0) {
      notify("من فضلك إدخل قيمة الكوبون", "warn");
      return;
    }
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      editSpecificCouponAction(id, {
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };
  const { editCoupon } = useSelector((state) => state.coupon);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      if (editCoupon) {
        if (editCoupon.status && editCoupon.status === 200) {
          notify("تم تعديل الكوبون بنجاح", "success");
          setTimeout(() => navigate("/admin/add-coupon"), 2000);
        } else {
          notify("هناك مشكلة في عملية التعديل", "success");
        }
      }
    }
  }, [loading]);
  return [
    dateRef,
    couponName,
    couponDate,
    couponValue,
    onCouponNameChange,
    onCouponDateChange,
    onCouponValueChange,
    handleEdit,
  ];
};

export default AdminEditCouponHook;

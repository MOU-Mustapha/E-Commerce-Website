import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCouponAction,
  getAllCouponsAction,
} from "../../Redux/actions/couponAction";
import notify from "../../CustomHook/useNotification";

const AdminAddCouponHook = () => {
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingAll, setLoadingAll] = useState(true);
  const dateRef = useRef();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      createCouponAction({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };
  const { createCoupon } = useSelector((state) => state.coupon);
  useEffect(() => {
    if (!loading) {
      if (createCoupon) {
        if (createCoupon.status && createCoupon.status === 201) {
          notify("تم إضافة الكوبون بنجاح", "success");
          setTimeout(() => window.location.reload(), 2000);
        }
        if (createCoupon.status && createCoupon.status === 400) {
          notify("هذا الكوبون موجود من قبل", "error");
        }
      }
    }
  }, [loading]);
  useEffect(() => {
    const getCoupons = async () => {
      await dispatch(getAllCouponsAction());
      setLoadingAll(false);
    };
    getCoupons();
  }, []);
  const { allCoupons } = useSelector((state) => state.coupon);
  let coupons = [];
  try {
    if (allCoupons && allCoupons.data.length >= 1) {
      coupons = allCoupons.data;
    } else {
      coupons = [];
    }
  } catch (err) {}
  return [
    dateRef,
    onCouponNameChange,
    onCouponDateChange,
    onCouponValueChange,
    couponName,
    couponDate,
    couponValue,
    handleSubmit,
    coupons,
    loadingAll,
  ];
};

export default AdminAddCouponHook;

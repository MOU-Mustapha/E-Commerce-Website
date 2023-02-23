import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllCartAction,
  applyCouponAction,
} from "../../Redux/actions/cartAction";
import notify from "../../CustomHook/useNotification";

const CartTotalHook = (couponNameRes) => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteAll = async (e) => {
    e.preventDefault();
    await dispatch(deleteAllCartAction());
    setLoading(false);
    setIsPress(true);
  };
  const { deleteAllCart } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1500);
      if (deleteAllCart === "") {
        notify("تم مسح المنتجات الموجودة في العربة ", "success");
        setTimeout(() => (window.location.href = "/"), 1500);
      }
    }
  }, [loading]);
  const [couponName, setCouponName] = useState("");
  const [loadingCoupon, setLoadingCoupon] = useState(true);
  const onCouponNameChange = (e) => {
    setCouponName(e.target.value);
  };
  useEffect(() => {
    setCouponName(couponNameRes);
  }, [couponNameRes]);
  const handleCoupon = async (e) => {
    e.preventDefault();
    if (couponName === "") {
      notify("يجب إدخال إسم الكوبون أولاًُ", "warn");
      return;
    }
    await dispatch(
      applyCouponAction({
        couponName,
      })
    );
    setLoadingCoupon(false);
  };
  const { applyCoupon } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!loadingCoupon) {
      if (applyCoupon) {
        console.log(applyCoupon);
        if (applyCoupon.status && applyCoupon.status === 200) {
          notify("تم تطبيق الكوبون بنجاح", "success");
          setTimeout(() => window.location.reload(), 1500);
        } else if (
          applyCoupon.data.message &&
          applyCoupon.data.message === "Coupon is invalid or has expired"
        ) {
          notify("هذا الكوبون منتهي الصلاحية أو غير صحيح", "error");
          setTimeout(() => window.location.reload(), 1500);
        }
      }
    }
  }, [loadingCoupon]);
  return [
    handleDeleteAll,
    loading,
    isPress,
    handleCoupon,
    couponName,
    onCouponNameChange,
  ];
};

export default CartTotalHook;

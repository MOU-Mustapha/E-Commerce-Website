import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCouponAction } from "../../Redux/actions/couponAction";

const AdminCouponCardHook = (coupon) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteCouponAction(coupon._id));
    setShow(false);
    window.location.reload();
  };
  return [handleDelete, show, handleShow, handleClose];
};

export default AdminCouponCardHook;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSpecificCartProductAction,
  updateProductCartCountAction,
} from "../../Redux/actions/cartAction";
import notify from "../../CustomHook/useNotification";

const CartItemHook = (product) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(true);
  const [count, setCount] = useState(product.count);
  const onCountChange = (e) => {
    setCount(e.target.value);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteSpecificCartProductAction(product._id));
    setLoading(false);
    setShow(false);
  };
  const { specificCartProduct } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!loading) {
      if (specificCartProduct) {
        if (
          specificCartProduct.status &&
          specificCartProduct.status === "success"
        ) {
          notify("تم حذف المنتج من العربة بنجاح", "success");
          setTimeout(() => window.location.reload(), 1500);
        } else {
          notify("هناك مشكلة في عملية الحذف", "error");
        }
      }
    }
  }, [loading]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(
      updateProductCartCountAction(product._id, {
        count,
      })
    );
    setLoadingUpdate(false);
  };
  const { updateProductCartCount } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!loadingUpdate) {
      setLoadingUpdate(true);
      if (updateProductCartCount) {
        if (
          updateProductCartCount.status &&
          updateProductCartCount.status === 200
        ) {
          notify("تم تعديل الكمية بنجاح", "success");
          setTimeout(() => window.location.reload(), 1500);
        } else {
          notify("هناك مشكلة في عملية التعديل", "error");
        }
      }
    }
  }, [loadingUpdate]);
  return [
    show,
    handleClose,
    handleDelete,
    handleShow,
    count,
    onCountChange,
    handleUpdate,
  ];
};

export default CartItemHook;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAction } from "../../Redux/actions/cartAction";
import notify from "../../CustomHook/useNotification";
import { useParams } from "react-router";

const AddToCartHook = (item) => {
  const [colorIndex, setColorIndex] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const HandleClick = (index, color) => {
    setColorIndex(index);
    setColorText(color);
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (item.availableColors.length >= 1 && colorText === "") {
      notify("يجب أن تختار لون للمنتج", "warn");
      return;
    }
    await dispatch(
      addProductToCartAction({
        productId: id,
        color: colorText,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { addProductToCart } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (addProductToCart) {
        if (addProductToCart.status && addProductToCart.status === 200) {
          notify("تم إضافة المنتج إلي العربة بنجاح", "success");
          setTimeout(() => (window.location.href = "/cart"), 1500);
        } else {
          notify("يجب أن تقوم بتسجيل الدخول أولاً", "error");
        }
      }
    }
  }, [loading]);
  return [colorIndex, HandleClick, handleAddToCart, loading, isPress];
};

export default AddToCartHook;

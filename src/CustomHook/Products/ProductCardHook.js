import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import favOff from "../../Images/fav-off.png";
import favOn from "../../Images/fav-on.png";
import {
  addProductToWishListAction,
  deleteProductFromWishListAction,
} from "../../Redux/actions/wishListAction";
import notify from "../../CustomHook/useNotification";

const ProductCardHook = (product, favProducts) => {
  const [favImg, setFavImg] = useState(favOff);
  let fav = favProducts.some((favItem) => favItem === product._id);
  const [isFav, setIsFav] = useState(fav);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(true);
  useEffect(() => {
    setIsFav(fav);
  }, [favProducts]);
  const handleFav = () => {
    if (isFav) {
      deleteProdFromWishList();
    } else {
      addProdToWishList();
    }
  };
  const dispatch = useDispatch();
  const addProdToWishList = async () => {
    setIsFav(true);
    setFavImg(favOn);
    await dispatch(
      addProductToWishListAction({
        productId: product._id,
      })
    );
    setLoadingAdd(false);
  };
  const deleteProdFromWishList = async () => {
    setIsFav(false);
    setFavImg(favOff);
    await dispatch(deleteProductFromWishListAction(product._id));
    setLoadingDelete(false);
  };
  useEffect(() => {
    if (isFav) {
      setFavImg(favOn);
    } else {
      setFavImg(favOff);
    }
  }, [isFav]);
  const { addToWishlist } = useSelector((state) => state.wishList);
  const { deleteFromWishList } = useSelector((state) => state.wishList);
  useEffect(() => {
    if (!loadingAdd) {
      if (addToWishlist) {
        if (addToWishlist.status && addToWishlist.status === 200) {
          notify("تم إضافة المنتج إلي قائمة المنتجات المفضلة", "success");
        } else {
          setFavImg(favOff);
          notify("يجب تسجيل الدخول أولاً", "error");
        }
      }
    }
  }, [loadingAdd]);
  useEffect(() => {
    if (!loadingDelete) {
      if (deleteFromWishList) {
        if (
          deleteFromWishList.status &&
          deleteFromWishList.status === "success"
        ) {
          notify("تم حذف المنتج من قائمة المنتجات المفضلة", "success");
        } else {
          setFavImg(favOff);
          notify("يجب تسجيل الدخول أولاً", "error");
        }
      }
    }
  }, [loadingDelete]);
  return [handleFav, favImg];
};

export default ProductCardHook;

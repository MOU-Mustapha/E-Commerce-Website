import { getAllProductsWishListAction } from "../../Redux/actions/wishListAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const UserFavoriteProductsHook = () => {
  const [loading, setLoading] = useState(true);
  const [favProds, setFavProds] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      await dispatch(getAllProductsWishListAction());
      setLoading(false);
    };
    getAll();
  }, []);
  const { allWishList } = useSelector((state) => state.wishList);
  useEffect(() => {
    if (!loading) {
      if (allWishList) {
        setFavProds(allWishList.data);
      }
    }
  }, [loading]);
  return [favProds, loading];
};

export default UserFavoriteProductsHook;

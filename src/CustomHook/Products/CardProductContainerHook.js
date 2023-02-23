import { getAllProductsWishListAction } from "../../Redux/actions/wishListAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardProductContainerHook = () => {
  const [load, setLoad] = useState(true);
  const [favProducts, setFavProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      await dispatch(getAllProductsWishListAction());
      setLoad(false);
    };
    getAll();
  }, []);
  const { allWishList } = useSelector((state) => state.wishList);
  useEffect(() => {
    if (!load) {
      if (allWishList.data.length >= 1) {
        setFavProducts(
          allWishList.data.map((item) => {
            return item._id;
          })
        );
      } else {
        setFavProducts([]);
      }
    }
  }, [load]);
  return [favProducts];
};

export default CardProductContainerHook;

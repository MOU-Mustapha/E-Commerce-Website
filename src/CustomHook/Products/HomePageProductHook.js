import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../Redux/actions/productAction";

const HomePageProductHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  const { product, loading } = useSelector((state) => state.product);
  let items = [];
  if (product.data) {
    items = product.data.slice(0, 4);
  } else {
    items = [];
  }
  return [items, loading];
};

export default HomePageProductHook;

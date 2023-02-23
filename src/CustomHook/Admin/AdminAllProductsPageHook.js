import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../Redux/actions/productAction";

const AdminAllProductsPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction(6));
  }, []);
  const { product, loading } = useSelector((state) => state.product);
  let items = [];
  if (product) {
    items = product.data;
  } else {
    items = [];
  }
  let pageCount = 0;
  if (product.paginationResult) {
    pageCount = product.paginationResult.numberOfPages;
  } else {
    pageCount = 0;
  }
  const getPageNumber = (page) => {
    dispatch(getAllProductAction(6, page));
  };
  return [items, loading, pageCount, getPageNumber];
};

export default AdminAllProductsPageHook;

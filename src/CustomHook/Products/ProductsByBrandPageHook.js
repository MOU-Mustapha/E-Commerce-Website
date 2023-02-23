import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllProductsByBrandAction } from "../../Redux/actions/productAction";

const ProductsByBrandPageHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAll = async () => {
      await dispatch(getAllProductsByBrandAction(1, 8, id));
      setLoading(false);
    };
    getAll();
  }, []);
  const { productsByBrand } = useSelector((state) => state.product);
  let items = [];
  let pageCount = 0;
  try {
    if (productsByBrand.data) {
      items = productsByBrand.data;
    }
  } catch (err) {}
  try {
    if (productsByBrand.paginationResult) {
      pageCount = productsByBrand.paginationResult.numberOfPages;
    }
  } catch (err) {}
  const getPageNumber = async (page) => {
    await dispatch(getAllProductsByBrandAction(page, 8, id));
  };
  return [items, loading, pageCount, getPageNumber];
};

export default ProductsByBrandPageHook;

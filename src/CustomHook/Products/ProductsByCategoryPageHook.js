import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllProductsByCategoryAction } from "../../Redux/actions/productAction";

const ProductsByCategoryPageHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAll = async () => {
      await dispatch(getAllProductsByCategoryAction(1, 8, id));
      setLoading(false);
    };
    getAll();
  }, []);
  const { productsByCategory } = useSelector((state) => state.product);
  let items = [];
  let pageCount = 0;
  try {
    if (productsByCategory.data) {
      items = productsByCategory.data;
    }
  } catch (err) {}
  try {
    if (productsByCategory.paginationResult) {
      pageCount = productsByCategory.paginationResult.numberOfPages;
    }
  } catch (err) {}
  const getPageNumber = async (page) => {
    await dispatch(getAllProductsByCategoryAction(page, 8, id));
  };
  return [items, loading, pageCount, getPageNumber];
};

export default ProductsByCategoryPageHook;

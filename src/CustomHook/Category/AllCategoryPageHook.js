import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../Redux/actions/categoryAction";

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllCats = async () => {
      await dispatch(getAllCategoryAction(12));
    };
    getAllCats();
  }, []);
  const { category, loading } = useSelector((state) => state.allCategory);
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }
  const getPageNumber = (page) => {
    dispatch(getAllCategoryAction(12, page));
  };
  return [category, loading, pageCount, getPageNumber];
};

export default AllCategoryPageHook;

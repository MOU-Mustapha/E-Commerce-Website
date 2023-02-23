import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllReviewsProductAction } from "../../Redux/actions/reviewAction";

const ViewAllReviewsHook = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allReviewProduct } = useSelector((state) => state.review);
  const getAllReviews = async () => {
    await dispatch(getAllReviewsProductAction(id, 1, 5));
  };
  useEffect(() => {
    getAllReviews();
    setTimeout(() => setLoading(false), 1000);
  }, []);
  let pageCount = 0;
  if (allReviewProduct.paginationResult) {
    pageCount = allReviewProduct.paginationResult.numberOfPages;
  }
  const getPageNumber = async (page) => {
    await dispatch(getAllReviewsProductAction(id, page, 5));
  };
  return [allReviewProduct, pageCount, getPageNumber, loading, getAllReviews];
};

export default ViewAllReviewsHook;

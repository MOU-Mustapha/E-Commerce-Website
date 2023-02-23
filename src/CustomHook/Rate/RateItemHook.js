import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../CustomHook/useNotification";
import {
  deleteReviewAction,
  editReviewAction,
} from "../../Redux/actions/reviewAction";
import ViewAllReviewsHook from "./ViewAllReviewsHook";

const RateItemHook = (item) => {
  const [, , , , getAllReviews] = ViewAllReviewsHook();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newReview, setNewReview] = useState(item.review);
  const [newRateValue, setNewRateValue] = useState(item.rating);
  const [loading, setLoading] = useState(true);
  const onRateValueChange = (value) => {
    setNewRateValue(value);
  };
  const settings = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#FFC107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onRateValueChange(newValue);
    },
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleShowEdit = () => {
    setShowEdit(true);
  };
  const onNewReviewChange = (e) => {
    setNewReview(e.target.value);
  };
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteReviewAction(item._id));
    setLoading(false);
    handleClose();
    getAllReviews();
  };
  const handleEdit = async () => {
    await dispatch(
      editReviewAction(item._id, {
        review: newReview,
        rating: newRateValue,
      })
    );
    setLoading(false);
    handleCloseEdit();
    getAllReviews();
  };
  const { editReview } = useSelector((state) => state.review);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      if (editReview) {
        if (editReview.status && editReview.status === 200) {
          notify("تم تعديل التقييم بنجاح", "success");
        } else {
          notify("هناك مشكلة في عملية التعديل", "error");
        }
      }
    }
  }, [loading]);
  return [
    userData,
    handleDelete,
    handleEdit,
    show,
    handleClose,
    handleShow,
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    onNewReviewChange,
    newReview,
    settings,
  ];
};

export default RateItemHook;

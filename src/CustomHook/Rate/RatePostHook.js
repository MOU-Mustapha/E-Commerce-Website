import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import notify from "../../CustomHook/useNotification";
import { createReviewAction } from "../../Redux/actions/reviewAction";
import ViewAllReviewsHook from "./ViewAllReviewsHook";

const RatePostHook = () => {
  const [, , , , getAllReviews] = ViewAllReviewsHook();
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const { id } = useParams();
  const onRateTextChange = (e) => {
    setRateText(e.target.value);
  };
  const onRateValueChange = (value) => {
    setRateValue(value);
  };
  const settings = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#FFC107",
    value: rateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onRateValueChange(newValue);
    },
  };
  let userData = "";
  if (localStorage.getItem("userData")) {
    userData = JSON.parse(localStorage.getItem("userData"));
  }
  let name = "";
  if (userData.name) {
    name = userData.name;
  }
  const validation = () => {
    if (rateText === "") {
      notify("من فضلك إكتب تعليق", "warn");
      return;
    }
    if (rateValue === 0) {
      notify("من فضلك إدخل تقييم", "warn");
      return;
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      createReviewAction(id, {
        review: rateText,
        rating: rateValue,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { createReview } = useSelector((state) => state.review);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (createReview) {
        if (
          createReview.data.message &&
          createReview.data.message ===
            "You are not allowed to perform this action"
        ) {
          notify("غير مسموح للأدمن بإضافة تقييم", "error");
        }
        if (
          createReview.data.errors &&
          createReview.data.errors[0].msg ===
            "You already added review on this product"
        ) {
          notify("لقد قمت بالفعل بتقييم هذا المنتج من قبل", "error");
        }
        if (
          createReview.data.errors &&
          createReview.data.errors[0].msg === "Rating min value 1.0 and max 5.0"
        ) {
          notify("أقل تقييم يمكن إعطاءه لمنتج هو 1 وليس 0.5", "error");
        }
        if (createReview.status && createReview.status === 201) {
          setRateText("");
          setRateValue(0);
          notify("تم إضافة التقييم بنجاح", "success");
          setTimeout(() => getAllReviews(), 1000);
        }
      }
    }
  }, [loading]);
  return [
    settings,
    name,
    rateText,
    loading,
    isPress,
    onRateTextChange,
    handleSubmit,
  ];
};

export default RatePostHook;

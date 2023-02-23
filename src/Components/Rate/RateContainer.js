import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ViewAllReviewsHook from "../../CustomHook/Rate/ViewAllReviewsHook";
import rate from "../../Images/rate.png";
import Pagination from "../Utilities/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import { ToastContainer } from "react-toastify";

const RateContainer = ({ ratingAvg, ratingQuantity }) => {
  const [allReviewProduct, pageCount, getPageNumber, loading] =
    ViewAllReviewsHook();
  return (
    <div className="rate-container p-2">
      <Row className="mt-2">
        <Col className="d-flex">
          <div className="sub-title d-inline p-1">التقيمات</div>
          <img src={rate} alt="" height="16px" width="16px" className="mt-2" />
          <div className="cat-rate d-inline p-1 pt-2">
            {ratingAvg === undefined ? "0" : ratingAvg}
          </div>
          <div className="rate-count d-inline p-1 pt-2">{`(${ratingQuantity} تقييم)`}</div>
        </Col>
      </Row>
      <RatePost />
      {!loading ? (
        allReviewProduct.data ? (
          allReviewProduct.data.map((item, index) => {
            return <RateItem key={index} item={item} />;
          })
        ) : (
          <h6>لا يوجد تقييمات</h6>
        )
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
          <Spinner animation="border" />
          <div className="admin-content-text-spinner mt-1">جاري التحميل...</div>
        </div>
      )}
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPageNumber} />
      ) : null}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default RateContainer;

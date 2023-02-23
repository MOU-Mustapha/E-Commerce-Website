import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import RatePostHook from "../../CustomHook/Rate/RatePostHook";

const RatePost = () => {
  const [
    settings,
    name,
    rateText,
    loading,
    isPress,
    onRateTextChange,
    handleSubmit,
  ] = RatePostHook();
  return (
    <div>
      <Row className="mt-3">
        <Col sm="12" className="me-5 d-flex">
          <div className="rate-name d-inline ms-3 mt-1">{name}</div>
          <ReactStars {...settings} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="إكتب تعليقك...."
            value={rateText}
            onChange={onRateTextChange}
          />
          <div className="d-flex justify-content-end my-2">
            <div
              onClick={handleSubmit}
              className="product-cart-add px-3 py-2 text-center d-inline d-flex justify-content-center align-items-center"
            >
              أضف تعليق
            </div>
          </div>
          {isPress ? (
            loading ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Spinner animation="border" />
                <div className="admin-content-text-spinner mt-1">
                  جاري التحميل...
                </div>
              </div>
            ) : null
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;

import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AddToCartHook from "../../CustomHook/Cart/AddToCartHook";
import ProductDetailsHook from "../../CustomHook/Products/ProductDetailsHook";
import rate from "../../Images/rate.png";
import { ToastContainer } from "react-toastify";

const ProductDescription = () => {
  const [item, , cat, bra] = ProductDetailsHook();
  const [colorIndex, HandleClick, handleAddToCart, loading, isPress] =
    AddToCartHook(item);
  return (
    <div className="desc-res">
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="10">
          <div className="cat-title d-flex">
            <div>{item.title}</div>
            <img
              src={rate}
              alt=""
              height="16px"
              width="16px"
              className="me-2"
            />
            <div className="cat-rate mx-1">
              {item.ratingsAverage === undefined ? "0" : item.ratingsAverage}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="brand-text d-inline mx-1">{bra.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-text d-inline">الكمية المتاحة :</div>
          <div className="brand-text d-inline mx-1">{item.quantity}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: color,
                      opacity: colorIndex === index ? "1" : "0.4",
                      boxShadow:
                        colorIndex === index ? "0px 0px 5px #555" : "none",
                      border: "2px solid #555",
                    }}
                    onClick={() => HandleClick(index, color)}
                    className="color ms-2"
                  ></div>
                );
              })
            : null}
        </Col>
      </Row>
      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border">
              <span style={{ textDecoration: "line-through" }}>
                {item.price}
              </span>{" "}
              ... {item.priceAfterDiscount} جنية
            </div>
          ) : (
            <div className="product-price d-inline px-3 py-3 border">
              {item.price} جنية
            </div>
          )}{" "}
          <div
            onClick={handleAddToCart}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            اضف للعربة
          </div>
          <div className="mt-5">
            {isPress ? (
              loading ? (
                <div className="d-flex flex-column justify-content-center">
                  <Spinner animation="border" />
                  <div className="admin-content-text-spinner mt-1">
                    جاري التحميل...
                  </div>
                </div>
              ) : null
            ) : null}
          </div>
        </Col>
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
      </Row>
    </div>
  );
};

export default ProductDescription;

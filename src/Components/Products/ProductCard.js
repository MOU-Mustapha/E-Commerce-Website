import React from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../Images/rate.png";
import { Link } from "react-router-dom";
import ProductCardHook from "../../CustomHook/Products/ProductCardHook";
import { ToastContainer } from "react-toastify";

const ProductCard = ({ product, favProducts }) => {
  const [handleFav, favImg] = ProductCardHook(product, favProducts);
  return (
    <Col xs="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favImg}
            alt=""
            className="text-center mt-2"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
            onClick={handleFav}
          />
        </div>
        <Card.Body>
          <div className="card-title">
            <div className="card-title mb-3">{product.title}</div>
          </div>
          <div className="card-text">
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img src={rate} alt="" height="16px" width="16px" />
                <div className="card-rate mx-2">
                  {product.ratingsAverage === undefined
                    ? "0"
                    : product.ratingsAverage}
                </div>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {product.priceAfterDiscount >= 1 ? (
                    <div>
                      <span style={{ textDecoration: "line-through" }}>
                        {product.price}
                      </span>{" "}
                      ... {product.priceAfterDiscount}
                    </div>
                  ) : (
                    product.price
                  )}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
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
    </Col>
  );
};

export default ProductCard;

import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, img, background, id }) => {
  return (
    <Col xs="6" md="4" lg="2" className="my-4 d-flex justify-content-around">
      <div className="all-card mb-3">
        <div
          className="category-card"
          style={{ backgroundColor: `${background}` }}
        ></div>
        <Link
          to={`/products/category/${id}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={img}
            alt=""
            className="category-card-img"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <p className="category-card-text my-2">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;

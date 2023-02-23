import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import no from "../../Images/no.jpg";

const UserAllOrdersCard = ({ item }) => {
  return (
    <div>
      <Row className="mb-2">
        <Col xs="3" md="2">
          <Link
            to={`/products/${item.product._id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={no} alt="" width="93px" height="120px" />
          </Link>
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">{item.product.title}</div>
          <div className="d-inline pt-2 cat-rate me-2">
            {item.product.ratingsAverage || 0}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            (تقييم {item.product.ratingsQuantity})
          </div>
          <div className="mt-3">
            <div className="cat-text d-inline">الكمية</div>
            <input
              value={item.count}
              type="number"
              className="mx-2 text-center"
              style={{ width: "60px", height: "30px" }}
            />
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            سعر المنتج : {item.price} جنية
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersCard;

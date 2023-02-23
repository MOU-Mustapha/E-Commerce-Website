import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BrandCard = ({ img, id }) => {
  return (
    <Col xs="6" md="4" lg="2" className="d-flex justify-content-center my-2">
      <Card
        className="my-1"
        style={{
          width: "100%",
          height: "151px",
          border: "none",
        }}
      >
        <Link to={`/products/brand/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "151px", width: "100%", cursor: "pointer" }}
            src={img}
          />
        </Link>
      </Card>
    </Col>
  );
};

export default BrandCard;

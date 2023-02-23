import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";

const ProductDetails = () => {
  return (
    <Row className="py-2">
      <Col lg="4" sm="12">
        <ProductGallery />
      </Col>
      <Col lg="8" sm="12">
        <ProductDescription />
      </Col>
    </Row>
  );
};

export default ProductDetails;

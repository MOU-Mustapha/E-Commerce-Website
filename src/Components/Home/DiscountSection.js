import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../Images/laptops.png";

const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
          </div>
        </Col>
        <Col sm="6">
          <img src={laptops} alt="discount-img" className="discount-img " />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;

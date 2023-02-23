import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import phone from "../../Images/phone.png";

const Footer = () => {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center">
            <div className="footer-text">الشروط والأحكام</div>
            <div className="footer-text mx-2">سياسة الخصوصية</div>
            <div className="footer-text mx-2">إتصل بنا</div>
          </Col>
          <Col sm="6" className="d-flex align-items-center justify-content-end">
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="phone" />
              <p className="footer-phone phone-h">01123456789</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-facebook-f face mx-1"></i>
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-instagram mx-1 instagram"></i>
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-twitter twitter mx-1"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

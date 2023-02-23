import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddCoupon from "../../Components/Admin/AdminAddCoupon";
import AdminCoupons from "../../Components/Admin/AdminCoupons";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminAddCouponPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddCoupon />
          <AdminCoupons />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddCouponPage;

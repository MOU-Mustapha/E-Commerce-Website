import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminOrderDetailsPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;

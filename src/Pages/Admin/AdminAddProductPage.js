import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddProduct from "../../Components/Admin/AdminAddProduct";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminAddProductPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProductPage;

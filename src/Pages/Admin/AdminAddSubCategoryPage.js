import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory'
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminAddSubCategoryPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage;

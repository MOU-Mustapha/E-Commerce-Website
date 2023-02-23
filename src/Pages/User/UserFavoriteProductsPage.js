import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserFavoriteProducts from "../../Components/User/UserFavoriteProducts";
import UserSideBar from "../../Components/User/UserSideBar";
import Pagination from "../../Components/Utilities/Pagination";

const UserFavoriteProductsPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserFavoriteProducts />
        </Col>
      </Row>
    </Container>
  );
};

export default UserFavoriteProductsPage;

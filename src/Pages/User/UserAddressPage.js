import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserAddress from "../../Components/User/UserAddress";
import UserSideBar from "../../Components/User/UserSideBar";

const UserAddressPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddressPage;

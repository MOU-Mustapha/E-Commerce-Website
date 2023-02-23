import React from "react";
import { Container } from "react-bootstrap";
import PaymentMethod from '../../Components/Payment/PaymentMethod'

const PaymentMethodPage = () => {
  return (
    <Container style={{ minHeight: "calc(100vh - 158px)" }}>
      <PaymentMethod />
    </Container>
  );
};

export default PaymentMethodPage;

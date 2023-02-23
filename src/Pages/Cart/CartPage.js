import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartTotal from "../../Components/Cart/CartTotal";
import AllUserProductsCartHook from "../../CustomHook/Cart/AllUserProductsCartHook";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const [, cartProducts, totalPrice, couponNameRes, totalPriceAfterCoupon] =
    AllUserProductsCartHook();
  return (
    <Container style={{ minHeight: "calc(100vh - 158px)" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row>
        <Col xs="12" md="9">
          {cartProducts.length ? (
            cartProducts.map((product, index) => {
              return <CartItem key={index} product={product} />;
            })
          ) : (
            <h6>لا يوجد منتجات في العربة</h6>
          )}
        </Col>
        <Col xs="12" md="3">
          {cartProducts.length ? (
            <CartTotal
              totalPrice={totalPrice}
              couponNameRes={couponNameRes}
              totalPriceAfterCoupon={totalPriceAfterCoupon}
              cartProducts={cartProducts}
            />
          ) : null}
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default CartPage;

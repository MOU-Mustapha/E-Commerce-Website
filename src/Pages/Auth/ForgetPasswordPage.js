import React from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import ForgetPasswordPageHook from "../../CustomHook/Auth/ForgetPasswordPageHook";
import { ToastContainer } from "react-toastify";

const ForgetPasswordPage = () => {
  const [email, loading, isPress, onEmailChange, handleSubmit] =
    ForgetPasswordPageHook();
  return (
    <Container style={{ height: "calc(100vh - 158px)" }}>
      <Row className="py-5">
        <Col sm="12">
          <Form>
            <Form.Label className="mx-auto title-login d-flex justify-content-center">
              هل نسيت كلمة المرور ؟
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني..."
              className="user-input my-3 text-center mx-auto"
              value={email}
              onChange={onEmailChange}
            />
            <button
              onClick={handleSubmit}
              className="btn-login mx-auto mt-4 d-block"
            >
              إرسال الكود
            </button>
          </Form>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" />
            <div className="admin-content-text-spinner mt-1">
              جاري التحميل...
            </div>
          </div>
        ) : null
      ) : null}
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

export default ForgetPasswordPage;

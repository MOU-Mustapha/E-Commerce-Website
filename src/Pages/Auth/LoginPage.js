import React from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginPageHook from "../../CustomHook/Auth/LoginPageHook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    isPress,
    onEmailChange,
    onPasswordChange,
    handleSubmit,
  ] = LoginPageHook();
  return (
    <Container style={{ height: "calc(100vh - 158px)" }}>
      <Row className="py-5">
        <Col sm="12">
          <Form>
            <Form.Label className="mx-auto title-login d-flex justify-content-center">
              تسجيل الدخول
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني..."
              className="user-input my-3 text-center mx-auto"
              value={email}
              onChange={onEmailChange}
            />
            <Form.Control
              type="password"
              placeholder="كلمة السر..."
              className="user-input my-3 text-center mx-auto"
              value={password}
              onChange={onPasswordChange}
            />
            <button
              onClick={handleSubmit}
              className="btn-login mx-auto mt-4 d-block"
            >
              تسجيل الدخول
            </button>
            <Form.Label className="mx-auto my-4 d-flex justify-content-center">
              ليس لديك حساب ؟
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span className="text-danger" style={{ cursor: "pointer" }}>
                  إضغط هنا
                </span>
              </Link>
            </Form.Label>
            <Form.Label className="mx-auto my-4 d-flex justify-content-center">
              <Link
                to="/user/forget-password"
                style={{ textDecoration: "none" }}
              >
                <span className="text-danger" style={{ cursor: "pointer" }}>
                  هل نسيت كلمة المرور ؟
                </span>
              </Link>
            </Form.Label>
          </Form>
        </Col>
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

export default LoginPage;

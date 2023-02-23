import React from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterPageHook from "../../CustomHook/Auth/RegisterPageHook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
    name,
    email,
    phoneNumber,
    password,
    confirmPassword,
    loading,
    isPress,
    onNameChange,
    onEmailChange,
    onPhoneNumberChange,
    onPasswordChange,
    onConfirmPassWordChange,
    handleSubmit,
  ] = RegisterPageHook();
  return (
    <Container style={{ height: "calc(100vh - 158px)" }}>
      <Row className="py-4">
        <Col sm="12">
          <Form>
            <Form.Label className="mx-auto title-login d-flex justify-content-center">
              تسجيل حساب جديد
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="إسم المستخدم..."
              className="user-input my-3 text-center mx-auto"
              onChange={onNameChange}
              value={name}
            />
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني..."
              className="user-input my-3 text-center mx-auto"
              onChange={onEmailChange}
              value={email}
            />
            <Form.Control
              type="phone"
              placeholder="رقم الهاتف..."
              className="user-input my-3 text-center mx-auto"
              onChange={onPhoneNumberChange}
              value={phoneNumber}
            />
            <Form.Control
              type="password"
              placeholder="كلمة المرور..."
              className="user-input my-3 text-center mx-auto"
              onChange={onPasswordChange}
              value={password}
            />
            <Form.Control
              type="password"
              placeholder="تأكيد كلمة المرور..."
              className="user-input my-3 text-center mx-auto"
              onChange={onConfirmPassWordChange}
              value={confirmPassword}
            />
            <button
              onClick={handleSubmit}
              className="btn-login mx-auto mt-4 d-block"
            >
              تسجيل الحساب
            </button>
            <Form.Label className="mx-auto my-4 d-flex justify-content-center">
              لديك حساب بالفعل ؟
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span className="text-danger" style={{ cursor: "pointer" }}>
                  إضغط هنا
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

export default RegisterPage;

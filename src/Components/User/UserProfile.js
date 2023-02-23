import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import UserProfileHook from "../../CustomHook/User/UserProfileHook";
import edit from "../../Images/edit.png";
import { ToastContainer } from "react-toastify";

const UserProfile = () => {
  const [
    userData,
    show,
    handleShow,
    handleClose,
    userName,
    userEmail,
    userPhone,
    onNameChange,
    onEmailChange,
    onPhoneChange,
    handleEditData,
    currentPassword,
    password,
    passwordConfirm,
    onCurrentPasswordChange,
    onPasswordChange,
    onPasswordConfirmChange,
    handleEditPassword,
  ] = UserProfileHook();
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تعديل البيانات الشخصية</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="font w-100 input-form p-2"
            placeholder="إسم المستخدم..."
            value={userName}
            onChange={onNameChange}
          />
          <input
            type="email"
            className="font w-100 input-form p-2 mt-3"
            placeholder="البريد الإلكتروني..."
            value={userEmail}
            onChange={onEmailChange}
          />
          <input
            type="phone"
            className="font w-100 input-form p-2 mt-3"
            placeholder="رقم الهاتف..."
            value={userPhone}
            onChange={onPhoneChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="product-cart-add p-3" onClick={handleClose}>
            إغلاق
          </button>
          <button className="product-cart-add p-3" onClick={handleEditData}>
            حفظ التعديلات
          </button>
        </Modal.Footer>
      </Modal>
      <div className="admin-content-text mt-3 mb-2">الصفحة الشخصية</div>
      <div className="user-address-card my-3 px-2">
        <Row className="pt-2">
          <Col xs="6" className="d-flex align-items-center">
            <div className="p-1">الإسم :</div>
            <div className="p-1 item-delete-edit">{userData.name}</div>
          </Col>
          <Col sm="6" className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2">
              <img
                src={edit}
                alt=""
                className="ms-1 mt-2"
                height="17px"
                width="15px"
                style={{ cursor: "pointer" }}
              />
              <p className="item-delete-edit">تعديل</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex align-items-center">
            <div className="p-1">البريد الإلكتروني :</div>
            <div className="p-1 item-delete-edit">{userData.email}</div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex align-items-center">
            <div className="p-1">رقم الهاتف :</div>
            <div className="p-1 item-delete-edit">{userData.phone}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6">
            <div className="admin-content-text mb-2">تغيير كلمة المرور</div>
            <input
              type="password"
              placeholder="إدخل كلمة المرور القديمة...."
              className="input-form mt-1 px-3"
              value={currentPassword}
              onChange={onCurrentPasswordChange}
            />
            <input
              type="password"
              placeholder="إدخل كلمة المرور الجديدة...."
              className="input-form mt-3 px-3"
              value={password}
              onChange={onPasswordChange}
            />
            <input
              type="password"
              placeholder="تأكيد كلمة المرور الجديدة...."
              className="input-form mt-3 px-3"
              value={passwordConfirm}
              onChange={onPasswordConfirmChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end">
            <button onClick={handleEditPassword} className="btn-save mt-2">حفظ كلمة المرور</button>
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
      </div>
    </div>
  );
};

export default UserProfile;

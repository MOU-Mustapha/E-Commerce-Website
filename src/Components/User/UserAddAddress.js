import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAddAddressHook from "../../CustomHook/User/UserAddAddressHook";
import { ToastContainer } from "react-toastify";

const UserAddAddress = () => {
  const [
    alias,
    details,
    phone,
    loading,
    onAliasChange,
    onDetailsChange,
    onPhoneChange,
    handleSubmit,
  ] = UserAddAddressHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إضافة عنوان جديد</div>
      <Row>
        <Col sm="8">
          <input
            type="text"
            placeholder="تسمية العنوان مثلاً (المنزل - العمل )"
            className="input-form mt-3 px-3"
            onChange={onAliasChange}
            value={alias}
          />
          <textarea
            placeholder="العنوان بالتفصيل"
            className="input-form-area mt-3 p-2"
            rows="4"
            cols="50"
            onChange={onDetailsChange}
            value={details}
          />
          <input
            type="text"
            placeholder="رقم الهاتف"
            className="input-form mt-3 px-3"
            onChange={onPhoneChange}
            value={phone}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save mt-2">
            إضافة عنوان
          </button>
        </Col>
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
      </Row>
    </div>
  );
};

export default UserAddAddress;

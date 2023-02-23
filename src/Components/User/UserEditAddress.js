import React from "react";
import { Col, Row } from "react-bootstrap";
import UserEditAddressHook from "../../CustomHook/User/UserEditAddressHook";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const [
    alias,
    details,
    phone,
    onAliasChange,
    onDetailsChange,
    onPhoneChange,
    handleEdit,
  ] = UserEditAddressHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">تعديل العنوان</div>
      <Row>
        <Col sm="8">
          <input
            type="text"
            placeholder="تسمية العنوان مثلاً (المنزل - العمل )"
            className="input-form mt-3 px-3"
            value={alias}
            onChange={onAliasChange}
          />
          <textarea
            placeholder="العنوان بالتفصيل"
            className="input-form-area mt-3 p-2"
            rows="4"
            cols="50"
            value={details}
            onChange={onDetailsChange}
          />
          <input
            type="text"
            placeholder="رقم الهاتف"
            className="input-form mt-3 px-3"
            value={phone}
            onChange={onPhoneChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleEdit} className="btn-save mt-2">
            حفظ تعديل العنوان
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

export default UserEditAddress;

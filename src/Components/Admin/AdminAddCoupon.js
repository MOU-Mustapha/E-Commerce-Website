import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AdminAddCouponHook from "../../CustomHook/Admin/AdminAddCouponHook";

const AdminAddCoupon = () => {
  const [
    dateRef,
    onCouponNameChange,
    onCouponDateChange,
    onCouponValueChange,
    couponName,
    couponDate,
    couponValue,
    handleSubmit,
  ] = AdminAddCouponHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إضافة كوبون جديد</div>
      <Row>
        <Col sm="8">
          <input
            type="text"
            placeholder="إسم الكوبون...."
            className="input-form mt-3 px-3"
            onChange={onCouponNameChange}
            value={couponName}
          />
          <input
            ref={dateRef}
            type="text"
            placeholder="تاريخ الإنتهاء...."
            className="input-form mt-3 px-3"
            value={couponDate}
            onChange={onCouponDateChange}
            onFocus={() => (dateRef.current.type = "date")}
          />
          <input
            type="number"
            placeholder="نسبة الخصم...."
            className="input-form mt-3 px-3"
            onChange={onCouponValueChange}
            value={couponValue}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save mt-3">
            إضافة الكوبون
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

export default AdminAddCoupon;

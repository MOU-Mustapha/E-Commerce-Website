import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AdminEditCouponHook from "../../CustomHook/Admin/AdminEditCouponHook";

const AdminEditCoupon = () => {
  const [
    dateRef,
    couponName,
    couponDate,
    couponValue,
    onCouponNameChange,
    onCouponDateChange,
    onCouponValueChange,
    handleEdit,
  ] = AdminEditCouponHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">تعديل الكوبون</div>
      <Row>
        <Col sm="8">
          <input
            type="text"
            placeholder="إسم الكوبون...."
            className="input-form mt-3 px-3"
            value={couponName}
            onChange={onCouponNameChange}
          />
          <input
            ref={dateRef}
            type="text"
            placeholder="تاريخ الإنتهاء...."
            className="input-form mt-3 px-3"
            onFocus={() => (dateRef.current.type = "date")}
            value={couponDate}
            onChange={onCouponDateChange}
          />
          <input
            type="number"
            placeholder="نسبة الخصم...."
            className="input-form mt-3 px-3"
            value={couponValue}
            onChange={onCouponValueChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleEdit} className="btn-save mt-3">
            تعديل الكوبون
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

export default AdminEditCoupon;

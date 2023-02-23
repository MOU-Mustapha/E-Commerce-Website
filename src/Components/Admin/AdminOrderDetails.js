import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminOrderDetailsHook from "../../CustomHook/Admin/AdminOrderDetailsHook";
import UserAllOrdersCard from "../User/UserAllOrdersCard";
import { ToastContainer } from "react-toastify";

const AdminOrderDetails = () => {
  const [order, paid, onPaidChange, handlePay, deliver, onDeliverChange, handleDeliver] =
    AdminOrderDetailsHook();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const usaTime = new Date(order.createdAt).toLocaleDateString(
    "en-EG",
    options
  );
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">
        تفاصيل الطلب رقم : #{order.id}
      </div>
      <div className="mb-2">
        {" "}
        <div style={{ color: "#000" }} className="d-inline">
          تاريخ إنشاء الطلب :
        </div>
        <div className="d-inline mx-1 stat">{usaTime}</div>
      </div>
      <Row>
        <Col xs="12">
          <div className="user-order pt-2">
            {order.cartItems
              ? order.cartItems.map((item, index) => {
                  return <UserAllOrdersCard key={index} item={item} />;
                })
              : null}
          </div>
        </Col>
      </Row>
      <Row className="user-data mt-4">
        <Col xs="12">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الإسم :
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {order.user ? order.user.name : null}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف :
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {order.user ? order.user.phone : null}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            البريد الإلكتروني :
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {order.user ? order.user.email : null}
          </div>
        </Col>
        <div className="d-inline px-4 border text-center pt-2">
          المجموع {order.totalOrderPrice} جنيه
        </div>
        <Row className="mt-2">
          <Col sm="6" className="d-flex">
            <select
              name="deliver"
              id="deliver"
              className="select input-form-area mt-1 text-center px-2"
              onChange={onDeliverChange}
              value={deliver}
            >
              <option value="0">حالة التوصيل</option>
              <option value="true">تم التوصيل</option>
            </select>
            <button
              onClick={handleDeliver}
              className="btn-a px-3 d-inline mx-2"
            >
              حفظ
            </button>
          </Col>
          <Col sm="6" className="d-flex">
            <select
              name="pay"
              id="pay"
              onChange={onPaidChange}
              value={paid}
              className="select input-form-area mt-1 text-center px-2"
            >
              <option value="0">حالة الدفع</option>
              <option value="true">تم الدفع</option>
            </select>
            <button onClick={handlePay} className="btn-a px-3 d-inline mx-2">
              حفظ
            </button>
          </Col>
        </Row>
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
  );
};

export default AdminOrderDetails;

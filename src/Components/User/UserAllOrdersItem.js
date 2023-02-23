import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAllOrdersCard from "./UserAllOrdersCard";

const UserAllOrdersItem = ({ order }) => {
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
    <div className="user-order mb-4 pb-2">
      <Row>
        <div className="py-2 order-title">طلب رقم : #{order.id}</div>
        <div className="mb-2 border-bottom pb-1">
          {" "}
          <div style={{ color: "#000" }} className="d-inline">
            تاريخ إنشاء الطلب :
          </div>
          <div className="d-inline mx-1 stat">{usaTime}</div>
        </div>
      </Row>
      {order.cartItems.length
        ? order.cartItems.map((item, index) => {
            return <UserAllOrdersCard key={index} item={item} />;
          })
        : null}
      <Row>
        <Col xs="9">
          <div>
            <div className="d-inline">طريقة الدفع :</div>
            <div className="d-inline mx-2 stat">
              {order.paymentMethodType === "cash" ? "كاش" : "فيزا"}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="9" className="d-flex">
          <div>
            <div className="d-inline">التوصيل :</div>
            <div className="d-inline mx-2 stat">
              {order.isDelivered === true ? "تم التوصيل" : "لم يتم التوصيل"} -
            </div>
          </div>
          <div>
            <div className="d-inline">الدفع :</div>
            <div className="d-inline mx-2 stat">
              {order.isPaid === true ? "تم الدفع" : "لم يتم الدفع"}
            </div>
          </div>
        </Col>
        <Col xs="3" className="d-flex justify-content-end">
          <div className="brand-text">{order.totalOrderPrice} جنية</div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersItem;

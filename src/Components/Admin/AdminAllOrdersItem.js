import React from "react";
import { Col, Row } from "react-bootstrap";
import deleteIcon from "../../Images/delete.png";
import { Link } from "react-router-dom";

const AdminAllOrdersItem = ({ order }) => {
  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${order._id}`}
        className="cart-item-body-admin my-2 d-flex p-3"
        style={{ textDecoration: "none" }}
      >
        <div className="w-100">
          <Row>
            <Col className="border-bottom pb-1">
              <div style={{ color: "#000" }} className="d-inline">
                طلب رقم :
              </div>
              <div className="d-inline mx-1 stat">{order.id}#</div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div style={{ color: "#000" }} className="d-inline">
                إسم المستخدم :
              </div>
              <div className="d-inline mx-1 stat">{order.user.name}</div>
              <div className="d-inline cat-text me-2">({order.user.email})</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ color: "#000" }} className="d-inline">
                رقم الهاتف :
              </div>
              <div className="d-inline mx-1 stat">{order.user.phone}</div>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <div>
                <div style={{ color: "#000" }} className="d-inline">
                  طريقة الدفع :
                </div>
                <div className="d-inline mx-2 stat">
                  {order.paymentMethodType === "cash" ? "كاش" : "فيزا"}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="9" className="d-flex">
              <div>
                <div style={{ color: "#000" }} className="d-inline">
                  التوصيل :
                </div>
                <div className="d-inline mx-2 stat">
                  {order.isDelivered === true ? "تم التوصيل" : "لم يتم التوصيل"}{" "}
                  -
                </div>
              </div>
              <div>
                <div style={{ color: "#000" }} className="d-inline">
                  الدفع :
                </div>
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
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;

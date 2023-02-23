import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminCouponCardHook from "../../CustomHook/Admin/AdminCouponCardHook";
import deleteIcon from "../../Images/delete.png";
import edit from "../../Images/edit.png";

const AdminCouponCard = ({ coupon }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const usaTime = new Date(coupon.expire).toLocaleDateString("en-EG", options);
  const [handleDelete, show, handleShow, handleClose] =
    AdminCouponCardHook(coupon);
  return (
    <div className="coupon-card p-2 mt-3">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف الكوبون</Modal.Body>
        <Modal.Footer>
          <button className="product-cart-add p-3" onClick={handleClose}>
            إغلاق
          </button>
          <button className="product-cart-add p-3" onClick={handleDelete}>
            حذف الكوبون
          </button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between my-1 mt-2">
        <Col xs="12">
          <div className="">إسم الكوبون : {coupon.name}</div>
        </Col>
      </Row>
      <Row className="my-1">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            تاريخ الإنتهاء:
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {usaTime}
          </div>
        </Col>
      </Row>
      <Row className="my-1">
        <Col xs="6" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            نسبة الخصم :
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {coupon.discount}%
          </div>
        </Col>
        <Col sm="6" className="d-flex justify-content-end">
          <div className="d-flex">
            <Link
              to={`/admin/edit-coupon/${coupon._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mx-2">
                <img
                  src={edit}
                  alt=""
                  width="15px"
                  height="17px"
                  className="ms-1 mt-2"
                />
                <p className="item-delete-edit">تعديل</p>
              </div>
            </Link>
            <div onClick={handleShow} className="d-flex mx-2">
              <img
                src={deleteIcon}
                alt=""
                width="15px"
                height="17px"
                className="ms-1 mt-2"
                style={{ cursor: "pointer" }}
              />
              <p className="item-delete-edit">إزالة</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;

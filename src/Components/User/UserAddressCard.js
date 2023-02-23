import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCardHook from "../../CustomHook/User/UserAddressCardHook";
import deleteIcon from "../../Images/delete.png";
import edit from "../../Images/edit.png";

const UserAddressCard = ({ address }) => {
  const [handleDelete, show, handleShow, handleClose] =
    UserAddressCardHook(address);
  return (
    <div className="user-address-card my-2">
      <Row className="d-flex justify-content-between">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>تأكيد الحذف</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متأكد من حذف العنوان</Modal.Body>
          <Modal.Footer>
            <button className="product-cart-add p-3" onClick={handleClose}>
              إغلاق
            </button>
            <button className="product-cart-add p-3" onClick={handleDelete}>
              حذف العنوان
            </button>
          </Modal.Footer>
        </Modal>
        <Col xs="6">
          <div className="p-2">{address.alias}</div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div className="p-2 d-flex">
            <Link
              to={`/user/edit-address/${address._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mx-2">
                <img
                  src={edit}
                  alt=""
                  width="15px"
                  height="17px"
                  className="ms-1 mt-2"
                  style={{ cursor: "pointer" }}
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
      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {address.details}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
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
            {address.phone}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;

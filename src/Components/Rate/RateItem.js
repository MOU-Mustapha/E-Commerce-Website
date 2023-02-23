import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import rate from "../../Images/rate.png";
import deleteIcon from "../../Images/delete.png";
import editIcon from "../../Images/edit.png";
import RateItemHook from "../../CustomHook/Rate/RateItemHook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ item }) => {
  const [
    userData,
    handleDelete,
    handleEdit,
    show,
    handleClose,
    handleShow,
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    onNewReviewChange,
    newReview,
    settings,
  ] = RateItemHook(item);
  return (
    <div>
      <Row className="mt-3">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>تأكيد الحذف</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متأكد من حذف التقييم</Modal.Body>
          <Modal.Footer>
            <button className="product-cart-add p-3" onClick={handleClose}>
              إغلاق
            </button>
            <button className="product-cart-add p-3" onClick={handleDelete}>
              حذف التقييم
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header>
            <Modal.Title>تعديل التقييم</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactStars {...settings} />
            <input
              type="text"
              className="font w-100 input-form"
              onChange={onNewReviewChange}
              value={newReview}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="product-cart-add p-3" onClick={handleCloseEdit}>
              إغلاق
            </button>
            <button className="product-cart-add p-3" onClick={handleEdit}>
              تعديل التقييم
            </button>
          </Modal.Footer>
        </Modal>
        <Col className="me-5 d-flex">
          <div className="rate-name d-inline ms-2">{item.user.name}</div>
          <img src={rate} alt="" width="16px" height="16px" />
          <div className="cat-rate d-inline pe-1">{item.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="me-4 pb-2 d-flex justify-content-between align-items-center px-3">
          <div className="rate-description ms-2 d-inline">{item.review}</div>
          {userData !== null ? (
            item.user.name === userData.name ? (
              <div>
                <img
                  src={deleteIcon}
                  alt="delete"
                  width="20px"
                  height="20px"
                  style={{ cursor: "pointer" }}
                  className="mx-2"
                  onClick={handleShow}
                />
                <img
                  src={editIcon}
                  alt="edit"
                  width="20px"
                  height="20px"
                  style={{ cursor: "pointer" }}
                  onClick={handleShowEdit}
                />
              </div>
            ) : null
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;

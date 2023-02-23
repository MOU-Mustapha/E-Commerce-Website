import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import no from "../../Images/no.jpg";
import deleteIcon from "../../Images/delete.png";
import CartItemHook from "../../CustomHook/Cart/CartItemHook";

const CartItem = ({ product }) => {
  const [
    show,
    handleClose,
    handleDelete,
    handleShow,
    count,
    onCountChange,
    handleUpdate,
  ] = CartItemHook(product);
  return (
    <div className="cart-item-body my-2 d-flex px-3 pt-3">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          هل أنت متأكد من حذف المنتج من العربة{product.title}
        </Modal.Body>
        <Modal.Footer>
          <button className="product-cart-add p-3" onClick={handleClose}>
            إغلاق
          </button>
          <button className="product-cart-add p-3" onClick={handleDelete}>
            حذف المنتج
          </button>
        </Modal.Footer>
      </Modal>
      <img src={no} alt="" width="160px" height="197px" />
      <div className="w-100">
        <Row>
          <Col className="d-flex justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {product.product.category.name}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-2"
              style={{ cursor: "pointer" }}
            >
              <img
                src={deleteIcon}
                alt=""
                width="20px"
                height="24px"
                style={{ cursor: "pointer" }}
              />
              <div className="cat-text d-inline me-2">إزالة</div>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <div className="d-inline pt-2 cat-title">
              {product.product.title}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {product.product.ratingsAverage || "0"}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="brand-text d-inline mx-1">
              {product.product.brand.name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-1">
            {product.color === "" ? null : (
              <div
                className="color ms-2"
                style={{ backgroundColor: `${product.color}` }}
              ></div>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="cat-text d-inline">الكمية</div>
              <input
                type="number"
                className="mx-2 text-center"
                style={{ width: "60px", height: "40px" }}
                value={count}
                onChange={onCountChange}
              />
              <button
                onClick={handleUpdate}
                className="product-cart-add px-3 py-1"
              >
                تطبيق
              </button>
            </div>
            <div className="d-inline pt-2 brand-text">{product.price} جنية</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CartItem;

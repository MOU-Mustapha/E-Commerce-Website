import React from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminAllProductsCardHook from "../../CustomHook/Admin/AdminAllProductsCardHook";
import rate from "../../Images/rate.png";

const AdminAllProductsCard = ({ product }) => {
  const [show, handleClose, handleShow, handleDelete] =
    AdminAllProductsCardHook(product._id);
  return (
    <Col xs="12" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف المنتج : {product.title}</Modal.Body>
        <Modal.Footer>
          <button className="product-cart-add p-3" onClick={handleClose}>
            إغلاق
          </button>
          <button className="product-cart-add p-3" onClick={handleDelete}>
            حذف المنتج
          </button>
        </Modal.Footer>
      </Modal>
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "355px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Row className="px-2">
          <Col className="d-flex justify-content-between my-1">
            <div onClick={handleShow} className="item-delete-edit">
              إزالة
            </div>
            <Link
              to={`/admin/edit-product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            style={{ height: "230px", width: "100%" }}
            src={product.imageCover}
          />
        </Link>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{product.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
                <img src={rate} alt="" height="16px" width="16px" />
                <div className="card-rate mx-2">{product.ratingsQuantity}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {product.priceAfterDiscount >= 1 ? (
                    <div>
                      <span style={{ textDecoration: "line-through" }}>
                        {product.price}
                      </span>{" "}
                      ... {product.priceAfterDiscount}
                    </div>
                  ) : (
                    product.price
                  )}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;

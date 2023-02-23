import React from "react";
import { Row, Col } from "react-bootstrap";
import CashOrderHook from "../../CustomHook/Payment/CashOrderHook";
import UserAddressHook from "../../CustomHook/User/UserAddressHook";
import { ToastContainer } from "react-toastify";
import AllUserProductsCartHook from "../../CustomHook/Cart/AllUserProductsCartHook";

const PaymentMethod = () => {
  const [allAddresses] = UserAddressHook();
  const [addressId, onAddressChange, handlePay, handleChange] = CashOrderHook();
  const [, , totalPrice, , totalPriceAfterCoupon] = AllUserProductsCartHook();
  return (
    <div>
      <div className="admin-content-text pt-5">إختر طريقة الدفع</div>
      <div className="user-address-card-pay my-3 px-3 d-flex flex-column justify-content-around py-3">
        <Row>
          <Col className="mb-3">
            <input
              type="radio"
              name="group"
              id="group1"
              value="card"
              className="mt-2"
              style={{ cursor: "pointer" }}
              onChange={handleChange}
            />
            <label className="mx-2" for="group1" style={{ cursor: "pointer" }}>
              الدفع عن طريق البطاقة الائتمانية
            </label>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <input
              type="radio"
              name="group"
              id="group2"
              value="cash"
              className="mt-2"
              style={{ cursor: "pointer" }}
              onChange={handleChange}
            />
            <label className="mx-2" for="group2" style={{ cursor: "pointer" }}>
              الدفع عند الإستلام
            </label>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <select
              name="address"
              id="address"
              className="select input-form-area my-3 px-2"
              value={addressId}
              onChange={onAddressChange}
            >
              <option value="0">أختر عنوان الشحن</option>
              {allAddresses.data ? (
                allAddresses.data.map((address, index) => {
                  return (
                    <option key={index} value={address._id}>
                      {address.alias}
                    </option>
                  );
                })
              ) : (
                <h6>لا يوجد عناويين مسجلة</h6>
              )}
            </select>
          </Col>
        </Row>
      </div>
      <Row>
        <Col className="d-flex justify-content-end">
          <div className="product-price border">
            {totalPriceAfterCoupon >= 1
              ? `${totalPrice} جنية ... بعد الخصم ${totalPriceAfterCoupon}`
              : `${totalPrice} جنية`}
          </div>
          <div onClick={handlePay} className="product-cart-add px-4 me-2">
            إتمام الشراء
          </div>
        </Col>
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

export default PaymentMethod;

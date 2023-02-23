import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartTotalHook from "../../CustomHook/Cart/CartTotalHook";

const CartTotal = ({ totalPrice, couponNameRes, totalPriceAfterCoupon }) => {
  const [
    handleDeleteAll,
    loading,
    isPress,
    handleCoupon,
    couponName,
    onCouponNameChange,
  ] = CartTotalHook(couponNameRes);
  return (
    <div>
      <div className="my-1 cart-checkout pt-3 d-flex flex-column px-3">
        <div className="d-flex">
          <input
            type="text"
            placeholder="كود الخصم"
            className="coupon-input d-inline text-center"
            value={couponName}
            onChange={onCouponNameChange}
          />
          <button onClick={handleCoupon} className="coupon-btn d-inline">
            تطبيق
          </button>
        </div>
        <div className="product-price w-100 my-3 border">
          {totalPriceAfterCoupon >= 1
            ? `${totalPrice} جنية ... بعد الخصم ${totalPriceAfterCoupon}`
            : `${totalPrice} جنية`}
        </div>
        <button
          onClick={handleDeleteAll}
          className="product-cart-add w-100 px-2"
        >
          مسح العربة
        </button>
        <Link to="/order/pay-method" style={{ textDecoration: "none" }}>
          <button className="product-cart-add w-100 px-2 mt-3">
            إتمام الشراء
          </button>
        </Link>
      </div>
      {isPress ? (
        loading ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" />
            <div className="admin-content-text-spinner mt-1">
              جاري التحميل...
            </div>
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default CartTotal;

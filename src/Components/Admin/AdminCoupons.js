import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AdminAddCouponHook from "../../CustomHook/Admin/AdminAddCouponHook";
import AdminCouponCard from "./AdminCouponCard";

const AdminCoupons = () => {
  const [, , , , , , , , coupons, loadingAll] = AdminAddCouponHook();
  return (
    <div>
      <Row className="mt-3">
        <Col sm="8">
          {!loadingAll ? (
            coupons.length ? (
              coupons.map((coupon, index) => {
                return <AdminCouponCard key={index} coupon={coupon} />;
              })
            ) : (
              <h4>لا يوجد كوبونات</h4>
            )
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Spinner animation="border" />
              <div className="admin-content-text-spinner mt-1">
                جاري التحميل...
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminCoupons;

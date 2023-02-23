import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressHook from "../../CustomHook/User/UserAddressHook";
import UserAddressCard from "./UserAddressCard";

const UserAddress = () => {
  const [allAddresses, loading] = UserAddressHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">دفتر العناوين</div>
      <Row>
        {!loading ? (
          allAddresses.data.length ? (
            allAddresses.data.map((address, index) => {
              return <UserAddressCard key={index} address={address} />;
            })
          ) : (
            <h6>لا يوجد عناوين</h6>
          )
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" />
            <div className="admin-content-text-spinner mt-1">
              جاري التحميل...
            </div>
          </div>
        )}
      </Row>
      <Row className="justify-content-center">
        <Col sm="3">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">إضافة عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddress;

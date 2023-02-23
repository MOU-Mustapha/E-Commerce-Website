import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";

const AllBrandsContainer = ({ brand, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-3">كل الماركات</div>
      <Row className="my-3">
        {!loading ? (
          brand ? (
            brand.map((item, index) => {
              return <BrandCard key={index} img={item.image} id={item._id} />;
            })
          ) : (
            <h4>لا يوجد ماركات</h4>
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
    </Container>
  );
};

export default AllBrandsContainer;

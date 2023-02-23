import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utilities/SubTitle";
import BrandCard from "./BrandCard";
import HomeBrandHook from "../../CustomHook/Brands/HomBrandsHook";

const PremiumBrands = ({ title, btnTitle, pathText }) => {
  const [brand, loading] = HomeBrandHook();
  return (
    <div>
      <Container>
        <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
        <Row className="my-3">
          {!loading ? (
            brand.data ? (
              brand.data.slice(0, 6).map((item, index) => {
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
    </div>
  );
};

export default PremiumBrands;

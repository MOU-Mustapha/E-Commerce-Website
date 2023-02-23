import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utilities/SubTitle";
import Spinner from "react-bootstrap/Spinner";
import HomeCategoryHook from "../../CustomHook/Category/HomeCategoryHook";

const HomeCategory = () => {
  const [category, loading, colors] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" pathText="/all-category" />
      <Row className="my-3">
        {!loading ? (
          category.data ? (
            category.data.slice(0, 6).map((item, index) => {
              return (
                <CategoryCard
                  title={item.name}
                  id={item._id}
                  img={item.image}
                  background={colors[index]}
                  key={index}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
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

export default HomeCategory;

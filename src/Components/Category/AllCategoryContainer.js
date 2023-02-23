import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const AllCategoryContainer = ({ category, loading }) => {
  const colors = [
    "#644D17",
    "#41B548",
    "#DD0962",
    "#9D44AA",
    "#F0CC62",
    "#641717",
    "#FFD3E8",
    "#FF6262",
    "#55CFDF",
    "#0034FF",
    "#F4DBA5",
    "#644D17",
  ];
  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className="my-3">
        {loading === false ? (
          category ? (
            category.map((item, index) => {
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

export default AllCategoryContainer;

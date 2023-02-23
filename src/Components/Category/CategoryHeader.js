import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllCategoryPageHook from "../../CustomHook/Category/AllCategoryPageHook";

const CategoryHeader = () => {
  const [category] = AllCategoryPageHook();
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start flex-wrap py-2">
            {category
              ? category.data.slice(0, 8).map((cat, index) => {
                  return (
                    <Link
                      to={`/products/category/${cat._id}`}
                      style={{ textDecoration: "none" }}
                      key={index}
                    >
                      <div className="cat-text-header">{cat.name}</div>
                    </Link>
                  );
                })
              : null}
            <Link to="/all-category" style={{ textDecoration: "none" }}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;

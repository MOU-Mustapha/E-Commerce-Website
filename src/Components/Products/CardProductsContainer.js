import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CardProductContainerHook from "../../CustomHook/Products/CardProductContainerHook";
import SubTitle from "../Utilities/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({
  title,
  btnTitle,
  pathText,
  products,
  loading,
}) => {
  const [favProducts] = CardProductContainerHook();
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
      <Row className="my-3">
        {!loading ? (
          products.length ? (
            products.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  favProducts={favProducts}
                />
              );
            })
          ) : (
            <h4>لا يوجد منتجات</h4>
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

export default CardProductsContainer;

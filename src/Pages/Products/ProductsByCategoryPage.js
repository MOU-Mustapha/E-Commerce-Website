import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utilities/Pagination";
import ProductsByCategoryPageHook from "../../CustomHook/Products/ProductsByCategoryPageHook";

const ProductsByCategoryPage = () => {
  const [items, loading, pageCount, getPageNumber] =
    ProductsByCategoryPageHook();
  return (
    <div>
      <Container style={{ height: "calc(100vh - 158px)" }}>
        <Row>
          <Col sm="12">
            <CardProductsContainer
              products={items}
              loading={loading}
              title=""
              btnTitle=""
            />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPageNumber} />
        ) : null}
      </Container>
    </div>
  );
};

export default ProductsByCategoryPage;

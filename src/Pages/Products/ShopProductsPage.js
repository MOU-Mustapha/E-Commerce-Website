import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utilities/Pagination";
import SearchProductsTitle from "../../Components/Utilities/SearchProductsTitle";
import SideFilter from "../../Components/Utilities/SideFilter";
import SearchProductHook from "../../CustomHook/Products/SearchProductHook";

const ShopProductsPage = () => {
  const [items, loading, pageCount, results, getPageNumber, allProducts] =
    SearchProductHook();
  return (
    <div>
      <CategoryHeader />
      <Container>
        <SearchProductsTitle
          allProducts={allProducts}
          title={`هناك ${results} نتيجة بحث`}
        />
        <Row>
          <Col sm="2">
            <SideFilter />
          </Col>
          <Col sm="10">
            <CardProductsContainer
              products={items}
              loading={loading}
              title=""
              btnTitle=""
            />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={getPageNumber} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;

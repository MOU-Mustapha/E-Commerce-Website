import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utilities/Pagination";
import AdminAllProductsPageHook from "../../CustomHook/Admin/AdminAllProductsPageHook";

const AdminAllProductsPage = () => {
  const [items, loading, pageCount, getPageNumber] = AdminAllProductsPageHook();
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts products={items} loading={loading} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPageNumber} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;

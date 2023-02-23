import React from "react";
import { Row, Spinner } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products, loading }) => {
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إدارة جميع المنتجات</div>
      <Row>
        {!loading ? (
          products.length ? (
            products.map((item, index) => {
              return <AdminAllProductsCard key={index} product={item} />;
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
    </div>
  );
};

export default AdminAllProducts;

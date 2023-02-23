import React from "react";
import { Row, Spinner } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserAllOrdersHook from "../../CustomHook/User/UserAllOrdersHook";
import Pagination from "../../Components/Utilities/Pagination";

const AdminAllOrders = () => {
  const [, numOfOrders, pageCount, orders, loading, getPageNumber] =
    UserAllOrdersHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إدارة جميع الطلبات</div>
      <div>
        <div className="cat-text d-inline">عدد الطلبات : </div>
        <div className="brand-text d-inline mx-1">{numOfOrders}</div>
      </div>
      <Row>
        {!loading ? (
          orders.length ? (
            orders.map((order, index) => {
              return <AdminAllOrdersItem key={index} order={order} />;
            })
          ) : (
            <h6>لا يوجد طلبات</h6>
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
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPageNumber} />
      ) : null}
    </div>
  );
};

export default AdminAllOrders;

import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/all-products" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إدارة المنتجات
        </div>
      </Link>
      <Link to="/admin/all-orders" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إدارة الطلبات
        </div>
      </Link>
      <Link to="/admin/add-brand" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إضافة ماركة
        </div>
      </Link>
      <Link to="/admin/add-category" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إضافة تصنيف
        </div>
      </Link>
      <Link to="/admin/add-sub-category" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إضافة تصنيف فرعي
        </div>
      </Link>
      <Link to="/admin/add-product" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إضافة منتج
        </div>
      </Link>
      <Link to="/admin/add-coupon" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إضافة كوبون
        </div>
      </Link>
    </div>
  );
};

export default AdminSideBar;

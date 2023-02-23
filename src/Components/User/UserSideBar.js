import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/user/allorders" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          إدارة الطلبات
        </div>
      </Link>
      <Link to="/user/favorite-products" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          المنتجات المفضلة
        </div>
      </Link>
      <Link to="/user/address" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          العناوين الشخصية
        </div>
      </Link>
      <Link to="/user/profile" style={{ textDecoration: "none" }}>
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          الملف الشخصي
        </div>
      </Link>
    </div>
  );
};

export default UserSideBar;

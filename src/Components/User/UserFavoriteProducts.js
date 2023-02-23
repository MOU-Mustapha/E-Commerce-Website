import React from "react";
import { Row } from "react-bootstrap";
import CardProductsContainer from "../Products/CardProductsContainer";
import UserFavoriteProductsHook from "../../CustomHook/User/UserFavoriteProductsHook";

const UserFavoriteProducts = () => {
  const [favProds, loading] = UserFavoriteProductsHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">المنتجات المفضلة</div>
      <Row>
        <CardProductsContainer
          products={favProds}
          loading={loading}
          title=""
          btnTitle=""
        />
      </Row>
    </div>
  );
};

export default UserFavoriteProducts;

import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductDetailsHook from "../../CustomHook/Products/ProductDetailsHook";

const ProductDetailsPage = () => {
  const [item, , , , catPro, loading] = ProductDetailsHook();
  if (catPro) {
    var prods = catPro.slice(0, 4);
  }
  if (item) {
    var ratingAvg = item.ratingsAverage;
    var ratingQuantity = item.ratingsQuantity;
  }
  return (
    <div>
      <Container>
        <ProductDetails />
        <RateContainer ratingAvg={ratingAvg} ratingQuantity={ratingQuantity} />
        <CardProductsContainer
          products={prods}
          loading={loading}
          title="منتجات قد تعجبك"
        />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;

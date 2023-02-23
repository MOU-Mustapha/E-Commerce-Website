import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import PremiumBrands from "../../Components/Brands/PremiumBrands";
import HomePageProductHook from "../../CustomHook/Products/HomePageProductHook";

const HomePage = () => {
  const [items, loading] = HomePageProductHook();
  return (
    <div>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الأكثر مبيعاً"
        btnTitle="المزيد"
        pathText="/products"
        products={items}
        loading={loading}
      />
      <DiscountSection />
      <CardProductsContainer
        title="أحدث الأزياء"
        btnTitle="المزيد"
        pathText="/products"
        products={items}
        loading={loading}
      />
      <PremiumBrands
        title="أشهر الماركات"
        btnTitle="المزيد"
        pathText="/all-brands"
      />
    </div>
  );
};

export default HomePage;

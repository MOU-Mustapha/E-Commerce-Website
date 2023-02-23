import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../Redux/actions/categoryAction";
import { getAllBrandAction } from "../../Redux/actions/BrandAction";
import SearchProductHook from "../Products/SearchProductHook";

const SideFilterSearchHook = () => {
  const [, , , , , allProducts] = SearchProductHook();
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategoryAction());
      await dispatch(getAllBrandAction());
    };
    run();
  }, []);
  const { category } = useSelector((state) => state.allCategory);
  const { brand } = useSelector((state) => state.allBrand);
  let categories = [];
  let brands = [];
  try {
    if (category.data) {
      categories = category.data;
    } else {
      categories = [];
    }
  } catch (err) {}
  try {
    if (brand.data) {
      brands = brand.data;
    } else {
      brands = [];
    }
  } catch (err) {}
  const [catCheckedId, setCatCheckedId] = useState([]);
  const clickCategory = (e) => {
    if (e.target.value === "0") {
      setCatCheckedId([]);
    } else {
      if (e.target.checked === true) {
        setCatCheckedId([...catCheckedId, e.target.value]);
      } else if (e.target.checked === false) {
        const newArray = catCheckedId.filter((item) => item !== e.target.value);
        setCatCheckedId(newArray);
      }
    }
  };
  useEffect(() => {
    var catQuery = catCheckedId
      .map((item) => "category[in][]=" + item)
      .join("&");
    localStorage.setItem("catChecked", catQuery);
    setTimeout(() => allProducts(), 1000);
  }, [catCheckedId]);
  const [brandCheckedId, setBrandCheckedId] = useState([]);
  const clickBrand = (e) => {
    if (e.target.value === "0") {
      setBrandCheckedId([]);
    } else {
      if (e.target.checked === true) {
        setBrandCheckedId([...brandCheckedId, e.target.value]);
      } else if (e.target.checked === false) {
        const newArray = brandCheckedId.filter(
          (item) => item !== e.target.value
        );
        setBrandCheckedId(newArray);
      }
    }
  };
  useEffect(() => {
    var brandQuery = brandCheckedId
      .map((item) => "brand[in][]=" + item)
      .join("&");
    localStorage.setItem("brandChecked", brandQuery);
    setTimeout(() => allProducts(), 1000);
  }, [brandCheckedId]);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const handlePriceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };
  const handlePriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => allProducts(), 1000);
  }, [priceFrom, priceTo]);
  return [
    categories,
    brands,
    clickCategory,
    clickBrand,
    handlePriceFrom,
    handlePriceTo,
  ];
};

export default SideFilterSearchHook;

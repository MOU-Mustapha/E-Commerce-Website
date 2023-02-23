import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProductsAction } from "../../Redux/actions/productAction";

const SearchProductHook = () => {
  const dispatch = useDispatch();
  let word = "";
  let catQuery = "";
  let brandQuery = "";
  let priceFrom = "";
  let priceTo = "";
  let priceFromQuery = "";
  let priceToQuery = "";
  const getLocalStorageValues = () => {
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("catChecked")) {
      catQuery = localStorage.getItem("catChecked");
    }
    if (localStorage.getItem("brandChecked")) {
      brandQuery = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceFrom")) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo")) {
      priceTo = localStorage.getItem("priceTo");
    }
    if (priceFrom === "" || priceFrom <= 0) {
      priceFromQuery = "";
    } else {
      priceFromQuery = `&price[gt]=${priceFrom}`;
    }
    if (priceTo === "" || priceTo <= 0) {
      priceToQuery = "";
    } else {
      priceToQuery = `&price[lte]=${priceTo}`;
    }
  };
  const allProducts = async () => {
    getLocalStorageValues();
    sortData();
    await dispatch(
      getSearchProductsAction(
        `limit=8&keyword=${word}&sort=${sort}&${catQuery}&${brandQuery}${priceFromQuery}${priceToQuery}`
      )
    );
  };
  useEffect(() => {
    allProducts();
  }, []);
  const { product, loading } = useSelector((state) => state.product);
  let items = [];
  let pageCount = 0;
  let results = 0;
  try {
    if (product.data) {
      items = product.data;
    } else {
      items = [];
    }
  } catch (err) {}
  try {
    if (product.paginationResult) {
      pageCount = product.paginationResult.numberOfPages;
    } else {
      pageCount = 0;
    }
  } catch (err) {}
  try {
    if (product.results) {
      results = product.results;
    } else {
      results = 0;
    }
  } catch (err) {}
  const getPageNumber = (page) => {
    getLocalStorageValues();
    sortData();
    dispatch(
      getSearchProductsAction(
        `limit=8&page=${page}&keyword=${word}&sort=${sort}&${catQuery}&${brandQuery}${priceFromQuery}${priceToQuery}`
      )
    );
  };
  let sortType = "";
  let sort = "";
  const sortData = () => {
    if (localStorage.getItem("sortType")) {
      sortType = localStorage.getItem("sortType");
    }
    if (sortType === "الكمية المتاحة") {
      sort = "-quantity";
    } else if (sortType === "الأكثر مبيعاً") {
      sort = "-sold";
    } else if (sortType === "الأعلي تقيماً") {
      sort = "-ratingsQuantity";
    } else if (sortType === "السعر من الأقل للأعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الأعلي للأقل") {
      sort = "-price";
    }
  };
  return [items, loading, pageCount, results, getPageNumber, allProducts];
};

export default SearchProductHook;

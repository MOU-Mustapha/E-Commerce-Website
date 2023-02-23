import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrandAction } from "../../Redux/actions/BrandAction";

const AllBrandsPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrandAction(12));
  }, []);
  const { brand, loading } = useSelector((state) => state.allBrand);
  let pageCount = 0;
  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages;
  }
  const getPageNumber = (page) => {
    dispatch(getAllBrandAction(12, page));
  };
  return [brand, loading, pageCount, getPageNumber];
};

export default AllBrandsPageHook;

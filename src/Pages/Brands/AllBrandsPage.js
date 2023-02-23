import React from "react";
import AllBrandsContainer from "../../Components/Brands/AllBrandsContainer";
import Pagination from "../../Components/Utilities/Pagination";
import AllBrandsPageHook from "../../CustomHook/Brands/AllBrandsPageHook";

const AllBrandsPage = () => {
  const [brand, loading, pageCount, getPageNumber] = AllBrandsPageHook();
  return (
    <div style={{ minHeight: "calc(100vh - 158px)" }}>
      <AllBrandsContainer brand={brand.data} loading={loading} />
      <Pagination pageCount={pageCount} onPress={getPageNumber} />
    </div>
  );
};

export default AllBrandsPage;

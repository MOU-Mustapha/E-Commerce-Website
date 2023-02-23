import React from "react";
import AllCategoryContainer from "../../Components/Category/AllCategoryContainer";
import Pagination from "../../Components/Utilities/Pagination";
import AllCategoryPageHook from "../../CustomHook/Category/AllCategoryPageHook";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPageNumber] = AllCategoryPageHook();
  return (
    <div style={{ minHeight: "calc(100vh - 158px)" }}>
      <AllCategoryContainer category={category.data} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPageNumber} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;

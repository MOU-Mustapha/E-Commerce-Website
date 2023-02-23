import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;

import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../Images/sort.png";

const SearchProductsTitle = ({ title, allProducts }) => {
  const handler = () => {};
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    allProducts();
  };
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-title">{title}</div>
      <div className="search-count-text d-flex">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt="sort-img"
              />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => clickMe("")}
              className="card-filter-item border-bottom"
            >
              بدون ترتيب
            </div>
            <div
              onClick={() => clickMe("الكمية المتاحة")}
              className="card-filter-item border-bottom"
            >
              الكمية المتاحة
            </div>
            <div
              onClick={() => clickMe("الأكثر مبيعاً")}
              className="card-filter-item border-bottom"
            >
              الأكثر مبيعاً
            </div>
            <div
              onClick={() => clickMe("الأعلي تقيماً")}
              className="card-filter-item border-bottom"
            >
              الأعلي تقيماً
            </div>
            <div
              onClick={() => clickMe("السعر من الأقل للأعلي")}
              className="card-filter-item border-bottom"
            >
              السعر من الأقل للأعلي
            </div>
            <div
              onClick={() => clickMe("السعر من الأعلي للأقل")}
              className="card-filter-item border-bottom"
            >
              السعر من الأعلي للأقل
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchProductsTitle;

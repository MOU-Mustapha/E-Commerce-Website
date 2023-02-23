import React from "react";
import SideFilterSearchHook from "../../CustomHook/Search/SideFilterSearchHook";

const SideFilter = () => {
  const [
    categories,
    brands,
    clickCategory,
    clickBrand,
    handlePriceFrom,
    handlePriceTo,
  ] = SideFilterSearchHook();
  const fromLocal = localStorage.getItem("priceFrom");
  const toLocal = localStorage.getItem("priceTo");
  return (
    <div className="mt-3">
      <div className="d-flex flex-column">
        <div className="filter-title">الفئة</div>
        <div className="d-flex mt-2">
          <input onChange={clickCategory} type="checkbox" value="0" />
          <div className="filter-sub me-2">الكل</div>
        </div>
        {categories.length ? (
          categories.map((item, index) => {
            return (
              <div key={index} className="d-flex mt-2">
                <input
                  onChange={clickCategory}
                  type="checkbox"
                  value={item._id}
                />
                <div className="filter-sub me-2">{item.name}</div>
              </div>
            );
          })
        ) : (
          <h6>لا يوجد تصنيفات</h6>
        )}
      </div>
      <div className="d-flex flex-column">
        <div className="filter-title mt-3">الماركة</div>
        <div className="d-flex mt-2">
          <input onChange={clickBrand} type="checkbox" value="0" />
          <div className="filter-sub me-2">الكل</div>
        </div>
        {brands.length ? (
          brands.map((item, index) => {
            return (
              <div key={index} className="d-flex mt-2">
                <input onChange={clickBrand} type="checkbox" value={item._id} />
                <div className="filter-sub me-2">{item.name}</div>
              </div>
            );
          })
        ) : (
          <h6>لا يوجد ماركات</h6>
        )}
      </div>
      <div className="d-flex flex-column">
        <div className="filter-title mt-3">السعر</div>
        <div className="d-flex mt-1">
          <p className="filter-sub my-2" style={{ width: "25px" }}>
            من :
          </p>
          <input
            type="number"
            style={{ width: "70px", height: "25px" }}
            className="m-1 text-center"
            onChange={handlePriceFrom}
            value={fromLocal}
          />
        </div>
        <div className="d-flex mt-1">
          <p className="filter-sub my-2" style={{ width: "25px" }}>
            إلي :
          </p>
          <input
            type="number"
            style={{ width: "70px", height: "25px" }}
            className="m-1 text-center"
            onChange={handlePriceTo}
            value={toLocal}
          />
        </div>
      </div>
    </div>
  );
};

export default SideFilter;

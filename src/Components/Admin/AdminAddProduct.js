import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import add from "../../Images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AddProductHook from "../../CustomHook/Products/AddProductHook";

const AdminAddProduct = () => {
  const [
    images,
    setImages,
    onProdNameChange,
    prodName,
    onProdDescChange,
    prodDescription,
    onPriceBeforeChange,
    priceBefore,
    onPriceAfterChange,
    priceAfter,
    onQuantityChange,
    quantity,
    onCategoryChange,
    category,
    options,
    onSelect,
    onRemove,
    onBrandChange,
    brand,
    colors,
    handleRemoveColor,
    handleColorPick,
    colorPick,
    handleChangeComplete,
    handleSubmit,
    isPress,
    loading,
    catId,
    brandId,
  ] = AddProductHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إضافة منتج جديد</div>
      <Row>
        <Col sm="8">
          <div className="text-form pb-2">صور المنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            allowCrop={false}
            max={5}
            theme={{
              background: "transparent",
              outlineColor: "#979797",
            }}
          />
          <input
            type="text"
            placeholder="إسم المنتج...."
            className="input-form mt-3 px-3"
            onChange={onProdNameChange}
            value={prodName}
          />
          <textarea
            rows="4"
            cols="50"
            className="input-form-area p-2 mt-3"
            placeholder="وصف المنتج...."
            onChange={onProdDescChange}
            value={prodDescription}
          />
          <input
            type="number"
            placeholder="السعر قبل الخصم...."
            className="input-form mt-3 px-3"
            onChange={onPriceBeforeChange}
            value={priceBefore}
          />
          <input
            type="number"
            placeholder="السعر بعد الخصم...."
            className="input-form mt-3 px-3"
            onChange={onPriceAfterChange}
            value={priceAfter}
          />
          <input
            type="number"
            placeholder="الكمية المتاحة..."
            className="input-form mt-3 px-3"
            onChange={onQuantityChange}
            value={quantity}
          />
          <select
            name="category"
            id="cat"
            className="select input-form-area mt-3 px-2"
            onChange={onCategoryChange}
            value={catId}
          >
            <option value="0">أختر التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي...."
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2"
            onChange={onBrandChange}
            value={brandId}
          >
            <option value="0">أختر الماركة</option>
            {brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3">الألوان المتاحة للمنتج</div>
          <div className="d-flex mt-1">
            {colors.length
              ? colors.map((color, index) => {
                  return (
                    <div
                      className="color ms-2 mt-1"
                      key={index}
                      style={{ backgroundColor: color }}
                      onClick={() => handleRemoveColor(color)}
                    ></div>
                  );
                })
              : null}
            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
              onClick={handleColorPick}
              className="ms-2"
            />
            {colorPick ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save mt-2">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <div className="d-flex flex-column justify-content-center">
            <Spinner animation="border" />
            <div className="admin-content-text-spinner mt-1">
              جاري التحميل...
            </div>
          </div>
        ) : null
      ) : null}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AdminAddProduct;

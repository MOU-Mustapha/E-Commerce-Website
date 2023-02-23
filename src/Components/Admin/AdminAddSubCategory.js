import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../CustomHook/SubCategory/AddSubCategoryHook";

const AdminAddSubCategory = () => {
  const [
    name,
    loading,
    isPress,
    onNameChange,
    handleChange,
    handleSubmit,
    category,
  ] = AddSubCategoryHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إضافة تصنيف فرعي جديد</div>
      <Row>
        <Col sm="8">
          <input
            type="text"
            placeholder="إسم التصنيف الفرعي..."
            className="input-form mt-3 px-3"
            onChange={onNameChange}
            value={name}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2"
            onChange={handleChange}
          >
            <option value="0">أختر التصنيف الأساسي</option>
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
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save mt-3">
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

export default AdminAddSubCategory;

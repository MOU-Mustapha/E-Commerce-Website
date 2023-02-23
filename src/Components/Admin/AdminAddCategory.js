import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../CustomHook/Category/AddCategoryHook";

const AdminAddCategory = () => {
  const [
    img,
    name,
    loading,
    isPress,
    onNameChange,
    onImageChange,
    handleSubmit,
  ] = AddCategoryHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إضافة تصنيف جديد</div>
      <Row>
        <Col sm="8">
          <div className="text-form pb-2">صورة التصنيف</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt=""
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>
          <input
            type="text"
            placeholder="إسم التصنيف...."
            className="input-form mt-3 px-3"
            onChange={onNameChange}
            value={name}
          />
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

export default AdminAddCategory;

import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddBrandHook from "../../CustomHook/Brands/AddBrandHook";

const AdminAddBrand = () => {
  const [
    img,
    name,
    loading,
    isPress,
    onNameChange,
    onImageChange,
    handleSubmit,
  ] = AddBrandHook();
  return (
    <div>
      <div className="admin-content-text mt-3 mb-2">إضافة ماركة جديدة</div>
      <Row>
        <Col sm="8">
          <div className="text-form pb-2">صورة الماركة</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt=""
                width="120px"
                height="100px"
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
            placeholder="إسم الماركة...."
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

export default AdminAddBrand;

import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarLogin from "./Components/Utilities/NavBarLogin";
import Footer from "./Components/Utilities/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import PaymentMethodPage from "./Pages/Payment/PaymentMethodPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAddressPage from "./Pages/User/UserAddressPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import AdminAddCouponPage from "./Pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Pages/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./CustomHook/Auth/ProtectedRouteHook";
import ProtectedRoute from "./Components/Utilities/ProtectedRoute";
import ProductsByCategoryPage from "./Pages/Products/ProductsByCategoryPage";
import ProductsByBrandPage from "./Pages/Products/ProductsByBrandPage";

function App() {
  const [isUser, isAdmin] = ProtectedRouteHook();
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/all-category" element={<AllCategoryPage />} />
          <Route path="/all-brands" element={<AllBrandsPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/products/category/:id"
            element={<ProductsByCategoryPage />}
          />
          <Route path="/products/brand/:id" element={<ProductsByBrandPage />} />
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/all-products"
              element={<AdminAllProductsPage />}
            />
            <Route path="/admin/all-orders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/add-brand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/add-category"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/add-sub-category"
              element={<AdminAddSubCategoryPage />}
            />
            <Route
              path="/admin/add-product"
              element={<AdminAddProductPage />}
            />
            <Route
              path="/admin/edit-product/:id"
              element={<AdminEditProductPage />}
            />
            <Route path="/admin/add-coupon" element={<AdminAddCouponPage />} />
            <Route
              path="/admin/edit-coupon/:id"
              element={<AdminEditCouponPage />}
            />
          </Route>
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route
              path="/user/favorite-products"
              element={<UserFavoriteProductsPage />}
            />
            <Route path="/user/address" element={<UserAddressPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/order/pay-method" element={<PaymentMethodPage />} />
          </Route>
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

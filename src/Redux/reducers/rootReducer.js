import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import categoryProductReducer from "./categoryProductReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import paymentReducer from "./paymentReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subCategoryReducer,
  product: productReducer,
  catProduct: categoryProductReducer,
  auth: authReducer,
  review: reviewReducer,
  wishList: wishListReducer,
  coupon: couponReducer,
  address: addressReducer,
  user: userReducer,
  cart: cartReducer,
  payment: paymentReducer,
});

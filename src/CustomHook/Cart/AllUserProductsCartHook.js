import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductCartAction } from "../../Redux/actions/cartAction";

const AllUserProductsCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [cartNum, setCartNum] = useState(0);
  const [couponNameRes, setCouponNameRes] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceAfterCoupon, setTotalPriceAfterCoupon] = useState(0);
  const [cartId, setCartId] = useState("0");
  useEffect(() => {
    const getAll = async () => {
      await dispatch(getAllProductCartAction());
      setLoading(false);
    };
    getAll();
  }, []);
  const { getAllProductCart } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!loading) {
      if (getAllProductCart) {
        if (getAllProductCart.status === "success") {
          setCartNum(getAllProductCart.numOfCartItems);
          setCartProducts(getAllProductCart.data.products);
          setTotalPrice(getAllProductCart.data.totalCartPrice);
          setCartId(getAllProductCart.data._id);
          if (getAllProductCart.data.coupon) {
            setCouponNameRes(getAllProductCart.data.coupon);
          } else {
            setCouponNameRes("");
          }
          if (getAllProductCart.data.totalAfterDiscount) {
            setTotalPriceAfterCoupon(getAllProductCart.data.totalAfterDiscount);
          } else {
            setTotalPriceAfterCoupon(0);
          }
        } else {
          setCartNum(0);
          setCartProducts([]);
          setTotalPrice(0);
          setCouponNameRes("");
          setTotalPriceAfterCoupon(0);
          setCartId("0");
        }
      }
    }
  }, [loading]);
  return [
    cartNum,
    cartProducts,
    totalPrice,
    couponNameRes,
    totalPriceAfterCoupon,
    cartId,
  ];
};

export default AllUserProductsCartHook;

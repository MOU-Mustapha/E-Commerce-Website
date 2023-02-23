import { useState, useEffect } from "react";
import { getSpecificAddressAction } from "../../Redux/actions/addressAction";
import { useDispatch, useSelector } from "react-redux";
import AllUserProductsCartHook from "../../CustomHook/Cart/AllUserProductsCartHook";
import notify from "../../CustomHook/useNotification";
import {
  createCashOrderAction,
  createCardOrderAction,
} from "../../Redux/actions/paymentAction";

const CashOrderHook = () => {
  const [, , , , , cartId] = AllUserProductsCartHook();
  const [addressId, setAddressId] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true);
  const [loadingCard, setLoadingCard] = useState(true);
  const [theAddress, setTheAddress] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddressId(e.target.value);
    if (e.target.value !== "0") {
      setTheAddress([]);
      getAddress(e.target.value);
    }
  };
  const dispatch = useDispatch();
  const getAddress = async (id) => {
    await dispatch(getSpecificAddressAction(id));
    setLoading(false);
  };
  const { specificAddress } = useSelector((state) => state.address);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      if (specificAddress) {
        if (specificAddress.status && specificAddress.status === "success") {
          setTheAddress(specificAddress.data);
        } else {
          setTheAddress([]);
        }
      }
    }
  }, [loading]);
  const handleSubmitOrderCash = async () => {
    if (cartId === "0") {
      notify("من فضلك أضف منتجات إلي العربة أولاً", "warn");
      return;
    }
    if (theAddress.length <= 0) {
      notify("من فضلك إختار عنوان التوصيل أولاً", "warn");
      return;
    }
    await dispatch(
      createCashOrderAction(cartId, {
        shippingAddress: {
          details: theAddress.details,
          phone: theAddress.phone,
          city: theAddress.city,
          postalCode: theAddress.postalCode,
        },
      })
    );
    setLoadingCreate(false);
  };
  const { createCashOrder } = useSelector((state) => state.payment);
  useEffect(() => {
    if (!loadingCreate) {
      if (createCashOrder) {
        if (createCashOrder.status && createCashOrder.status === 201) {
          notify("تم إنشاء الطلب بنجاح", "success");
          setTimeout(() => (window.location.href = "/user/allorders"), 1500);
        } else {
          notify(
            "هناك مشكلة في عملية إتمام الطلب من فضلك حاول مره أخري",
            "error"
          );
        }
      }
    }
  }, [loadingCreate]);
  const handleSubmitOrderCard = async () => {
    if (cartId === "0") {
      notify("من فضلك أضف منتجات إلي العربة أولاً", "warn");
      return;
    }
    if (theAddress.length <= 0) {
      notify("من فضلك إختار عنوان التوصيل أولاً", "warn");
      return;
    }
    await dispatch(
      createCardOrderAction(cartId, {
        shippingAddress: {
          details: theAddress.details,
          phone: theAddress.phone,
          city: theAddress.city,
          postalCode: theAddress.postalCode,
        },
      })
    );
    setLoadingCard(false);
  };
  const { createCardOrder } = useSelector((state) => state.payment);
  useEffect(() => {
    if (!loadingCard) {
      if (createCardOrder) {
        if (createCardOrder.status && createCardOrder.status === "success") {
          if (createCardOrder.session.url) {
            window.open(createCardOrder.session.url);
          }
        } else {
          notify(
            "هناك مشكلة في عملية إتمام الطلب من فضلك حاول مره أخري",
            "error"
          );
        }
      }
    }
  }, [loadingCard]);
  const handlePay = () => {
    if (value === "card") {
      handleSubmitOrderCard();
    } else if (value === "cash") {
      handleSubmitOrderCash();
    } else {
      notify("يجب عليك إختيار طريقة الدفع أولاً", "warn");
    }
  };
  return [addressId, onAddressChange, handlePay, handleChange];
};

export default CashOrderHook;

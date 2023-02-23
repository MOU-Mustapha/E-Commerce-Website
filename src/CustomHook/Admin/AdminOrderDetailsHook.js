import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getSpecificOrderAction,
  changeOrderPaidAction,
  changeOrderDeliverAction,
} from "../../Redux/actions/userAction";
import notify from "../../CustomHook/useNotification";

const AdminOrderDetailsHook = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [paid, setPaid] = useState(0);
  const [deliver, setDeliver] = useState(0);
  const [loadingPay, setLoadingPay] = useState(true);
  const [loadingDeliver, setLoadingDeliver] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const onPaidChange = (e) => {
    setPaid(e.target.value);
  };
  const onDeliverChange = (e) => {
    setDeliver(e.target.value);
  };
  useEffect(() => {
    const get = async () => {
      await dispatch(getSpecificOrderAction(id));
      setLoading(false);
    };
    get();
  }, []);
  const { specificOrder } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loading) {
      if (specificOrder) {
        setOrder(specificOrder.data);
      }
    }
  }, [loading]);
  const handlePay = async () => {
    if (paid === "true") {
      await dispatch(changeOrderPaidAction(id));
      setLoadingPay(false);
    } else if (paid === 0) {
      notify("من فضلك إختر حالة الدفع أولاً", "warn");
    }
  };
  const { orderPaid } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loadingPay) {
      if (orderPaid) {
        if (orderPaid.status && orderPaid.status === 200) {
          notify("تم تغيير حالة الدفع بنجاح", "success");
        } else {
          notify("هناك مشكلة في عملية تغيير حالة الدفع", "error");
        }
      }
    }
  }, [loadingPay]);
  const handleDeliver = async () => {
    if (deliver === "true") {
      await dispatch(changeOrderDeliverAction(id));
      setLoadingDeliver(false);
    } else if (deliver === 0) {
      notify("من فضلك إختر حالة التوصيل أولاً", "warn");
    }
  };
  const { orderDeliver } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loadingDeliver) {
      if (orderDeliver) {
        if (orderDeliver.status && orderDeliver.status === 200) {
          notify("تم تغيير حالة التوصيل بنجاح", "success");
        } else {
          notify("هناك مشكلة في عملية تغيير حالة التوصيل", "error");
        }
      }
    }
  }, [loadingDeliver]);
  return [
    order,
    paid,
    onPaidChange,
    handlePay,
    deliver,
    onDeliverChange,
    handleDeliver,
  ];
};

export default AdminOrderDetailsHook;

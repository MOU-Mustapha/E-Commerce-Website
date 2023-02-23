import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAction } from "../../Redux/actions/userAction";

const UserAllOrdersHook = () => {
  const [loading, setLoading] = useState(true);
  const [numOfOrders, setNumOfOrders] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [orders, setOrders] = useState([]);
  let userData = "";
  if (localStorage.getItem("userData")) {
    userData = JSON.parse(localStorage.getItem("userData"));
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      await dispatch(getAllOrdersAction(1, 4));
      setLoading(false);
    };
    getAll();
  }, []);
  const getPageNumber = async (page) => {
    setLoading(true);
    await dispatch(getAllOrdersAction(page, 4));
    setLoading(false);
  };
  const { allOrders } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loading) {
      if (allOrders) {
        if (allOrders.results) {
          setNumOfOrders(allOrders.results);
        }
        if (allOrders.paginationResult) {
          setPageCount(allOrders.paginationResult.numberOfPages);
        }
        if (allOrders.data) {
          setOrders(allOrders.data);
        }
      }
    }
  }, [loading]);
  return [userData, numOfOrders, pageCount, orders, loading, getPageNumber];
};

export default UserAllOrdersHook;

import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../Redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);
  const { category, loading } = useSelector((state) => state.allCategory);
  const colors = [
    "#644D17",
    "#41B548",
    "#DD0962",
    "#9D44AA",
    "#F0CC62",
    "#641717",
  ];
  return [category, loading, colors];
};

export default HomeCategoryHook;

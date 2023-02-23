import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrandAction } from "../../Redux/actions/BrandAction";

const HomBrandsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrandAction());
  }, []);
  const { brand, loading } = useSelector((state) => state.allBrand);
  return [brand, loading];
};

export default HomBrandsHook;

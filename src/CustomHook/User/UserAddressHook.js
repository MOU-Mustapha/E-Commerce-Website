import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddressesAction } from "../../Redux/actions/addressAction";

const UserAddressHook = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllAddresses = async () => {
      await dispatch(getAllAddressesAction());
      setLoading(false);
    };
    getAllAddresses();
  }, []);
  const { allAddresses } = useSelector((state) => state.address);
  return [allAddresses, loading];
};

export default UserAddressHook;

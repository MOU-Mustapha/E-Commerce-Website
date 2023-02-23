import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddressAction } from "../../Redux/actions/addressAction";

const UserAddressCardHook = (address) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteAddressAction(address._id));
    setShow(false);
    window.location.reload();
  };
  return [handleDelete, show, handleShow, handleClose];
};

export default UserAddressCardHook;

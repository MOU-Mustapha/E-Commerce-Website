import { useState } from "react";
import { deleteProductAction } from "../../Redux/actions/productAction";
import { useDispatch } from "react-redux";

const AdminAllProductsCardHook = (id) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteProductAction(id));
    handleClose();
    window.location.reload();
  };
  return [show, handleClose, handleShow, handleDelete];
};

export default AdminAllProductsCardHook;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../Images/avatar.png";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../CustomHook/useNotification";
import { createCategoryAction } from "../../Redux/actions/categoryAction";

const AddCategoryHook = () => {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.allCategory);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || selectedFile === null) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    await dispatch(createCategoryAction(formData));
    setLoading(false);
    setIsPress(true);
  };
  useEffect(() => {
    if (!loading) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (category.status === 201) {
        notify("تمت عملية الإضافة بنجاح", "success");
      } else {
        notify("هناك مشكلة في عملية الإضافة", "error");
      }
    }
  }, [loading]);
  return [
    img,
    name,
    loading,
    isPress,
    onNameChange,
    onImageChange,
    handleSubmit,
  ];
};

export default AddCategoryHook;

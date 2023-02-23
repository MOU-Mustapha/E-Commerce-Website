import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../Redux/actions/categoryAction";
import notify from "../../CustomHook/useNotification";
import { createSubCategoryAction } from "../../Redux/actions/subCategoryAction";

const AddSubCategoryHook = () => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);
  const { category } = useSelector((state) => state.allCategory);
  const { subCategory } = useSelector((state) => state.subCategory);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكلة في الأتصال بالأنترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك أختر تصنيف رئيسي", "warn");
      return;
    }
    if (name === "") {
      notify("من فضلك أدخل إسم التصنيف الفرعي  ", "warn");
      return;
    }
    await dispatch(
      createSubCategoryAction({
        name: name,
        category: id,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  useEffect(() => {
    if (!loading) {
      setName("");
      setId("0");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (subCategory.status === 201) {
        notify("تمت الإضافة بنجاح", "success");
      } else if (
        subCategory === "ErrorAxiosError: Request failed with status code 400"
      ) {
        notify("هذا الإسم مكرر من فضلك إختر إسم اَخر", "error");
      } else {
        notify("هناك مشكلة في عملية الإضافة", "error");
      }
    }
  }, [loading]);
  return [
    name,
    loading,
    isPress,
    onNameChange,
    handleChange,
    handleSubmit,
    category,
  ];
};

export default AddSubCategoryHook;

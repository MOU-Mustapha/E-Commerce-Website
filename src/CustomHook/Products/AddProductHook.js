import { useEffect, useState } from "react";
import notify from "../../CustomHook/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../Redux/actions/categoryAction";
import { getAllBrandAction } from "../../Redux/actions/BrandAction";
import { getAllCategorySubCategoryAction } from "../../Redux/actions/subCategoryAction";
import { createProductAction } from "../../Redux/actions/productAction";
import { useNavigate } from "react-router";

const AddProductHook = () => {
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم...");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم...");
  const [quantity, setQuantity] = useState("الكمية المتاحة...");
  const [catId, setCatId] = useState("0");
  const [brandId, setBrandId] = useState("0");
  const [selectedSubCatId, setSelectedSubCatId] = useState([]);
  const [colorPick, setColorPick] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const navigate = useNavigate();
  const onProdNameChange = (e) => {
    setProdName(e.target.value);
  };
  const onProdDescChange = (e) => {
    setProdDescription(e.target.value);
  };
  const onPriceBeforeChange = (e) => {
    setPriceBefore(e.target.value);
  };
  const onPriceAfterChange = (e) => {
    setPriceAfter(e.target.value);
  };
  const onQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const onCategoryChange = async (e) => {
    setCatId(e.target.value);
  };
  const onBrandChange = (e) => {
    setBrandId(e.target.value);
  };
  const handleColorPick = () => {
    setColorPick(!colorPick);
  };
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setColorPick(!colorPick);
  };
  const handleRemoveColor = (color) => {
    const newColors = colors.filter((item) => {
      return item !== color;
    });
    setColors(newColors);
  };
  const onSelect = (selectedSub) => {
    setSelectedSubCatId(selectedSub);
  };
  const onRemove = (deletedSub) => {
    setSelectedSubCatId(deletedSub);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAction());
    dispatch(getAllBrandAction());
  }, []);
  const { category } = useSelector((state) => state.allCategory);
  const { brand } = useSelector((state) => state.allBrand);
  const { subCategory } = useSelector((state) => state.subCategory);
  useEffect(() => {
    if (catId !== "0") {
      const run = async () => {
        await dispatch(getAllCategorySubCategoryAction(catId));
      };
      run();
    }
  }, [catId]);
  useEffect(() => {
    if (subCategory.data) {
      setOptions(subCategory.data);
    }
  }, [subCategory]);
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      prodName === "" ||
      prodDescription === "" ||
      catId === "0" ||
      brandId === "0" ||
      priceBefore <= 0 ||
      images.length <= 0
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    } else if (priceBefore < priceAfter) {
      notify("تأكد من صحة الأسعار المدخلة", "warn");
      return;
    }
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    const newImagesArray = Array.from(
      Array(Object.keys(images).length).keys()
    ).map((index) => {
      return dataURLtoFile(images[index], Math.random() + ".png");
    });
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", quantity);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAfter);
    formData.append("imageCover", imgCover);
    formData.append("category", catId);
    formData.append("brand", brandId);
    newImagesArray.map((image) => formData.append("images", image));
    colors.map((color) => formData.append("availableColors", color));
    selectedSubCatId.map((sub) => formData.append("subcategory", sub._id));
    await dispatch(createProductAction(formData));
    setLoading(false);
    setIsPress(true);
  };
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    if (!loading) {
      setOptions([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم...");
      setPriceAfter("السعر بعد الخصم...");
      setQuantity("الكمية المتاحة...");
      setCatId("0");
      setBrandId("0");
      setSelectedSubCatId([]);
      setColors([]);
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (product.status === 201) {
        notify("تمت الإضافة بنجاح", "success");
        setTimeout(() => navigate("/admin/all-products"), 1500);
      } else {
        notify("هناك مشكلة في عملية الإضافة", "error");
      }
    }
  }, [loading]);
  return [
    images,
    setImages,
    onProdNameChange,
    prodName,
    onProdDescChange,
    prodDescription,
    onPriceBeforeChange,
    priceBefore,
    onPriceAfterChange,
    priceAfter,
    onQuantityChange,
    quantity,
    onCategoryChange,
    category,
    options,
    onSelect,
    onRemove,
    onBrandChange,
    brand,
    colors,
    handleRemoveColor,
    handleColorPick,
    colorPick,
    handleChangeComplete,
    handleSubmit,
    isPress,
    loading,
    catId,
    brandId,
  ];
};

export default AddProductHook;

import { useEffect, useState } from "react";
import notify from "../../CustomHook/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../../Redux/actions/categoryAction";
import { getAllBrandAction } from "../../Redux/actions/BrandAction";
import { getAllCategorySubCategoryAction } from "../../Redux/actions/subCategoryAction";
import { updateProductAction } from "../../Redux/actions/productAction";
import { getSpecificProductAction } from "../../Redux/actions/productAction";

const EditProductHook = (id) => {
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم...");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم...");
  const [quantity, setQuantity] = useState("الكمية المتاحة...");
  const [catId, setCatId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [selectedSubCatId, setSelectedSubCatId] = useState([]);
  const [colorPick, setColorPick] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
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
    dispatch(getSpecificProductAction(id));
    dispatch(getAllCategoryAction());
    dispatch(getAllBrandAction());
  }, []);
  const { product } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.allCategory);
  const { brand } = useSelector((state) => state.allBrand);
  useEffect(() => {
    if (catId !== "0") {
      const run = async () => {
        await dispatch(getAllCategorySubCategoryAction(catId));
      };
      run();
    }
  }, [catId]);
  const { subCategory } = useSelector((state) => state.subCategory);
  useEffect(() => {
    if (subCategory.data) {
      setOptions(subCategory.data);
    }
  }, [subCategory]);
  useEffect(() => {
    if (product.data) {
      setProdName(product.data.title);
      setProdDescription(product.data.description);
      setPriceBefore(product.data.price);
      setQuantity(product.data.quantity);
      setCatId(product.data.category);
      setBrandId(product.data.brand);
      if (product.data.availableColors) {
        setColors(product.data.availableColors);
      }
      if (product.data.images) {
        setImages(product.data.images);
      }
    }
  }, [product]);
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
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };
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
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }
    let newImagesArray = [];
    Array.from(Array(Object.keys(images).length).keys()).map((index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => newImagesArray.push(val));
      } else {
        newImagesArray.push(
          dataURLtoFile(images[index], Math.random() + ".png")
        );
      }
    });
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", quantity);
    formData.append("price", priceBefore);
    formData.append("category", catId);
    formData.append("brand", brandId);
    setTimeout(() => {
      formData.append("imageCover", imgCover);
      newImagesArray.map((image) => formData.append("images", image));
    }, 1000);
    colors.map((color) => formData.append("availableColors", color));
    selectedSubCatId.map((sub) => formData.append("subcategory", sub._id));
    setTimeout(async () => {
      await dispatch(updateProductAction(id, formData));
      setLoading(false);
      setIsPress(true);
    }, 1000);
  };
  const { updatedProduct } = useSelector((state) => state.product);
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
      if (updatedProduct.status === 200) {
        notify("تم التعديل بنجاح", "success");
      } else {
        notify("هناك مشكلة في عملية التعديل  ", "error");
      }
      setTimeout(() => window.location.assign("/admin/all-products"), 2000);
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

export default EditProductHook;

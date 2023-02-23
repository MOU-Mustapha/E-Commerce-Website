import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSpecificProductAction } from "../../Redux/actions/productAction";
import { getSpecificCategoryAction } from "../../Redux/actions/categoryAction";
import { getSpecificBrandAction } from "../../Redux/actions/BrandAction";
import { getCategoryProductsAction } from "../../Redux/actions/categoryProductAction";
import no from "../../Images/no.jpg";

const ProductDetailsHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificProductAction(id));
  }, []);
  const { product } = useSelector((state) => state.product);
  let item = [];
  if (product.data) {
    item = product.data;
  } else {
    item = [];
  }
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${no}` }];
  }
  useEffect(() => {
    if (item.category) {
      dispatch(getSpecificCategoryAction(item.category));
      dispatch(getCategoryProductsAction(item.category));
    }
    if (item.brand) {
      dispatch(getSpecificBrandAction(item.brand));
    }
  }, [item]);
  const { category } = useSelector((state) => state.allCategory);
  let cat = [];
  if (category.data) {
    cat = category.data;
  } else {
    cat = [];
  }
  const { brand } = useSelector((state) => state.allBrand);
  let bra = [];
  if (brand.data) {
    bra = brand.data;
  } else {
    bra = [];
  }
  const { catProduct, loading } = useSelector((state) => state.catProduct);
  let catPro = [];
  if (catProduct.data) {
    catPro = catProduct.data;
  } else {
    catPro = [];
  }
  return [item, images, cat, bra, catPro, loading];
};

export default ProductDetailsHook;

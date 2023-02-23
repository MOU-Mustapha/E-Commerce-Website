import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import ProductDetailsHook from "../../CustomHook/Products/ProductDetailsHook";

const ProductGallery = () => {
  const [, images] = ProductDetailsHook();
  return (
    <div className="product-gallery-card pt-3">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        showThumbnails={false}
        renderRightNav={LeftButton}
        renderLeftNav={RightButton}
      />
    </div>
  );
};

export default ProductGallery;

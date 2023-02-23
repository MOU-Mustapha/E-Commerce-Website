import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Images/slider4.png";
import slider2 from "../../Images/slider1.png";
import slider3 from "../../Images/prod3.png";
import slider4 from "../../Images/prod4.png";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        className="slider-background height-mobile"
        interval={2000}
      >
        <div className="slider-display">
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={slider1}
            alt="slider-img1"
          />
          <div className="me-2 mobile">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slider-background2 height-mobile"
        interval={2000}
      >
        <div className="slider-display">
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={slider2}
            alt="slider-img2"
          />
          <div className="me-2 mobile">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slider-background3 height-mobile"
        interval={2000}
      >
        <div className="slider-display">
          <img
            style={{ height: "296px", width: "373.53px" }}
            src={slider3}
            alt="slider-img3"
          />
          <div className="me-2 mobile">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slider-background4 height-mobile"
        interval={2000}
      >
        <div className="slider-display">
          <img
            style={{ height: "296px", width: "373.53px" }}
            src={slider4}
            alt="slider-img4"
          />
          <div className="me-2 mobile">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

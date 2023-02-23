import React from "react";
import next from "../../Images/next.png";

const LeftButton = (onClick) => {
  return (
    <img
      src={next}
      alt="next-img"
      width="35px"
      height="35px"
      onClick={onClick}
      style={{ float: "left", cursor: "pointer" }}
      className="right-left-position"
    />
  );
};

export default LeftButton;

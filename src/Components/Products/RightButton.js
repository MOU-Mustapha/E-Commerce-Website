import React from "react";
import prev from "../../Images/prev.png";

const RightButton = (onClick) => {
  return (
    <img
      src={prev}
      alt="next-img"
      width="35px"
      height="35px"
      onClick={onClick}
      style={{ float: "right", cursor: "pointer" }}
      className="right-left-position"
    />
  );
};

export default RightButton;

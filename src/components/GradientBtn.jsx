import React from "react";

const GradientBtn = ({ title, classNames }) => {
  return (
    <button className={`bg-gradient-to-r from-thOrange to-thBlue`}>
      {title}
    </button>
  );
};

export default GradientBtn;

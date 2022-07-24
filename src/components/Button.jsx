import React from "react";

const Button = ({ colorRandom, getRandomAll }) => {
  const objBgStyle = {
    backgroundColor: colorRandom,
  };
  return (
    <div className="button">
      <button className="but" style={objBgStyle} onClick={getRandomAll}>
        <i className="bx bxs-caret-right-circle"></i>
      </button>
    </div>
  );
};

export default Button;

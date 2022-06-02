import React from "react";

const Button = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${className}`}
    >{text}</button>
  );
};

export default Button;

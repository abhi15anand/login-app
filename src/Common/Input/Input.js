import React from "react";

const Input = ({ onChange, onBlur, placeholder, value, className, password = false }) => {
  return (
    <input
      type={password ? "password" : "text"}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      value={value}
      className={`input-container ${className}`}
    />
  );
};

export default Input;

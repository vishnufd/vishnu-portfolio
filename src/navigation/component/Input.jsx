import React from "react";

const Input = ({ className, type, placeholder, label, id, name }) => {
  return (
    <>
      <label className="font-semibold text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className={className}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;

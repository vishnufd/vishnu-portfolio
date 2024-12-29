import React from "react";

const TextArea = ({ className, name, id, label, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="mt-3 font-semibold text-white">
        {label}
      </label>
      <textarea
        className={className}
        name={name}
        id={id}
        required
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;

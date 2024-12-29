import React from "react";

const Button = ({ btnDivClass, btnClass, btnText, setPopup }) => {
  return (
    <div className={btnDivClass}>
      <button className={btnClass} onClick={() => setPopup && setPopup(true)}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;

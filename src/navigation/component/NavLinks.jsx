import React from "react";
import Button from "./Button";

const NavLinks = ({
  divClass,
  ulClass,
  spanClass,
  anchorClass,
  btnDivClass,
  btnClass,
  btnText,
  isOpen,
  setPopup,
  setIsOpen,
}) => {
  return (
    <div className={divClass}>
      <ul className={ulClass}>
        <li>
          <span className={spanClass}>
            <a
              className={anchorClass}
              href="#home"
              onClick={() => setIsOpen && setIsOpen(!isOpen)}
            >
              Home
            </a>
          </span>
        </li>
        <li>
          <span className={spanClass}>
            <a
              className={anchorClass}
              href="#work"
              onClick={() => setIsOpen && setIsOpen(!isOpen)}
            >
              Work
            </a>
          </span>
        </li>
        <li>
          <span className={spanClass}>
            <a
              className={anchorClass}
              href="#skill"
              onClick={() => setIsOpen && setIsOpen(!isOpen)}
            >
              Skills
            </a>
          </span>
        </li>
      </ul>
      <Button
        btnDivClass={btnDivClass}
        btnClass={btnClass}
        btnText={btnText}
        setPopup={setPopup}
      />
    </div>
  );
};

export default NavLinks;

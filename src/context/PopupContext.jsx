import React, { createContext, useState } from "react";

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };

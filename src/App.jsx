import React from "react";
import NavBar from "./navigation/component/NavBar";
import Home from "./landing page/components/Home";
import { PopupProvider } from "./context/PopupContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [result, setResult] = React.useState("");

  return (
    <>
      <PopupProvider>
        <ToastContainer />
        <NavBar result={result} setResult={setResult} />
        <Home />
      </PopupProvider>
    </>
  );
};
export default App;

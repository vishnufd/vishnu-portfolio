import React, { useContext } from "react";
import Button from "../../navigation/component/Button";
import { PopupContext } from "../../../dist/context/PopupContext";

const Contact = () => {
  const { setPopup } = useContext(PopupContext);
  return (
    <section className="flow-root w-full border-l-8 border-[#079211] bg-[#0a0a0f] text-white">
      <section className="my-10 flex max-w-full flex-col items-center justify-between px-5 sm:my-24 md:px-16 lg:px-28 xl:flex-row">
        <div>
          <h2 className="my-3 text-center text-2xl font-bold sm:text-left md:text-4xl">
            🎯 Looking for a Frontend Developer?
          </h2>
          <p className="max-w-[750px] text-center text-[#808080] sm:text-left">
            I’m actively seeking job opportunities in frontend development. If
            you're looking for someone skilled in React, Redux, and Tailwind
            CSS, let’s connect and build something amazing together!
          </p>
        </div>
        <div>
          <Button
            btnClass="bg-[#079211] py-2 px-3 sm:text-[16px] text-[12px] font-bold sm:px-6 sm:py-3 border-2 border-[#079211] hover:bg-transparent"
            btnText="Hire Me"
            btnDivClass="my-5"
            setPopup={setPopup}
          />
        </div>
      </section>
    </section>
  );
};
export default Contact;

import React, { useContext } from "react";
import Button from "../../navigation/component/Button";
import { PopupContext } from "../../context/PopupContext";

const Contact = () => {
  const { setPopup } = useContext(PopupContext);
  return (
    <section className="flow-root w-full border-l-8 border-[#079211] bg-[#0a0a0f] text-white">
      <section className="my-10 flex max-w-full flex-col items-center justify-between px-5 sm:my-24 sm:flex-row md:px-16 lg:px-28">
        <div>
          <h2 className="my-3 text-center text-2xl font-bold sm:text-left md:text-4xl">
            Have any projects in mind?
          </h2>
          <p className="text-center text-[#808080] sm:text-left">
            Feel free to contact me or just say friendly hello!
          </p>
        </div>
        <div>
          <Button
            btnClass="bg-[#079211] py-2 px-3 sm:text-[16px] text-[12px] font-bold sm:px-6 sm:py-3 border-2 border-[#079211] hover:bg-transparent"
            btnText="Contact"
            btnDivClass="my-5"
            setPopup={setPopup}
          />
        </div>
      </section>
    </section>
  );
};
export default Contact;

import React from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

const ContactForm = ({ popup, setPopup, children, header, setResult }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "52892ae6-14a1-4669-aa2c-123acbaf1381");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Send Message");
      toast.success("Form Submitted Successfully...");
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };
  return createPortal(
    <div
      className={`fixed inset-0 z-50 max-w-full items-center justify-center bg-black/40 px-5 backdrop-blur-sm sm:px-0 ${popup ? "flex" : "hidden"}`}
      onClick={() => setPopup(false)}
    >
      <div
        className="max-w-full grow rounded-lg border-2 border-[#079211] bg-[#101017] sm:max-w-fit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-[500px] p-10 shadow-xl sm:w-[500px] sm:max-w-full">
          {header}
          <form
            onSubmit={onSubmit}
            method="POST"
            className="my-7 flex max-w-full flex-col gap-y-3 text-[13px] sm:text-[16px]"
          >
            {children}
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("#portal"),
  );
};

export default ContactForm;

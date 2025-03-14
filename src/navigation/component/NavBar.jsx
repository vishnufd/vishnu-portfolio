import React, { useContext, useEffect, useState } from "react";
import mobileMenu from "../assets/menu.svg";
import closeMenu from "../assets/close.svg";
import NavLinks from "./NavLinks";
import ContactForm from "../../contact/components/ContactForm";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { PopupContext } from "../../../dist/context/PopupContext";

const NavBar = ({ result, setResult }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { popup, setPopup } = useContext(PopupContext);

  useEffect(() => {
    if (popup) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [popup]);

  return (
    <nav className="relative z-10">
      <div className="fixed flex w-full flex-row items-center justify-between bg-[#0A0A0F] px-5 py-5 text-white sm:bg-[#0A0A0F]/40 sm:backdrop-blur-md md:px-16 lg:px-28">
        <div>
          <h2 className="text-2xl font-bold">
            Vishnu anil<span className="text-[#079211]">.</span>
          </h2>
        </div>
        <ContactForm
          setResult={setResult}
          popup={popup}
          setPopup={setPopup}
          header={
            <h2 className="text-3xl font-bold uppercase tracking-[2px] text-white">
              Contact
            </h2>
          }
        >
          <Input
            className="border-2 p-[4px] outline-none focus:border-[#079211] sm:p-2"
            id="name"
            type="text"
            name="Name"
            placeholder="Enter Your Name..."
            label="Name"
          />
          <Input
            className="w-full border-2 p-[4px] outline-none focus:border-[#079211] sm:p-2"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email..."
            label="Email"
          />
          <TextArea
            className="border-2 p-[4px] outline-none focus:border-[#079211] sm:p-2"
            name="message"
            id="message"
            label="Message"
            placeholder="Enter Message..."
          />
          <Button
            btnClass="bg-[#079211] w-full mt-5 py-2 px-3 sm:text-[16px] text-[12px] font-bold sm:px-6 sm:py-3 border-2 border-[#079211] hover:bg-transparent"
            btnText={result ? result : "Send Message"}
            btnDivClass="my-5"
          />
        </ContactForm>
        {/* Desktop navbar */}
        <NavLinks
          divClass="hidden flex-row items-center text-[14px] font-bold sm:flex"
          ulClass="flex flex-row gap-x-8 px-5"
          spanClass="underline-transition"
          anchorClass="border-b-[3px] border-transparent py-[3px]"
          btnDivClass="ml-8 md:ml-14"
          btnClass="border-2 border-[#079211] px-4 py-[10px]"
          btnText="Contact"
          setPopup={setPopup}
        />
        <div className="absolute right-5 z-10 sm:hidden">
          <img
            src={isOpen ? closeMenu : mobileMenu}
            alt="open menu button"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {/* Mobile Navbar */}
        <NavLinks
          isOpen={isOpen}
          divClass={`fixed right-0 top-0 h-full w-full transform bg-[#0A0A0F] transition-transform duration-1000 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
          ulClass="mx-10 my-32 flex flex-col items-center gap-y-10 text-3xl uppercase"
          anchorClass="transition-all active:text-[#079211]"
          btnDivClass="mx-10"
          btnClass="w-full border-2 border-[#079211] px-4 py-[10px]"
          btnText="Contact"
          setPopup={setPopup}
          setIsOpen={setIsOpen}
        />
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useContext } from "react";
import Button from "../../navigation/component/Button";
import downloadIcon from "../assets/Frame.svg";
import { motion } from "framer-motion";
import { PopupContext } from "../../context/PopupContext";
import resumeUrl from "../assets/Resume.pdf";

const LandingPage = () => {
  const { setPopup } = useContext(PopupContext);

  return (
    <>
      <main className="bg-[#0A0A0F]">
        <section
          id="home"
          className="flex h-screen w-full items-center bg-[#0A0A0F] px-5 md:px-16 lg:px-28"
        >
          <section className="my-32 max-w-[770px] lg:my-0">
            <h2 className="text-2xl font-bold text-[#079211] md:text-3xl">
              Hello, I'm Vishnu Anil
            </h2>
            <motion.h1
              className="my-3 text-3xl font-bold text-white sm:my-6 sm:text-5xl md:text-7xl"
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Frontend Developer
            </motion.h1>
            <p className="my-4 text-[0.8rem] text-[#808080] sm:my-9 sm:text-[1rem]">
              I am a passionate front-end developer skilled in React.js,
              Tailwind CSS, and Git. I specialize in building responsive and
              user-friendly web interfaces with modern tools and technologies.
              My expertise includes creating dynamic and reusable components
              with React, designing beautiful layouts with Tailwind CSS, and
              collaborating effectively using version control with Git.
            </p>
            <div className="flex items-center gap-x-5">
              <Button
                btnClass="bg-[#079211] py-2 px-3 sm:text-[16px] text-[12px] font-bold sm:px-6 sm:py-3 border-2 border-[#079211] hover:bg-transparent"
                btnText="Email Me"
                btnDivClass="my-5"
                setPopup={setPopup}
              />
              <div>
                <a
                  href={resumeUrl}
                  download="Vishnu_Resume.pdf"
                  className="flex items-center gap-x-2 text-[12px] font-bold text-[#808080] transition-all hover:text-white sm:text-[16px]"
                >
                  <img src={downloadIcon} alt="Download CV" />
                  Download CV
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default LandingPage;

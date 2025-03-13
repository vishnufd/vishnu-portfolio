import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import NaukriLogo from "../assets/naukri.png";
import Instagramlogo from "../assets/insta.svg";

const Footer = () => {
  return (
    <footer className="flow-root w-full bg-[#050507] text-white">
      <section className="mt-10 flex flex-col items-center px-5 sm:mt-24 md:px-16 lg:px-28">
        <section className="w-full">
          <div className="spacial flex w-full flex-col items-start justify-between">
            <div className="mb-10 sm:mb-0">
              <h2 className="text-2xl font-bold">
                Vishnu anil<span className="text-[#079211]">.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-20">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        {" "}
                        <h5 className="mb-5 text-[18px] font-semibold">
                          Information
                        </h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>📞 Phone&nbsp;&nbsp;&nbsp;</label>
                      </td>
                      <td>
                        <a
                          className="text-[#808080] hover:text-white/80"
                          href="tel:+916238840485"
                        >
                          +91 6238840485
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>✉️ Email&nbsp;&nbsp;&nbsp;</label>
                      </td>
                      <td>
                        <a
                          className="text-[#808080] hover:text-white/80"
                          href="mailto:vishnuanilfrontend@gmail.com"
                        >
                          vishnuanilfrontend@gmail.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>📍 Location&nbsp;&nbsp;&nbsp;</label>
                      </td>
                      <td>
                        <p className="inline-block text-[#808080]">
                          Kochi, Kerala, India
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <ul>
                  <li>
                    <h5 className="text-[18px] font-semibold">Social Media</h5>
                  </li>
                  <li className="mt-5 text-[#808080]">
                    <a
                      href="https://www.linkedin.com/in/vishnu-anil-78974a342/"
                      target="_blank"
                      className="flex items-center gap-x-2 hover:text-[#0076b5]"
                    >
                      <LiaLinkedinIn
                        style={{
                          color: "white",
                          backgroundColor: "#0076b5",
                        }}
                      />{" "}
                      LinkedIn
                    </a>
                  </li>
                  <li className="mt-2 text-[#808080]">
                    <a
                      href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                      target="_blank"
                      className="flex items-center gap-x-2 hover:text-[#275ef5]"
                    >
                      <img
                        src={NaukriLogo}
                        alt="Naukri Logo"
                        className="w-[1em]"
                      />{" "}
                      Naukri
                    </a>
                  </li>
                  <li className="mt-2 text-[#808080]">
                    <a
                      href="https://www.instagram.com/vishnu_wd/?next=%2F&hl=en"
                      target="_blank"
                      className="flex items-center gap-x-2"
                    >
                      <img
                        src={Instagramlogo}
                        alt="instagram logo"
                        className="w-[1em]"
                      />{" "}
                      <span className="instagram">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-between border-t-2 border-[#313131]">
            <div className="my-10 w-fit">
              <p className="text-[14px] font-light">
                Developed by <span className="text-[#079211]">Vishnu anil</span>
              </p>
            </div>
            <div className="w-fit">
              <p className="text-[14px] font-light">Copyright &copy; 2024</p>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

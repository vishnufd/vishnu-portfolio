import React from "react";
import Works from "../../work/components/Works";
import Technologies from "../../technology/components/Technologies";
import Contact from "../../contact/components/contact";
import Footer from "../../footer/components/Footer";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Works />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

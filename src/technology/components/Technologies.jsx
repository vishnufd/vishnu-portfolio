import React from "react";
import HTMLLogo from "../assets/html-1.svg";
import CSSLogo from "../assets/css-3.svg";
import JSLogo from "../assets/javascript-1.svg";
import TailwindLogo from "../assets/tailwind-css-2.svg";
import ReactLogo from "../assets/react-2.svg";
import GitLogo from "../assets/git.svg";
import GitHubLogo from "../assets/gitHub.svg";
import SkillCard from "./SkillCard";

const Technologies = () => {
  return (
    <section id="skill" className="flow-root w-full bg-[#101017] text-white">
      <div className="my-24 max-w-full px-5 md:px-16 lg:px-28">
        <div className="flex items-center gap-x-3">
          <div className="h-[2px] w-[50px] bg-[#079211]"></div>
          <h4 className="font-bold text-[#079211]">Skills</h4>
        </div>
        <h2 className="my-3 text-2xl font-bold md:text-4xl">Technologies</h2>
      </div>
      <section className="my-24 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-10 px-5 md:px-16 lg:px-28">
        <SkillCard
          technologyName="HTML"
          technologyLogo={HTMLLogo}
          textColor="text-[#f0662b]"
        />
        <SkillCard
          technologyName="CSS"
          technologyLogo={CSSLogo}
          textColor="text-[#1c73ba]"
        />
        <SkillCard
          technologyName="JavaScript"
          technologyLogo={JSLogo}
          textColor="text-[#e8c931]"
        />
        <SkillCard
          technologyName="Tailwind"
          technologyLogo={TailwindLogo}
          textColor="text-[#06b5d4]"
        />
        <SkillCard
          technologyName="React JS"
          technologyLogo={ReactLogo}
          textColor="text-[#61d9fa]"
        />
        <SkillCard
          technologyName="Git"
          technologyLogo={GitLogo}
          textColor="text-[#f03a2e]"
        />
        <SkillCard
          technologyName="Git Hub"
          technologyLogo={GitHubLogo}
          textColor="text-white"
        />
      </section>
    </section>
  );
};

export default Technologies;

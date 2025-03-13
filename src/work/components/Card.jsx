import React from "react";
import Button from "../../navigation/component/Button";

const Card = ({
  projectImage,
  projectAlt,
  projectName,
  projectLink,
  projectDetails,
  technologies,
}) => {
  return (
    <div className="w-[350px] overflow-hidden rounded-[12px] bg-[#101017] xl:w-[500px]">
      <img src={projectImage} alt={projectAlt} />
      <div className="my-[10px] p-[24px]">
        <h3 className="text-2xl font-bold">{projectName}</h3>
        <p className="my-2 font-bold text-[#079211]">
          Technologies Used: {technologies}
        </p>
        <p className="scroll-bar my-3 h-[120px] overflow-y-scroll">
          {projectDetails}
        </p>
        <a
          href={projectLink}
          className="font-semibold text-[#079211] hover:text-[#07921093]"
        >
          Live Demo{" "}
          <span className="text-[20px] font-bold text-[#079211]">&#8599;</span>
        </a>
      </div>
    </div>
  );
};

export default Card;

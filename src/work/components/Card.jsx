import React from "react";

const Card = ({
  projectImage,
  projectAlt,
  projectName,
  projectLink,
  projectDetails,
  technologies,
}) => {
  return (
    <div className="w-[350px] xl:w-[550px]">
      <img src={projectImage} alt={projectAlt} />
      <div className="my-5">
        <h3 className="text-2xl font-bold">{projectName}</h3>
        <p className="my-3">{projectDetails}</p>
        <p className="my-2 font-bold">Technologies Used: {technologies}</p>
        <a href={projectLink} className="font-semibold text-[#079211]">
          See project{" "}
          <span className="text-[20px] font-bold text-[#079211]">&#8599;</span>
        </a>
      </div>
    </div>
  );
};

export default Card;

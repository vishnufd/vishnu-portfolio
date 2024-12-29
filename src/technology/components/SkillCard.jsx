import React from "react";

const SkillCard = ({ technologyLogo, technologyName, textColor }) => {
  return (
    <div className="flex w-[131px] cursor-pointer flex-col items-center justify-center rounded-md border-b-4 border-[#079211] bg-[#3131315d] px-6 py-5 text-center transition-all hover:scale-105">
      <img src={technologyLogo} alt="technology logos" />
      <h2 className={`pt-5 font-bold ${textColor}`}>{technologyName}</h2>
    </div>
  );
};

export default SkillCard;

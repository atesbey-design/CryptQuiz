import React from "react";

const SponsorName = ({ sponsorName, timeRemaining }) => {
  return (
    <div className="py-0 lg:py-5 flex flex-row justify-between font-bold">
      <h1 className="w-[65vw] text-base lg:text-32 text-black text-start lg:text-center tracking-widest font-lexend">
        {sponsorName}
      </h1>
      <div className="block lg:hidden w-[20vw] text-xl text-end">
        <i className="fa-regular fa-clock pr-1"></i>
        {timeRemaining}
      </div>
    </div>
  );
};

export default SponsorName;

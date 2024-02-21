"use client";
import React from "react";
import SponsorSwiper from "./SponsorSwiper";

import { useDispatch, useSelector } from "react-redux";

const Sponsors = ({ handleDeleteClick }) => {
  const sponsorData = useSelector((state) => state.createQuiz.quiz);

  return (
    <div
      className="flex flex-col  w-auto overflow-hidden p-3 space-y-2
     bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4"
    >
      <div className="flex flex-row justify-between">
        <span className="font-bold text-14">Sponsorlar</span>
        <div className="flex flex-row">
          <span className="font-medium"> Toplam Sponsor sayısı:</span>{" "}
          <span className="font-bold">{sponsorData.sponsors.length - 1}/4</span>
        </div>
      </div>
      <div className="w-full  h-[20vh] ">
        <SponsorSwiper handleDeleteClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default Sponsors;

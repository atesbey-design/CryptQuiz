import React from "react";
import SponsorEntry from "./SponsorEntry";
import Sponsors from "./Sponsors";
import { useDispatch, useSelector } from "react-redux";

const AddSponsors = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className=" flex flex-row gap-2">
        <div className="flex flex-col w-1/3  p-2 bg-[#FBCB22] text-black rounded-20 border border-black border-r-4 border-b-4">
          <span className="font-bold text-base">Ödül 1</span>
          <textarea
            className="border border-black border-r-4 border-b-4"
            style={{ borderRadius: "10px", resize: "none", padding: "4px" }}
            placeholder="Ödül Yazınız..."
            name=""
            id=""
            cols="10"
            rows="7"
          />
        </div>
        <div className="flex flex-col w-1/3  p-2 bg-[#B0AFAA] text-black rounded-20 border border-black border-r-4 border-b-4">
          <span className="font-bold text-base">Ödül 2</span>
          <textarea
            className="border border-black border-r-4 border-b-4"
            style={{ borderRadius: "10px", resize: "none", padding: "4px" }}
            placeholder="Ödül Yazınız..."
            name=""
            id=""
            cols="10"
            rows="7"
          />
        </div>
        <div className="flex flex-col w-1/3  p-2 bg-[#C5773E] text-black rounded-20 border border-black border-r-4 border-b-4">
          <span className="font-bold text-base">Ödül 3</span>
          <textarea
            className="border border-black border-r-4 border-b-4"
            style={{ borderRadius: "10px", resize: "none", padding: "4px" }}
            placeholder="Ödül Yazınız..."
            name=""
            id=""
            cols="10"
            rows="7"
          />
        </div>
      </div>
      <SponsorEntry />
    </div>
  );
};

export default AddSponsors;

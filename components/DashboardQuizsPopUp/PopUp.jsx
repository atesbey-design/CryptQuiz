import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { popUpOn, popUpOff } from "../../app/(Auth)/redux/popUp/popUpSlice";
import { useDispatch } from "react-redux";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import TimeDetail from "./TimeDetail";
import QuizName from "./QuizName";
const PopUp = () => {
  const drawer = useSelector((state) => state.popUp.popUp);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute w-full h-full flex justify-center items-center ${
        drawer ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={() => dispatch(popUpOff())}
        className="absolute w-full h-full bg-black z-10 opacity-75 "
      ></div>
      <button
        onClick={() => dispatch(popUpOff())}
        href="/dashboard"
        className="absolute   left-[21vw] top-[11vh] z-30"
      >
        <Image
          src="/images/quitimage.png"
          alt="profile"
          width={48}
          height={48}
        />
      </button>
      <div className=" p-10 absolute w-[55vw] h-[75vh] bg-white z-20 rounded-20 border border-black border-r-8 border-b-8">
        <div className="flex flex-col w-full h-full gap-2">
          <QuizName />
          <TimeDetail />
          <Prizes />
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default PopUp;

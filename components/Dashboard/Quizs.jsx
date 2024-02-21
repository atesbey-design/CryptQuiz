"use client"
import React from "react";
import Quiz from "./Quiz";
import { useSelector } from 'react-redux'
import { popUpOn,popUpOff } from '../../app/redux/popUp/popUpSlice'
import { useDispatch } from 'react-redux'
const quizsArr = [
  {
    name: "True Feed Back Quiz",
  },
  {
    name: "True Back Feed  Quiz",
  },
  {
    name: "True Quiz Feed Back ",
  },
  {
    name: " Quiz True Feed Back ",
  },
  {
    name: "True Feed Back Quiz",
  },
  {
    name: "True Feed Back Quiz",
  },
  {
    name: "True Feed Back Quiz",
  },
];

const Quizs = () => {
  const drawer = useSelector((state) => state.popUp.popUp)
  const dispatch = useDispatch()
  return (
    <div  className="flex flex-col px-2 w-full  h-full bg-white rounded-20 border border-black
     border-r-4 border-b-4 ">
      <div className="p-2 ">
        <span className="text-black font-bold text-16">Quizler</span>
      </div>
      <div className=" flex flex-col px-1 overflow-y-auto gap-2">

      {quizsArr.map((i, index) => (
        <button onClick={()=>dispatch(popUpOn())}  key={index} >
          <Quiz items={i} />
        </button>
      ))}
      </div>
    </div>
  );
};

export default Quizs;

"use client";
import React, { useEffect } from "react";
import AddQuestion from "./AddQuestion";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { setQuizDataByKey } from "../../app/redux/createQuiz/quizSlice";

const AddQuizGroups = () => {
  const quizData = useSelector((state) => state.createQuiz.quiz);
  const dispatch = useDispatch();
  const handleInputChange = (key, value) => {
    dispatch(setQuizDataByKey({ key, value }));
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col w-auto overflow-hidden p-3 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
        <span className="font-bold text-14 marker:">Quiz Adı</span>
        <input
          className="border-[2px] border-black p-2 rounded-10"
          placeholder="Quiz Adını Giriniz..."
          value={quizData?.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>
      <div className="flex flex-row w-full space-x-8">
        <div className="flex flex-col w-full overflow-hidden p-3 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
          <span className="font-bold text-14 marker:">Quiz Günü</span>
          <input
            className="border-[2px] border-black p-2 rounded-10"
            type="date"
            placeholder="Quiz Günü Giriniz..."
            value={quizData?.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full overflow-hidden p-3 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
          <span className="font-bold text-14 marker:">Quiz Saati</span>
          <input
            className="border-[2px] border-black p-2 rounded-10"
            placeholder="Quiz Saati Giriniz..."
            value={quizData?.time}
            onChange={(e) => handleInputChange("time", e.target.value)}
          />
        </div>
      </div>

      <AddQuestion />
    </div>
  );
};

export default AddQuizGroups;

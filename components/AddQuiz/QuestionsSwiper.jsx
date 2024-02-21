import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Trash } from "iconsax-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  setQuizDataByKey,
} from "../../app/redux/createQuiz/quizSlice";

// import required modules
import { Pagination } from "swiper/modules";

export default function App({ handleDeleteClick }) {
  const quizData = useSelector((state) => state.createQuiz.quiz);
  console.log("quizdata", quizData);
  const dispatch = useDispatch();
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper "
      >
        {quizData.questions.slice(+1).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-full h-[20vh]  items-start space-x-2 rounded-10 border border-black bg-white ">
              <div className="flex flex-row justify-between p-2  w-full items-start ">
                <span className=" flex items-start justify-start font-bold text-xs">
                  {index + 1}.Soru:{item.question}
                </span>
                <Trash
                  onClick={() => handleDeleteClick(index)}
                  size="28"
                  color="#FF8A65"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-start  w-full h-full space-y-2">
                <span className="font-normal  text-xs">
                  A) {item.choices[0]?.value}
                </span>
                <span className="font-normal  text-xs">
                  B) {item.choices[1]?.value}
                </span>
                <span className="font-normal  text-xs">
                  C) {item.choices[2]?.value}
                </span>
                <span className="font-normal  text-xs">
                  D) {item.choices[3]?.value}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

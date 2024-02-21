"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import socketIOClient from "socket.io-client";

const Question = ({
  question,
  options,
  trueAnswer,
  countDown,
  selectedOptions,
  handleOptionClick,
}) => {
  const index = 0;
  const [width, setWidth] = useState(100);
  const [isWait, setIsWait] = useState(false);

  const colors = [
    "bg-neu-blue3",
    "bg-neu-purple3",
    "bg-neu-pink3",
    "bg-neu-red3",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown > 0) {
        handleCountdownChange(countDown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countDown]);

  const handleCountdownChange = () => {
    if (countDown === 0) {
      setIsWait(true);
    } else {
      setIsWait(false);
    }
  };

  useEffect(() => {
    setWidth(100 - (10 - countDown) * 10);
    console.log("countdown", countDown);
  }, [countDown]);

  return (
    <div>
      <div className="h-[22vh] lg:h-[25vh] bg-neu-orange mb-4 lg:mb-10 flex flex-col relative items-center justify-center rounded-20 border border-black border-r-4 border-b-4">
        <p className="text-xl lg:text-2xl font-bold text-black font-public text-center">
          {question}
        </p>

        <div className="hidden lg:block absolute -top-14 -right-14"></div>
      </div>

      <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0 w-full font-bold font-public pb-4 lg:pb-0">
        {options.map((option, index) => (
          <div
            key={index}
            className=" flex-row w-[81vw] lg:w-[48%] pb-0 lg:pb-10"
          >
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1 }}
              className={`h-[10vh] lg:h-[8vh]  flex basis-1/2 ${colors[index]} items-center space-x-5 rounded-20 border border-black hover:border-none border-r-4 border-b-4 duration-100 cursor-pointer`}
            >
              <div className="text-40 pl-4">{index}</div>
              <div>{option}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import socketIOClient from "socket.io-client";
import { motion } from "framer-motion";
import Sponsor from "@/components/Sponsor/Sponsor";
import SponsorName from "@/components/SponsorName/SponsorName";
import Advert from "@/components/Advert/Advert";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import QuizName from "@/components/DashboardQuizsPopUp/QuizName";

const socket = socketIOClient("http://localhost:8000");
// const socket = socketIOClient("https://quiz-ws-server-a25e2a4e63e7.herokuapp.com");
export default function Page() {
  //const socket = socketIOClient("https://quiz-ws-server-a25e2a4e63e7.herokuapp.com");
  
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState(null);
  const [quizName, setQuizName] = useState("tuNNcay Quiz");
  const [options, setOptions] = useState(["1", "2", "3", "4"]);
  const [trueAnswer, setTrueAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState(""); 
  const [countDown, setCountDown] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState("");
  const [width, setWidth] = useState(100);
  const [isWaiting, setIsWaiting] = useState(1);
  const [isGameOver, setIsGameOver] = useState(0);
  const [sortedUsers, setSortedUsers] = useState(null);
  const [advertImage, setAdvertImage] = useState("/images/chaingptadvert.jpeg");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestionNumber, setTotalQuestionNumber] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [onlineUser, setOnlineUser] = useState(0);

  const colors = [
    "bg-neu-pink4",
    "bg-neu-red3",
    "bg-neu-purple3",
    "bg-neu-blue3",
  ];
  const optionType = [
    "A",
    "B",
    "C",
    "D",
  ];


  useEffect(() => {
    setWidth(100 - (10 - countDown) * 10);
  }, [countDown]);
  useEffect(() => {
    
    if(trueAnswer!=="")
    {
      if (userAnswer.toLowerCase() === trueAnswer.toLowerCase())
      {
        socket.emit("increaseScore");
        console.log("Cevap doğru", userAnswer);
      }
    }
  }, [trueAnswer]);

  useEffect(() => {
  
    socket.emit("setParams", { username: window.ethereum.selectedAddress });

    socket.emit("joinRoom", "tuNNcay");
    socket.on("question", (question) => {
      setQuestion(question);
      setTrueAnswer("");
      setUserAnswer("");
    });
    socket.on("currentQuestionIndex", (currentQuestionIndex) => {
    let optionsArray = String(currentQuestionIndex).split(",");
    setCurrentQuestionIndex(optionsArray[0]);
    setTotalQuestionNumber(optionsArray[1]);
  });

  socket.on("advertisingImage", (advertisingImage) => {
    setAdvertImage(String(advertisingImage));

  });
  socket.on("onlineUser", (onlineuser) => {
    setOnlineUser(parseInt(onlineuser));

  });
  socket.on("quizName", (quizname) => {
    setQuizName(String(quizname));
  });
  socket.on("userScore", (score) => {

    setUserScore(parseInt(score));
  });

  socket.on("options", (options) => {

    let optionsArray = String(options).split(",");
    setOptions([optionsArray[0], optionsArray[1], optionsArray[2], optionsArray[3]]);
  });

  socket.on("answer", (answer) => {
    
    setTrueAnswer(String(answer));

  
  });

  socket.on("waiting", (waiting) => {
    setIsWaiting(waiting);
  });

  socket.on("gameOver", (sortedUsers) => {

    setIsGameOver(1);

    setSortedUsers(sortedUsers);
   
  });

  socket.on("countdown", (message) => {
    setCountDown(message);
  });
  }, []);

  

  

  const optionSelected = (selectedOption) => {
    

    setUserAnswer(selectedOption);
  };

  return (
    <div>
      <div>
        <div>
          <div
            className="hidden lg:block h-4 bg-red-500 w-full rounded-t-40"
            style={{ width: `100%` }}
          ></div>
          <div
            className="hidden lg:block h-4 bg-transparent w-full rounded-t-40"
            style={{ width: `${100 - width}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between overflow-y-auto">
        <div className="hidden lg:block relative h-[68vh] w-[8vh] mt-6">
          <Image
            className="h-full w-full"
            src="/images/sol.png"
            alt="images"
            fill
          />
        
        </div>
        <div className="w-[81vw] lg:w-[60vw] py-4 lg:py-0 mx-4 lg:m-0">
          {isGameOver !== 0 ? (
            <LeaderBoard sortedUsers={sortedUsers} />
          ) : (
            <>
              {isWaiting === 0 ? (
                <>
                  <div className="h-[8vh] lg:h-[12vh]">
                    <SponsorName sponsorName={quizName} />
                    
                  </div>
                  <p className="bg-red-500 text-white px-4 py-2 rounded-md">
                    Kalan süre: {countDown} online user {onlineUser}
                    
         {userAnswer}   
                  </p>
                  <div>
                    <div className="h-[22vh] lg:h-[25vh] bg-neu-orange mb-4 lg:mb-8 flex flex-row relative items-center justify-center rounded-20 border border-black border-r-4 border-b-4">
                      <div className="hidden lg:block bg-neu-blue text-white text-base md:text-xl lg:text-2xl absolute -top-6 -left-8 lg:py-1 px-2 lg:px-4 rounded-20 border border-black border-r-4 border-b-4 font-archivo">
                        <span className="drop-shadow-md">
                          {Number(currentQuestionIndex) + 1} / {totalQuestionNumber}
                        </span>
                      </div>
                      <div className="text-xl lg:text-2xl font-bold text-black font-public text-center">
                        {question === "" ? (
                          <>soru yok</>
                        ) : (
                          <p className="text-xl lg:text-2xl font-bold text-black font-public text-center">
                            {question}
                          </p>
                        )}
                      </div>

                      <div className="w-20 h-20 hidden lg:block absolute -top-10 -right-10">
                        
                        <Image
                          src="/images/star.png"
                          alt="quiz"
                          width={80}
                          height={80}
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-lg">{userScore}</div>

                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0 w-full font-bold font-public pb-4 lg:pb-0">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className="flex-row w-[81vw] lg:w-[48%] pb-0 lg:pb-6"
                        >
                         <motion.button
  onClick={() => optionSelected(option)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 1 }}
  className={`h-[10vh] lg:h-[9vh] w-full flex basis-1/2 ${
    option === userAnswer && option === trueAnswer
      ? "bg-green-500"
      : option === userAnswer
      ? "bg-gray-500"
      : option === trueAnswer
      ? "bg-green-500"
      : colors[index]
  } items-center space-x-5 rounded-20 border border-black hover:border-none border-r-4 border-b-4 duration-100 cursor-pointer`}
>


                            <div className="text-40 pl-4">{optionType[index]}</div>
                            <div>{option}</div>
                          </motion.button>
                        </div>
                      ))}
                    </div>

                    <div>
                      {countDown === 0 ? (
                        <p>Doğru cevap: {trueAnswer}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="h-full lg:h-full mb-4 w-full flex flex-row relative items-center justify-center"
                  style={{ width: `100%` }}
                >
                  <Advert advertSrc={advertImage} />
                </div>
              )}
            </>
          )}
          <div>
            <Sponsor />
          </div>
        </div>
        <div className="hidden lg:block relative h-[68vh] w-[8vh] mt-6">
          <Image
            className="h-full w-full"
            src="/images/sag.png"
            alt="images"
            fill
          />
        </div>
      </div>
    </div>
  );
}

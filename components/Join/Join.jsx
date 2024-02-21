"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoIosArrowDown } from "react-icons/io";
import { useAccount } from "wagmi";
import Backend from "@/data/Backend";
import { setUsername } from "../../app/(Auth)/redux/quizData/quizDataSlice";

import {
  setQuestion,
  setOptions,
  setAnswer,
  setCountDown,
  setGameOver,
} from "../../app/(Auth)/redux/quizData/quizDataSlice";

const Join = () => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  const handleLog = (address) => {
    console.log("prev", address);
    dispatch(setUsername(address));
    console.log("calıstı", username);
  };

  const handleDisconnect = () => {};
  const socket = socketIOClient("http://localhost:8000");
  const username = useSelector((state) => state.quizData.username);
  const isInit = useSelector((state) => state.quizData.isInit);
  const isGameOver = useSelector((state) => state.quizData.isGameOver);


  const [joined, setJoined] = useState(false);

  const dispatch = useDispatch();

  const handleJoinRoom = () => {
    dispatch(setUsername(address));
    console.log("username", username);

    socket.emit("setParams", {
      username: username,
    });

    setJoined(true);

    socket.emit("joinRoom", "tuNNcay");

    socket.emit("init");
    console.log("isinit", isInit);

    socket.on("question", (question) => {
      dispatch(setQuestion(question));
      console.log("question", question);
    });
    socket.on("options", (options) => {
      dispatch(setOptions(options));
      console.log("options", options);
    });
    socket.on("answer", (answer) => {
      dispatch(setAnswer(answer));
      console.log("answer", answer);
    });
    socket.on("countdown", (countdown) => {
      dispatch(setCountDown(countdown));
      console.log("countdown", countdown);
    });
    socket.on("gameOver", (data) =>{
      dispatch(setGameOver(data));
      console.log(data)
    })
  };


  useEffect(() => {
    if (address) {
      socket.on("connect", () => {
        console.log("connected");
      });
    }
  }, [address]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        useEffect(() => {
          if (connected) {
            handleLog(account.address);
          } else {
            // Kullanıcı çıktığında
            handleDisconnect();
          }
        }, [connected]);

        if (!connected) {
          return (
            <Link
              href="#"
              onClick={openConnectModal}
              className="bg-neu-purple2 h-[12vh] lg:h-[39vh] text-white flex flex-col justify-between p-0 lg:p-5 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend hover:border-l-1 hover:border-t-1 hover:border-r-1 hover.border-b-1  duration-300"
            >
              <div className="hidden lg:flex flex-row justify-between">
                <div className="flex flex-row space-x-3 items-center">
                  <div>
                    <Image
                      className="w-8 h-8"
                      src="/images/clock.png"
                      alt="clock"
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className="text-base font-bold countdown">15</div>
                </div>
                <div className="hidden lg:flex flex-row space-x-5 items-center">
                  <div className="text-base font-bold">20 kişi</div>
                  <div>
                    <Image
                      className="w-8 h-8"
                      src="/images/people.png"
                      alt="clock"
                      height={32}
                      width={32}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-full h-full relative">
                <div className="text-16 lg:text-5xl xl:text-5xl font-bold lg:p-0">
                  <span className="drop-shadow-[2px_2px_rgba(0,0,0,40)]">
                    Cüzdan Bağla
                  </span>
                </div>
              </div>
              <div className="hidden lg:block text-xs font-bold mx-24 text-center text-white">
                <span className="text-neu-yellow">ÖNEMLİ NOT: </span> Quiz
                başladıktan sonra 1 dakika içinde katılım sağlamanız
                gerekmektedir.
              </div>
            </Link>
          );
        } else if (chain.unsupported) {
          return (
            <button onClick={openChainModal} type="button">
              Wrong network
            </button>
          );
        } else {
          return (
            <Link
              href="/quiz"
           // onClick={handleJoinRoom}
              className="bg-neu-purple2 h-[12vh] lg:h-[39vh] text-white flex flex-col justify-between p-0 lg:p-5 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend hover:border-l-2 hover:border-t-2 hover:border-r-2 hover:border-b-2 duration-300"
            >
              <div className="hidden lg:flex flex-row justify-between">
                <div className="flex flex-row space-x-3 items-center">
                  <div>
                    <Image
                      className="w-8 h-8"
                      src="/images/clock.png"
                      alt="clock"
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className="text-base font-bold countdown">15</div>
                </div>
                <div className="hidden lg:flex flex-row space-x-5 items-center">
                  <div className="text-base font-bold">20 kişi</div>
                  <div>
                    <Image
                      className="w-8 h-8"
                      src="/images/people.png"
                      alt="clock"
                      height={32}
                      width={32}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-full h-full relative">
                <div className="hidden lg:block absolute left-[125px] top-7 w-12 h-8 max-w-15 max-h-10">
                  <Image src="/images/katil.png" alt="image" fill />
                </div>
                <div className="text-32 lg:text-7xl font-bold lg:p-0">
                  <span className="drop-shadow-[2px_2px_rgba(0,0,0,40)]">
                    {joined ? "KATILDIN" : "KATIL"}
                  </span>
                </div>
              </div>
              <div className="hidden lg:block text-xs font-bold mx-24 text-center text-white">
                <span className="text-neu-yellow">YOUR ADDRESS: </span>{" "}
                {account?.address}
              </div>
            </Link>
          );
        }
      }}
    </ConnectButton.Custom>
  );
};

export default Join;

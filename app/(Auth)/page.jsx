"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";
import HeaderTime from "@/components/headerTime/headerTime";
import Join from "@/components/Join/Join";
import JoinSponsor from "@/components/JoinSponsor/JoinSponsor";
import Stats from "@/components/Stats/Stats";
import { useSelector } from "react-redux";

function Page() {
  const screenSize = useScreenSize();
  const username = useSelector((state) => state.quizData.username);
  console.log("username", username);

  return (
    <div className="flex justify-between m-4 lg:m-0 ">
      <div className="hidden lg:block relative h-[75vh] w-[5vw] mt-6">
        <Image
          className="h-full w-full"
          src="/images/sol.png"
          alt="images"
          fill
        />
      </div>

      <div className="flex flex-col justify-center w-[65vw] space-y-4 lg:space-y-0">
        {/* sponsor ve zaman */}
        <div className="h-[18vh] lg:h-[10vh]">
          <HeaderTime />
        </div>
        {/* alt container */}
        <div className="flex flex-col lg:flex-row h-[60vh] justify-between space-x-0 lg:space-x-10 ">
          {/* ilk üç */}
          <div className="w-[81vw] lg:w-[28vw]">
            <Stats />
          </div>
          {/* sağ */}
          <div className="flex flex-col justify-between w-[81vw] lg:w-[60vw] space-y-5">
            {/* katıl */}
            {screenSize.width > 768 ? (
              <>
                <div id="join">
                  <Join />
                </div>
                {/* sponsor */}
                <div id="sponsor">
                  <JoinSponsor />
                </div>
              </>
            ) : (
              <>
                <div id="sponsor">
                  <JoinSponsor />
                </div>
                <div id="join">
                  <Join />
                </div>
                {/* sponsor */}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative h-[75vh] w-[8vh] mt-6">
        <Image
          className="h-full w-full"
          src="/images/sag.png"
          alt="images"
          fill
        />
      </div>
    </div>
  );
}

export default Page;

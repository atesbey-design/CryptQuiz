import React from "react";
import Image from "next/image";

const JoinSponsor = () => {
  const sponsorArr = [
    {
      img: "/images/spon11.png",
      compName: "bla bla coin",
    },
    {
      img: "/images/spon22.png",
      compName: "bla bla coin",
    },
    {
      img: "/images/spon33.png",
      compName: "bla bla coin",
    },
    {
      img: "/images/spon44.png",
      compName: "bla bla coin",
    },
  ];
  return (
    <div className="flex flex-row justify-between items-center h-[8vh] lg:h-[18vh] space-x-3 lg:space-x-6 font-public">
      {sponsorArr.map((i, index) => (
        <div
          key={index}
          className="flex relative flex-col items-center justify-between text-center lg:space-y-1
             bg-white p-1 lg:p-3 w-1/4 h-full rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8"
        >
          <div className="flex w-10 lg:w-20 h-3/4">
            <Image
              src={i.img}
              alt="sponsor"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              width={48}
              height={40}
              unoptimized
            />
          </div>
          <div className="text-black font-semibold text-8 lg:text-base h-1/4">
            {i.compName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JoinSponsor;

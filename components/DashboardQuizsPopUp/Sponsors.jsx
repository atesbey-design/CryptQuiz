import React from "react";
import Image from 'next/image';
const Sponsors = () => {
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
    <div className="flex flex-row justify-between items-center h-[20vh] space-x-12 font-public">
      {sponsorArr.map((i, index) => (
        <div
          key={index}
          className="flex relative flex-col items-center justify-around text-center
         bg-white p-1 w-[25%] h-full rounded-20 border border-black 
         border-r-8 border-b-8 "
        >
          <div className="relative w-[50%] h-[50%]" >
            <Image
              src={i.img}
              alt="images"
              layout="fill"
              objectFit="contain"
              style={{
                boxSizing: "10px",
              }}
            />
          </div>
          <div className="text-black font-semibold text-base ">
            {i.compName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;

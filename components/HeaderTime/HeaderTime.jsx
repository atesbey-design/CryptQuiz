import React from "react";

const HeaderTime = () => {
  const HeaderTime = [
    {
      quiz: "Truefeedback Quiz Yarışması",
      date: "15",
      moon: "Ekim",
      hour: "14",
      minitues: "00",
    },
  ];
  return (
    <div>
      {HeaderTime.map((i, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center lg:justify-between"
        >
          <div className="flex justify-center items-center w-[81vw] h-[12vh] lg:w-[40vw] lg:h-[8vh] bg-neu-orange text-black text-lg lg:text-xl xl:text-2xl p-1 lg:p-3 font-bold rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend lg:whitespace-nowrap overflow-hidden text-ellipsis text-start lg:text-center">
            {i.quiz}
          </div>
          <div className="w-[45vw] h-[6vh] lg:w-[20vw] lg:h-[8vh] flex flex-row justify-around items-center bg-neu-green3 font-bold text-black border rounded-10 lg:rounded-20 border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend">
            <div className="text-sm lg:text-xl xl:text-2xl">
              {i.date} {i.moon}
            </div>
            <div className="text-sm lg:text-base xl:text-lg flex flex-row lg:flex-col">
              <div>{i.hour}</div>
              <span className="block lg:hidden text-sm lg:text-base xl:text-lg">
                :
              </span>
              <div>{i.minitues}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderTime;

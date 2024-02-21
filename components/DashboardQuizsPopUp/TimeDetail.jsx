import React from "react";

const TimeDetail = () => {
  const arr = [
    {
      history: "22/04/2023",
      clock: "15.00",
      totalUser:"1245"
    },
  ];
  return (
    <div className="flex flex-row gap-4 w-full">
      {arr.map((i) => (
        <>
          <div
            className="flex flex-row justify-center items-center h-auto w-full bg-[#D9D9D9]
 rounded-10 border border-black border-r-2 border-b-2 py-2 px-10 "
          >
            <p className="font-bold">{i.history}</p>
          </div>

          <div
            className="flex flex-row justify-center items-center h-auto w-full bg-[#D9D9D9]
    rounded-10 border border-black border-r-2 border-b-2 py-2 px-10 "
          >
            <p className="font-bold">{i.clock}</p>
          </div>
          <div
            className="flex flex-row justify-center items-center h-auto w-full bg-[#D9D9D9]
    rounded-10 border border-black border-r-2 border-b-2 py-2 px-10 "
          >
            <p className="font-bold">{i.totalUser}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default TimeDetail;

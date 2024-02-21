import React from "react";

const Quiz = ({items}) => {
  return (
    <div className="flex flex-col w-auto overflow-hidden p-3 space-y-2 bg-neu-orange text-black rounded-20 border border-black border-r-4 border-b-4">
      <div className="border-[2px] border-black p-2 bg-white rounded-10">{items.name}</div>
      <div className="flex flex-row space-x-2 w-full">
        <div className="border-[2px] border-black p-2 w-[50%] bg-white rounded-10">22/04/2023</div>
        <div className="border-[2px] border-black p-2 w-[50%] bg-white rounded-10">14:00</div>
      </div>
    </div>
  );
};

export default Quiz;

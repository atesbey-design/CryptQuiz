import React from "react";

const Prize = ({ color, label }) => {
  return (
    <div
      className={`flex flex-col w-1/3 p-2 bg-${color} text-black rounded-20 border border-black border-r-4 border-b-4`}
    >
      <span className="font-bold text-base">{label}</span>
      <textarea
        className="border border-black border-r-4 border-b-4"
        style={{ borderRadius: "10px", resize: "none", padding: "4px" }}
        placeholder="Ödül Yazınız..."
        name=""
        id=""
        cols="10"
        rows="6"
      ></textarea>
    </div>
  );
};

const Prizes = () => {
  const prizeData = [
    { color: "FBCB22", label: "Ödül 1" },
    { color: "B0AFAA", label: "Ödül 2" },
    { color: "C5773E", label: "Ödül 3" },
  ];

  return (
    <div className="flex flex-row gap-2">
      {prizeData.map((prize, index) => (
        <Prize key={index} color={prize.color} label={prize.label} />
      ))}
    </div>
  );
};

export default Prizes;

import React from "react";

const Stats = () => {
  const statsData = [
    {
      rank: 1,
      awards: ["100.000 TFBX", "TFB Kupa", "Sticker Pack", "Mouse Pad"],
      bgColor: "bg-neu-blue4",
    },
    {
      rank: 2,
      awards: ["20.000 TFBX", "TFB Kupa", "Mouse Pad"],
      bgColor: "bg-neu-green4",
    },
    {
      rank: 3,
      awards: ["1.000 TFBX", "TFB Kupa", "Sticker Pack"],
      bgColor: "bg-neu-pink4",
    },
    // Buraya ekstra sıralamaları ekleyebilirsiniz
  ];

  return (
    <div className="flex flex-col h-[42vh] lg:h-[60vh] space-y-5 font-bold">
      {statsData.map((data, index) => (
        <div
          key={index}
          className={`flex flex-row justify-between h-[12vh] lg:h-[19vh] ${data.bgColor} rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8`}
        >
          <div className="text-6xl lg:text-7xl text-black ml-4 font-lexend">
            {data.rank}
          </div>
          <div className="flex flex-col justify-center text-sm lg:text-base text-black font-semibold lg:font-bold font-public space-y-2 lg:space-y-0">
            {data.awards.map((award, awardIndex) => (
              <div key={awardIndex} className="mr-4">
                {award}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

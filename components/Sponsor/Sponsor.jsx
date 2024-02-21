import React from "react";
import Image from "next/image";

const Sponsor = () => {
  const sponsorArr=[
    {
      img:"/images/spon1.png",
    },
    {
      img:"/images/spon2.png",
    },
    {
      img:"/images/spon3.png",
    },
    {
      img:"/images/spon4.png",
    },
      ]
  return (
    <div className='flex flex-row justify-between items-center space-x-3 lg:space-x-6'>
    {sponsorArr.map((i,index)=>(  
        <div key={index} className='flex lg:hidden relative flex-col items-center justify-around text-center
         bg-white  w-16 h-16 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
            <div className="flex w-9 lg:w-12"
              >
              <Image                        
                src={i.img}
                alt='sponsor' 
                style={{ width: "100%", height: "100%" }}
                width={48}
                height={40}
                unoptimized
              />
              </div>
          </div>
    ))}         
    </div>
    
  );
};

export default Sponsor;

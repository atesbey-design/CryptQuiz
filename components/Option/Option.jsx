"use client";
import React from 'react';
import { motion } from 'framer-motion';

const QueOption = () => {
  const optionArr = [
    {
      op: "A",
      option: "Merkezi bir otorite tarafından kontrol edilir.",
      color: "bg-neu-red3",
    },
    {
      op: "B",
      option: "Tüm veriler açıkça görülebilir ve değiştirilebilir.",
      color: "bg-neu-pink3",
    },
    {
      op: "C",
      option: "İşlemlerin hızını arttırır.",
      color: "bg-neu-purple3",
    },
    {
      op: "D",
      option: "İşlemlerin gizliliğini korur ve değişmez bir kayıt tutar.",
      color: "bg-neu-blue3",
    },
  ];  

  return (
    <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0 w-full font-bold font-public pb-4 lg:pb-0">
      {optionArr.map((i, index) => (
        <div key={index} className=" flex-row w-[81vw] lg:w-[48%] pb-0 lg:pb-10">
          <motion.div whileHover={{scale : 0.95}} whileTap={{ scale: 1 }} className={`h-[10vh] lg:h-[8vh]  flex basis-1/2 ${i.color} items-center space-x-5 rounded-20 border border-black hover:border-none border-r-4 border-b-4 duration-100 cursor-pointer`}>
            <div className="text-40 pl-4">{i.op}</div>
            <div>{i.option}</div>
          </motion.div>  
        </div>
      ))} 
    </div>
  );
};

export default QueOption;


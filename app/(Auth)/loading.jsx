"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className='bg-[#FFFF99] w-full h-full'>
      <div className='flex flex-row items-center justify-center space-x-16 w-full h-full'>
        <motion.h1
        
          animate={{ x: [-36, 36, -36], y: 0 }}
          transition={{ repeat: Infinity, duration: 2, type: 'tween', ease: 'linear', bounce: 0.6, when: 'beforeChildren' }}
          initial={{ x: 0 }}
          className='text-6xl font-bold font-lexend'
        >
          Q
        </motion.h1>
        <h1 className='text-6xl font-bold font-lexend'>&</h1>
        <h1 className='text-6xl font-bold font-lexend'>A</h1>
        <motion.h1
          animate={{ x: [36, -36, 36], y: 0 }}
          transition={{ repeat: Infinity, duration: 2, type: 'tween', ease: 'linear', bounce: 0.6,  when: "beforeChildren" }}
          initial={{ x: 0 }}
          className='text-6xl font-bold font-lexend'
        >
          R
        </motion.h1>
      </div>
    </div>
  );
};

export default Loading;


"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const StatsCup = () => {
  
  return (
    <div className='flex flex-col w-full h-1/2 bg-neu-white border border-black border-b-8 border-r-8 rounded-50 px-10 py-6'>
        <h1 className='text-32 font-bold font-archivo'>Stats</h1>
        <div className='flex flex-row justify-center items-center space-x-32'>

        <motion.div
          initial={{ x: 250, opacity:0 }}
          animate={{ x: -100, opacity:1 }}
          transition={{ duration: 2}}
        >
          <Image

          src="/images/bronzeCup.png" 
          alt='silverCup'
          width={88}
          height={150}
          />
        </motion.div>
        <motion.div
        className = 'z-10'
        transition={{duration:2}}
        >
          <Image
          
          src="/images/goldCup.png"
          alt='silverCup'
          width={157}
          height={260}
          />
        </motion.div>
        <motion.div
        initial={{ x: -270 , opacity:0 }}
        animate={{ x: 100 , opacity:1}}
        transition={{ duration: 2 }}
        >
          <Image
          src="/images/silverCup.png"
          alt='silverCup'
          width={120}
          height={200}
          />
        </motion.div>
        </div>
      </div>
  )
}

export default StatsCup

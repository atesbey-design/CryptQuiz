import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CreateQuiz = () => {
  return (
    <Link href={"/addquiz"}>
    <div className='flex-grow py-10 px-14 bg-neu-purple2 rounded-20 border border-black border-r-8 border-b-8'>
    <div className='text-3xl font-bold '><span className='drop-shadow-[2px_2px_rgba(0,0,0,40)] flex justify-center items-center text-white '>YENİ QUİZ OLUŞTUR</span></div>
    </div>
    </Link>
  )
}

export default CreateQuiz
import React from 'react'

const Statistics = () => {
  return (
    <div className='flex flex-col w-full h-full  bg-white rounded-20 border border-black border-r-4 border-b-4'>
    <div className='flex-grow p-3'>
      <span className='text-black font-bold text-16'>İstatistikler</span>
    </div>
    <div className='flex flex-row py-6 justify-evenly text-black font-bold text-14'>
      <span>Toplam Quiz Sayısı</span>
      <span>Toplam Ödül Miktarı</span>
    <span>Toplam Sponsor Sayısı</span>
    </div>
  </div>
  )
}

export default Statistics
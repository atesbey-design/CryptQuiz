import React from 'react'

const HomeLogo = () => {
  return (
    <div className='w-full lg:w-1/2 h-1/3 lg:h-full flex flex-col space-y-8'>
        <div className='flex items-center w-full h-full lg:h-1/2 bg-neu-white rounded-20 lg:rounded-50 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
          <h1 className='w-full lg:h-full font-bold text-32 font-archivo text-center lg:py-36'>Logo</h1>
        </div>
        <div className='hidden lg:block w-full h-full bg-neu-white rounded-50 border border-black border-r-8 border-b-8 py-6 px-10'>
        <h1 className='w-full font-bold text-32 font-archivo'>Menu</h1>
        <h2 className='text-2xl font-archivo font-bold text-center py-24'>Coming Soon..</h2>
        </div>
      </div>
  )
}

export default HomeLogo

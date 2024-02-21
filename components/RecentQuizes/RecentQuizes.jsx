import React from 'react'

const RecentQuizes = () => {
  return (
    <div className='w-3/4 bg-neu-white border border-black border-b-8 border-r-8 rounded-50 px-10 py-6 space-y-5'>
          <h1 className='text-32 font-bold font-archivo'>Recent Quizes</h1>
          <div className='flex flex-col space-y-4'>

            <div className='basis-1/3  text-start space-y-3'>
              <div className='flex flex-row justify-between text-xl font-bold font-public'>
                <h2>Truefeedback Blockchain Quiz</h2>
                <h2>5/15</h2>
              </div>
              <div className='flex flex-row rounded-10 border border-black border-r-4 border-b-4 overflow-hidden'>
                <div className='bg-blue1 w-1/3 h-5 rounded-10'></div>
                <div className='bg-white w-2/3 h-5'></div>
              </div>
              
            </div>
            <div className='basis-1/3  text-start space-y-3'>
              <div className='flex flex-row justify-between text-xl font-bold font-public'>
                <h2>Truefeedback Ali Cabbar</h2>
                <h2>3/20</h2>
              </div>              
              <div className='flex flex-row rounded-10 border border-black border-r-4 border-b-4 overflow-hidden'>
                <div className='bg-orange1 w-1/6 h-5 rounded-10'></div>
                <div className='bg-white w-5/6 h-5'></div>
              </div>
            </div>

            <div className='basis-1/3 text-start space-y-3'>
              <div className='flex flex-row justify-between text-xl font-bold font-public'>
                <h2>Truefeedback Mustinin Günlükleri</h2>
                <h2>8/15</h2>
              </div>
              <div className='flex flex-row rounded-10 border border-black border-r-4 border-b-4 overflow-hidden'>
                <div className='bg-red1 w-7/12 h-5 rounded-10'></div>
                <div className='bg-white w-5/12 h-5'></div>
              </div>
            </div>
          </div>

        </div>
  )
}

export default RecentQuizes

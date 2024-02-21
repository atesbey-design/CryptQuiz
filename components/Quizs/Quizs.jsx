import React from 'react';
import Sponsor from '../Sponsor/Sponsor';

const Quizs = () => {
  const quizsArr = [
    {
      name: 'TrueFeedBack Quiz',
      date: '15',
      moon: "Ekim",
      hour: "14:00",
      awards: [
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-blue4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-green4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-pink4',
        },
      ],
    },
    {
      name: 'TrueFeedBack Quiz',
      date: '15',
      moon: "Ekim",
      hour: "14:00",
      awards: [
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-blue4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-green4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-pink4',
        },
      ],
    },
    {
      name: 'TrueFeedBack Quiz',
      date: '15',
      moon: "Ekim",
      hour: "14:00",
      awards: [
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-blue4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-green4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-pink4',
        },
      ],
    },
    {
      name: 'TrueFeedBack Quiz',
      date: '15',
      moon: "Ekim",
      hour: "14:00",
      awards: [
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-blue4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-green4',
        },
        {
          awardText: '100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad',
          color: 'bg-neu-pink4',
        },
      ],
    },
    
  ];

  return (
    <div className='w-full lg:w-1/2 h-full bg-neu-white rounded-20 lg:rounded-50 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 p-5 lg:py-6 lg:px-8 space-y-4 lg:space-y-5 overflow-y-auto'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='font-bold font-archivo text-xl lg:text-32 pl-2'>Quizler</h1>
        <h3 className='block lg:hidden font-medium text-sm font-archivo cursor-pointer'>tümünü gör</h3>
      </div>
      <div className='flex flex-col h-5/6 w-full space-y-5'>
        {quizsArr.map((quiz, index) => (
          <div key={index} className={`bg-neu-orange basis-1/3 rounded-20 border border-black border-r-2 border-b-2 px-3 lg:px-4 py-3 space-y-3`}>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='text-base w-4/6 lg:text-2xl font-bold font-public whitespace-nowrap text-ellipsis overflow-hidden text-start'>{quiz.name}</h1>
              <h2 className='text-xs lg:text-xl w-2/6 font-bold font-public text-end'>{quiz.date} {quiz.date} / {quiz.hour}</h2>
            </div>
            <div className='flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 space-y-3 lg:space-y-0'>
              <div className='flex flex-col lg:w-3/5 space-y-3'>
                {quiz.awards.map((award, awardIndex) => (
                  <div
                    key={awardIndex}
                    className={`basis-1/3 w-full ${award.color} rounded-10 border border-black border-b-2 border-r-2 py-3 px-3 whitespace-nowrap overflow-hidden text-ellipsis`}
                  >
                    {awardIndex + 1}. {award.awardText}
                  </div>
                ))}
              </div>
              <div className='flex flex-col lg:w-2/5 space-y-3'>
                <h1 className={`basis-2/3 bg-neu-purple2 border border-black border-r-2 border-b-2 rounded-10 text-white text-xl lg:text-32 font-lexend text-center py-4 lg:py-9`}>
                  Detaylar
                </h1>
                <div className='basis-1/3'>
                  <Sponsor />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizs;

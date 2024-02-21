import React from 'react'

const Prizes = () => {
    const prizesArr=[{
        number:"1",
        name:"cür melih",
        prize:" 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad"
    },
    {
        number:"2",
        name:"cür melih",
        prize:" 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad"
    },
    {
        number:"3",
        name:"cür melih",
        prize:" 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad"
    }]
  return (
    <>
<div className='flex flex-col gap-2'>
    <div className='flex flex-row  gap-4 h-[20vh] '>
    {prizesArr.map((i,index)=>(

    <div className='flex flex-row justify-between h-auto w-full bg-neu-blue4 
    rounded-20 border border-black border-r-4 border-b-4 '>
        <div className='text-6xl  font-bold text-black ml-4 font-lexend'>{i.number}</div>
        
        <div className='flex flex-col h-full justify-center w-1/2  text-base 
         text-black  font-public space-y-2'>
            <p key={index} className=' flex font-bold mr-4' style={{ textAlign: 'right' }} >{i.prize}</p>
        </div>
    </div>
            ))}
     
</div>
<div  className='flex flex-row gap-4'>

{prizesArr.map((i,index)=>(
<div key={index} className='flex flex-row justify-center items-center h-auto w-full bg-neu-blue4 
    rounded-20 border border-black border-r-4 border-b-4 py-2 px-10 '>
        <p className='font-bold'>{i.name}</p>
    </div>
   
))}
</div>

</div>
</>
  )
}

export default Prizes
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';


const PopUp = () => {

    
    console.log("isPopUp",isPopUp);
    if (!isPopUp) {
        return null
    }
  return (
    <>    
   
  
    
    <div className="absolute w-full h-full bg-black z-10 opacity-75 ">
   

    </div>
    <Link  href='/dashboard' className='absolute   left-[21vw] top-[11vh] z-30'>
      <Image
       src="/images/quitimage.png"
       alt="profile"
       width={48}
       height={48}
      />
      </Link>
      <div className=" absolute w-[55vw] h-[70vh] bg-white z-20 rounded-20 border border-black border-r-8 border-b-8">

      
   
      </div>
      </>

  )
}

export default PopUp
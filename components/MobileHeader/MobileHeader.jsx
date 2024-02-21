import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MobileHeader = () => {
  return (
    <header className="lg:hidden flex flex-row justify-between items-center w-[80vw] h-[4vh] my-4">
      
          <Link href="/home"> 
            <div>
              <Image
                src="/images/backImage.png"
                alt="profile"
                width={44}
                height={48}
              />  
            </div>
            </Link>
          <Link href="/profile">
            <div>
              <Image
                className="rounded-full border border-black border-r-2 border-b-2"
                src="/images/icardi.jpg"
                alt="profile"
                width={48}
                height={48}
              />
            </div>
            </Link>
          </header>
  )
}

export default MobileHeader

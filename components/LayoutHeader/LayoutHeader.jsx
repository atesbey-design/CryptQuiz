import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LayoutHeader = () => {
  return (
    <header className="lg:hidden flex flex-row justify-between items-center w-full px-8 py-7">
              <Link href="/home">
              <div className="w-12 relative pt-[100%]">
                  <Image
                    src="/images/backImage.png"
                    alt="profile"
                    objectFit="cover"
                    fill
                    className="w-full h-full top-0 left-0"
                  />
                </div>
              </Link>
              <Link href="/profile">
                <div className="w-12 relative pt-[100%]">
                  <Image
                    src="/images/icardi.jpg"
                    alt="profile"
                    objectFit="cover"
                    fill
                    className="w-full h-full top-0 left-0 object-cover rounded-full border border-black border-b-2 border-r-2"
                  />
                </div>
              </Link>
            </header>
  )
}

export default LayoutHeader

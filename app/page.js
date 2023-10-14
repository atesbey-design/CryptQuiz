import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-neu-yellow'>
      <div className='flex justify-between bg-no-repeat'>
        <button className='bg-neu-pink text-5xl py-4 px-6 rounded-xl justify-center items-center mt-8 ml-48'>Q</button>
        <button className='bg-neu-purple w-64 h-14 text-xl rounded-lg justify-center items-center mt-10 mr-48'>Connect Wallet</button>
      </div>
      <div>
        <div className='flex justify-around mt-20'>
         <div className='mt-20'>
         <Image
        src="/images/uc.png"
        alt='Image'
        height={195}
        width={195}
        />
         </div>
          <div>
          <Image
        src="/images/home.png"
        alt='Image'
        height={539}
        width={1119}
        />
          </div>
          <div className='mt-40'>
          <Image
        src="/images/d-pink.png"
        alt='Image'
        height={125}
        width={125}
        />
          </div>
        </div>
        <div className='flex justify-between mt-10'>
         <div className='ml-80'>
         <Image
        src="/images/d-white.png"
        alt='Image'
        height={195}
        width={195}
        />
         </div>
          <div className='mt-8 mr-64'>
          <Image
        src="/images/dik.png"
        alt='Image'
        height={125}
        width={125}
        />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

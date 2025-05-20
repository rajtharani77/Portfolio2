import React from 'react'

export const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-4xl leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
        <div className='w-1/2'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
          <div className='w-3 h-3 bg-zinc-300 rounded-full '></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-emerald-100 rounded-2xl '></div>
      </div>
    </div>
  )
}

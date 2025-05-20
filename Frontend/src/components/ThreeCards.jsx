import React from 'react'

export const ThreeCards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
        </div>
        
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#0d211f]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019</button></div>
            <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#0d211f]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019</button></div>

        </div>

    </div>
  )
}

import React from 'react'

export const Navbar1 = () => {
  return (
    <div className='w-full py-10 px-20 min-h-40vh flex justify-between'>
        <div className='text-3xl font-serif font-bold'>Portfolio</div>
        <div className='flex gap-10'>
            <a className='text-xl' href="">Home</a>
            <a className='text-xl  border-b-white'   href="">Projects</a>
            <a className='text-xl  border-b-white'  href="">Skills</a>
            <a className='text-xl  border-b-white'  href="">Contact</a>
        </div>
    </div>
  )
}

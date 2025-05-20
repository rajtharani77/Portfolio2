import { motion, useAnimate } from 'framer-motion'
import React from 'react'

export const Featured = () => {
    const cards=[useAnimate(),useAnimate()];
    const HandleHover=(index)=>{
        cards[index].start({});

    }
  return (
    <div className='w-full py-10'>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
            
            <div onHoverStart={()=>HandleHover(0)} className='w-1/2 relative cardcontainer   h-[75vh]'>
            <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
            {/* <h1 className='absolute text-[#CDEA68] overflow-hidden z-[9] leading-none text-8xl tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>{"FIDE".split("").map((item,index)=>(
                <motion.span initial={{y:"100%"}}  className='inline-block'>{item}</motion.span>
            ))}</h1> */}
            </h1>
                <div className='w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                </div>
            </div>
            <div className='w-1/2 cardcontainer  relative overflow-hidden h-[75vh]'>
            <div className='absolute text-[#CDEA68] z-[9] leading-none text-8xl tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2'>{"VISE".split("").map((item,index)=>(
                <span>{item}</span>
            ))}</div>
                <div className='w-full h-full rounded-xl'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                </div>
            </div>        </div>
        </div>
    </div>
  )
}

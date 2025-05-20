import React from 'react'
import {motion} from 'framer-motion'
export const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='  w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'> 
    <div className='text border-t-2 flex border-b-2 border-zinc-300  overflow-hidden whitespace-nowrap'>
    {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[10vw] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] uppercase  pt-10'>We are ochi</motion.h1> */}
    {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[10vw] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] uppercase   pt-10'>We are ochi</motion.h1> */}
    {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[10vw] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] uppercase   pt-10'>We are ochi</motion.h1> */}
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:5,ease:"linear"}} className='text-[20vw] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pr-10  pt-10'>We are ochi</motion.h1>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:5,ease:"linear"}} className='text-[20vw] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pr-10  pt-10'>We are ochi</motion.h1>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:5,ease:"linear"}} className='text-[20vw] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pr-10  pt-10'>We are ochi</motion.h1>

    </div>
    </div>
  )
}

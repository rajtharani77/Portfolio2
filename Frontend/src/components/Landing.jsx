import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstruct mt-50 px-20'>


            {["We Create","Eye Opening","Presentations"].map((item,index)=>(
                <div className='masker'>
                <div className='w-fit flex'>
                {index===1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='mr-[1vw] w-[9vw] relative top-3 rounded-3xl h-[4.5vw] bg-red-500'></motion.div>}
                <div className='text-[6vw] font-["Founders_Grotesk_X-Condensed"] font-bold uppercase leading-[6vw]  masker  '>
                <h1>{item}</h1>
            </div>
            </div>
            </div>
        ) )}
        
            
        </div>
        <div className='border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to last pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-light leading-none '>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2   captilize  border-[1px] text-md uppercase border-zinc-500 font-light text-sm  rounded-full'>start the project</div>
                <div className='w-10 h-10 border-[1px] border-zinc-400 flex justify-center items-center rounded-full'>
                    <span className='rotate-[45deg]'> <FaArrowUpLong/></span>
                   
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Landing

import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Eyes } from './components/Eyes'
import { Featured } from './components/Featured'
import { ThreeCards } from './components/ThreeCards'
import { Footer } from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { Card } from './components/Card'
import { Navbar1 } from './Navbar1'
import { Hero1 } from './components/Hero1'
import ParticlesComponent from './components/ParticlesComponent'
import ParticlesBackground from './ParticlesBackground'
import Spline1 from './Spline1'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function mouseFollow(dets) {
      document.querySelector('.mini-circle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    }

    window.addEventListener('mousemove', mouseFollow);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', mouseFollow);
    };
  }, []);

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen  bg-zinc-900 text-white'>
       <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <ThreeCards/>
      <Footer/>
     
     
    </div>

  )
  
}

export default App

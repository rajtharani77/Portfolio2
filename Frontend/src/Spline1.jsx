import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';

const Spline1 = () => {
  const onLoad = useCallback((spline) => {
    // You can access the spline instance here
    // spline.setZoom(0.5);
  }, []);

  return (
    <div className="w-[100vw] h-screen bg-gray-100 flex items-center justify-center">
     <div className='w-[60vw] h-full bg-[#FFDAB7] flex flex-col items-start justify-center px-20'>
  <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
    Hi, I'm <span className="text-blue-600">Harshit Sharma</span>
  </h1>
  <p className="text-xl text-gray-700 mt-6 max-w-md">
    A passionate <span className="font-semibold">MERN Stack Developer</span> crafting modern and interactive web experiences.
  </p>
  <button className="mt-8 px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
    View My Work
  </button>
</div>


      <Spline
        scene="https://prod.spline.design/Y-b0ze3DGvx4QMSb/scene.splinecode"
        onLoad={onLoad}
        className="w-[40vw] h-auto"
      />
    </div>
  );
};
export default Spline1;
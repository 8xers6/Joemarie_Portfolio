import React from 'react';
import sampleImage from './Assets/fbfb.jpeg'; 
import 'animate.css';

function AboutMe() {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div id="Aboutme" className="flex flex-col items-center justify-center min-h-screen bg-gray-200 pt-3 px-3  pb-12">
      <div className="text-center p-4">
        <div className="pb-12">
            <span className="text-yellow-500 text-5xl ">Development to </span>
            <span className="text-green-600 text-6xl "> Growth to </span>
            <span className="text-red-500 text-7xl "><b>Success</b></span>
        </div>
        <img
          src={sampleImage}
          alt="Joemarie Jacinto"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Hello, I'm <b>Joemarie Jacinto</b></h2>
          <p className="mt-2 text-gray-600">I just recently graduated from Pambayang Dalubhasaan ng Marilao.</p>
          <p className="mt-2 text-gray-600">I'm looking for a job to showcase my skills and talent.</p>
        </div>
      </div>
      <div className="p-4 flex flex-col sm:flex-row justify-center gap-2">
        <button
          onClick={() => handleScroll('Contactme')}
          className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
        >
          Contact Me
        </button>
        <button
          onClick={() => handleScroll('DownloadCV')}
          className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded "
        >
          Download My CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;

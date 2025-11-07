
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [subheadlineVisible, setSubheadlineVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeadlineVisible(true), 100);
    const timer2 = setTimeout(() => setSubheadlineVisible(true), 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative text-center z-10 px-4">
        <h1
          className={`text-4xl md:text-7xl font-extrabold text-white mb-4 transition-all duration-1000 ease-out motion-reduce:transition-none ${
            headlineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          Welcome to UOLI
          <br />
          <span className="text-yellow-400">Where Innovation Meets Excellence</span>
        </h1>
        <p
          className={`text-lg md:text-2xl text-gray-200 mb-8 transition-all duration-1000 ease-out delay-200 motion-reduce:transition-none ${
            subheadlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Empowering Future Leaders in Islamabad
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#admissions" className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            Apply Now
          </a>
          <a href="#about" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

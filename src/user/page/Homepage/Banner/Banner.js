// Carousel.js

import React, { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-23-1920x1200.jpg',
    'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-29-1920x1200.jpg',
    'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-25-1920x1200.jpg',
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative h-full">
      <div className="overflow-hidden w-full h-[737px] ">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
            >
              <img src={image} alt={`Slide ${index}`} className="w-full bg-cover bg-bottom object-cover bg-gradient-to-br" />

              <div className="absolute inset-0 flex justify-center items-center text-white ">
                  <div>
                  <h1 className="text-xl font-bold mt-3 mb-4 text=[#FFFFFF] text-center">A V E N U E</h1>
                  <span className='text-4xl p-8 text=[#FFFFFF] font-bold'>Clound Avenue & Fasion Street</span>
                  </div> 
                  
              </div>
              <div className='absolute inset-0 top-1/4 flex justify-center items-center'>
                  <button className=' bg-[#0000001A] text-[#FFFFFF] border border-[#FFFFFF] mt-[32px] px-4 py-2 rounded-full font-semibold hover:text-black hover:bg-white'>View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0000001A] text-[#FFFFFF] border border-[#FFFFFF] px-4 py-2 rounded-full ml-2  hover:text-black hover:bg-white"
      >
        <SlArrowLeft />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0000001A] text-[#FFFFFF] border border-[#FFFFFF] px-4 py-2 rounded-full mr-2  hover:text-black hover:bg-white"
      >
        <SlArrowRight />
      </button>
    </div>

  );
};

export default Carousel;

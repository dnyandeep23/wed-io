"use client";

import React, { useState, useEffect } from "react";

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-screen h-full   relative overflow-x-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 " : "opacity-0 "
            }`}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">शुभ विवाह</h1>
        <p className="text-xl mt-2">चि. सागर & चि. सौ. रंजना</p>
      </div>
    </div>
  );
};

export default CustomCarousel;

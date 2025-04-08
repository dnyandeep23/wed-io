"use client";

import React, { useState, useEffect } from "react";

const CustomCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`w-full h-full relative overflow-hidden`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
    </div>
  );
};

export default CustomCarousel;

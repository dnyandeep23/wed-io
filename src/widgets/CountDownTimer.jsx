"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimerMarathi() {
  const eventDate = new Date("2025-05-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-[#FAF3E0] py-8 px-4  shadow-md border-b border-t border-t-yellow-600 border-b-yellow-600 w-full max-w-screen mx-auto">
      {/* Title */}
      <h2 
        className="text-3xl md:text-5xl font-medium text-yellow-700 mb-2 text-center"
        style={{ fontFamily: "AMS-Vasudeva" }}
      >
        lagna saaehLyaacaI idnaa/k
      </h2>
      <p className="text-lg md:text-xl font-semibold text-gray-700">२० मे २०२५</p>
      <div className="w-16 h-[2px] bg-yellow-600 my-2"></div>

      {/* Countdown Timer (Responsive Grid) */}
      <motion.div 
        className="grid grid-cols-2 gap-4 md:flex md:gap-6 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TimeBox label="दिवस" value={timeLeft.days} />
        <TimeBox label="तास" value={timeLeft.hours} />
        <TimeBox label="मिनिटे" value={timeLeft.minutes} />
        <TimeBox label="सेकंद" value={timeLeft.seconds} />
      </motion.div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <motion.div 
      className="w-24 h-24 bg-yellow-700 text-white flex flex-col justify-center items-center rounded-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
    >
      <p className="text-3xl font-bold italic">{value < 10 ? `0${value}` : value}</p>
      <p className="text-sm uppercase">{label}</p>
    </motion.div>
  );
}

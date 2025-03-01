"use client";
import img1 from "@/assets/images/img1.jpg"; // Adjust the path if necessary
import Header from "@/components/Header"; // Adjust the path if necessary
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingInvitation() {
  const [rsvp, setRsvp] = useState(false);

  return (
    <div className="min-h-screen max-w-screen w-full bg-[#f8f1e4] text-[#5c3d2e] font-['Tiro Devanagari Marathi'] relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src={img1}
          alt="Wedding Image"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute top-0 left-0 w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

        {/* Header Over Image */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Wedding Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg font-medium tracking-widest uppercase pb-3 opacity-35"
          >
            आम्ही विवाह करत आहोत
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-6xl font-[Dancing Script] font-bold mt-2"
          >
            सागर <span className="text-[#FFD700]">&</span> रंजना
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg mt-5"
          >
            लोके मंगल कार्यालय, शिरगाव, देवगड, महाराष्ट्र 
             
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg mt-5"
          >
            २० मे २०२५ 
             
          </motion.p>
       
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="text-center py-10">
        <h3 className="text-3xl">विवाह सोहळ्यासाठी उलट गणना</h3>
        {/* <Countdown date={new Date("2025-05-20T00:00:00")} /> */}
      </div>

      {/* Event Details */}
      <div className="text-center py-10">
        <h3 className="text-3xl">कार्यक्रम वेळापत्रक</h3>
        <ul className="mt-4">
          <li>💐 हळदी समारंभ - १८ मे २०२५</li>
          <li>🎊 संगीत रात्री - १९ मे २०२५</li>
          <li>💍 लग्न समारंभ - २० मे २०२५</li>
        </ul>
      </div>

      {/* RSVP Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="block mx-auto mt-10 px-6 py-2 bg-[#5c3d2e] text-white rounded-lg"
        onClick={() => setRsvp(true)}
      >
        उपस्थिती नोंदवा
      </motion.button>

      {/* RSVP Confirmation */}
      {rsvp && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-5 text-lg"
        >
          आपल्या उपस्थितीची नोंद केली गेली! विवाह सोहळ्यात भेटूया.
        </motion.div>
      )}
    </div>
  );
}

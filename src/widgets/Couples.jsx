"use client";

import React from "react";
import { Noto_Sans_Devanagari } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import sagar_img from "@/assets/images/sagar_img.jpg";
import ranjana_img from "@/assets/images/ranjana_img.jpg";

const marathiFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

export default function Couples() {
  return (
    <div className={`flex flex-col items-center py-10 ${marathiFont.className}`}>
      <h2 className="text-4xl font-medium text-gray-700 mb-6"  style={{ fontFamily: "AMS-Vasudeva" }}>vaYau-var paircaya</h2>

      <motion.div
        className="flex flex-col md:flex-row gap-10 md:gap-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Groom Card */}
        <Card 
          name="सागर रमेश डगरे"
          title="चि."
          address={`श्री. रमेश गणपत डगरे यांचे जेष्ठ सुपुत्र,\nमु. पो. सावडाव [डगरेवाडी], ता. कणकवली,\nजि. सिंधुदुर्ग`}
          imgSrc={sagar_img}
        />

        {/* Bride Card */}
        <Card 
          name="रंजना संजय लोके"
          title="चि. सौ. का."
          address={`श्री. संजय लोके यांची कन्या, मु. पो. शिरगांव, ता. देवगड, जि. सिंधुदुर्ग`}
          imgSrc={ranjana_img}
        />
      </motion.div>
    </div>
  );
}

function Card({ name, title, address, imgSrc }) {
  return (
    <motion.div 
      className="h-[30rem]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-80 rounded-lg">
        {/* Image Container with Hover Effect */}
        <motion.div 
          className="h-96 rounded-lg bg-red-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute right-0 top-0 w-full h-full z-10 rounded-lg bg-black/40"></div>

        {/* Info Card */}
        <div className="absolute -bottom-20 left-0 w-full flex z-30 justify-center px-4 text-center">
          <div className="w-[97%] bg-white shadow-lg p-4 rounded relative">
            <h3 className="text-2xl font-bold text-yellow-700">
              <span className="text-xl">
                {title} 
                {title === "चि. सौ. का." && <br />} {/* ✅ Inserts a new line when title is "चि. सौ. का." */}
              </span> 
              {name}
            </h3>
            <p className="text-gray-700 mt-1 whitespace-pre-line">{address}</p>

            {/* Corner Borders */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-4 border-l-4 border-yellow-600 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-4 border-r-4 border-yellow-600 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-4 border-l-4 border-yellow-600 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-4 border-r-4 border-yellow-600 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

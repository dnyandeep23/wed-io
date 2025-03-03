"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Convert Google Drive file ID to direct link


export default function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageLinks, setImages] = useState([]);
  const fetchWithRetry = async (url, retries = 10, delay = 2000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        return await response.json(); // ✅ Success
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error.message);

        if (attempt === retries) throw error; // ❌ Fail after max attempts
        await new Promise((res) => setTimeout(res, delay)); // ⏳ Wait before retry
      }
    }
  };

  // Function to extract image ID for Google Drive


  // Function to get direct Google Drive link
  const getDirectGoogleDriveLink = (id) => {
    return `https://drive.google.com/uc?export=view&id=${id}`;
  };

  // Fetch Images from Different Domains
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchWithRetry(process.env.NEXT_PUBLIC_WEDDING_URL);
        const gallery = data?.record?.gallery || [];

        if (!Array.isArray(gallery)) throw new Error("Gallery is not an array");

        const newImageUrls = gallery.map((url) => {
          if (url.includes("drive.google.com")) {
            const fileId = extractFileId(url);
            return fileId ? getDirectGoogleDriveLink(fileId) : null;
          } else if (url.includes("upcdn.io")) {
            return url; // Directly use UpCDN links
          } else {
            return url; // Allow other domains
          }
        }).filter(Boolean);

        setImages((prevImages) => {
          const uniqueImages = new Set([...prevImages, ...newImageUrls]);
          return Array.from(uniqueImages);
        });
      } catch (error) {
        console.error("Final error fetching images:", error);
      }
    };

    if (process.env.NEXT_PUBLIC_WEDDING_URL) fetchImages(); // Fetch only if URL exists
  }, [process.env.NEXT_PUBLIC_WEDDING_URL]);

  const extractFileId = (url) => {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? match[1] : null;
  };
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  
    useEffect(() => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.scrollWidth);
      }
    }, [imageLinks]);

  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll distance per click
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-12  text-center relative">
      {/* Title */}
      <h2
        className="text-4xl font-medium text-gray-700 mb-6"
        style={{ fontFamily: "AMS-Vasudeva" }}
      >
        AaamacaI ga~larI
      </h2>

      {/* Scrollable Image Grid */}
      <div className="relative max-w-5xl mx-auto ">
        {/* Scrollable container */}
        <motion.div
          ref={scrollContainerRef}
          className="overflow-x-auto snap-x overflow-y-hidden scrollbar-hide flex space-x-4 px-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Grid with max 3 rows */}
          <div className="grid grid-rows-3 grid-flow-col snap-center gap-4 flex-shrink-0">
            {imageLinks.map((src, index) => (
              <ImageBox
                key={index}
                src={src}
                index={index}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </motion.div>

        {/* Left Scroll Button */}
        {containerWidth > 800 && (
          <div className="flex gap-2 absolute right-2 md:right-4 bottom-2 md:bottom-4 rounded shadow-md bg-black/40">
            <div className="">
              <button
                className=" text-white p-2 hover:border rounded hover:border-white/60 shadow-md hover:bg-[#5c3d2e]"
                onClick={() => scrollGallery("left")}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className=" text-white p-2 hover:border rounded hover:border-white/60 shadow-md hover:bg-[#5c3d2e]"
                onClick={() => scrollGallery("right")}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imageLinks.map((src) => ({
          src: src,
        }))}
        index={currentIndex}
        render={{
          slide: ({ slide }) => (
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={slide.src}
                alt="Gallery Image"
                width={800}
                height={600}
                className="w-auto h-auto max-w-full max-h-full"
                priority
              />
            </div>
          ),
        }}
      />
    </div>
  );
}

// Image Box Component with Hover Effect
function ImageBox({ src, index, handleOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer w-[180px] h-[150px] md:w-[200px] md:h-[170px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      onClick={() => handleOpen(index)}
    >
      {/* Image */}
      <Image
        src={src}
        width={200}
        height={170}
        alt="Gallery"
        className="w-full h-full object-cover"
        priority
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2"
        initial={{ opacity: 0, y: "100%" }}
        animate={
          isHovered ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span>चित्र पहा</span>
      </motion.div>
    </motion.div>
  );
}

'use client'
import { useState, useRef } from "react";
import img1 from "@/assets/images/img1.JPG";
import img2 from "@/assets/images/img2.jpg";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import { Noto_Sans_Devanagari } from "next/font/google";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Couples from "@/widgets/Couples";
import CountdownTimer from "@/widgets/CountDownTimer";
import LoveGallery from "@/widgets/LoveGallery";
import Events from "@/widgets/Events";
import Footer from "@/widgets/Footer";
import Location from "@/widgets/Location";
import Modal from "@/components/Modal";
import CustomCarousel from "@/components/carousel";

const marathiFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

export default function WeddingInvitation() {
  const [rsvp, setRsvp] = useState(false);
  const couplesRef = useRef(null);
  const countdownRef = useRef(null);
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);
  const locationRef = useRef(null);
  const heroRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);

  // redirect("/maintenance");
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   const audio = document.getElementById("background-audio");

  //   const handleUserInteraction = () => {
  //     if (!isPlaying) {
  //       audio.play().catch((err) => console.log("Autoplay blocked:", err));
  //       setIsPlaying(true);
  //     }
  //   };

  //   document.addEventListener("click", handleUserInteraction, { once: true });

  //   return () => {
  //     document.removeEventListener("click", handleUserInteraction);
  //   };
  // }, [isPlaying]);

  // useEffect(() => {
  //   const handleScreenshot = () => {
  //     setShowWarning(true);
  //     setTimeout(() => setShowWarning(false), 3000); // Hide modal after 3 seconds
  //   };

  //   document.addEventListener("visibilitychange", () => {
  //     if (document.hidden) handleScreenshot();
  //   });

  //   return () => {
  //     document.removeEventListener("visibilitychange", handleScreenshot);
  //   };
  // }, []);

  

  const scrollToSection = (section) => {
    switch (section) {
      case "Couples":
        couplesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Countdown":
        countdownRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Gallery":
        galleryRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Events":
        eventsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Location":
        locationRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:heroRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-[#f9f6f0] cursor-pointer text-[#5c3d2e] relative overflow-hidden"
      ref={heroRef}
      // style={{ pointerEvents: "none" }}
    >
      {/* Screenshot Warning Modal */}
      {/* <audio
        id="background-audio"
        src="/path-to-your-song.mp3"
        preload="auto"
      ></audio> */}

      <Modal className="z-50" isOpen={rsvp} onClose={() => setRsvp(false)}>
        <iframe
          src="https://online.fliphtml5.com/dewef/jjsn/#p=1"
          className="w-full h-full rounded-lg"
          allowFullScreen
        ></iframe>
      </Modal>

      {showWarning && (
        <div className="fixed top-0 left-0 w-full h-full bg-red-900/80 flex items-center justify-center z-[100]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-red-500/30 p-6 rounded-lg text-center shadow-xl"
          >
            <p
              className={`${marathiFont.className} text-2xl text-red-900 font-bold`}
            >
              स्क्रीनशॉट घेणे परवानगी नाही!
            </p>
          </motion.div>
        </div>
      )}
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <CustomCarousel images={[img1, img2]} />
        </div>
        {/* <Image
          src={img1}
          alt="Wedding Image"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        /> */}
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

        {/* Header Over Image */}
        <div className="absolute top-0 left-0 w-full z-40">
          <Header scrollToSection={scrollToSection} />
        </div>

        {/* Wedding Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:opacity-90 transition-all ease-in-out duration-700 opacity-40 text-center text-white z-20 px-4 md:px-0">
          <div
            className={`${marathiFont.className} text-sm mt-20 md:mt-44 sm:text-base`}
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-300 font-medium uppercase pb-3 opacity-35"
            >
              सागराच्या लाटांवर प्रेमाची गाणी,
              <br />
              रंजनासोबत सुरुवात करतोय आयुष्याची नवी कहाणी!
            </motion.p>
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{ fontFamily: "AMS-Vasudeva" }}
            className="text-4xl sm:text-3xl md:text-5xl text-red-600 font-medium mt-2 md:mt-6 leading-[1.2]"
          >
            SauBaivavaah
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{ fontFamily: "AMS-Vasudeva" }}
            className="text-7xl sm:text-6xl md:text-8xl font-medium mt-4 leading-[1.2]"
          >
            saagar <span className="text-[#FFD700]">AaaiNa</span> r/janaa
          </motion.h1>

          <div className={`${marathiFont.className} text-sm sm:text-xl`}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-3 md:mt-5"
            >
              गौरी मंगल कार्यालय, असलदे, नांदगाव, कणकवली, महाराष्ट्र
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-1 md:mt-2 flex items-center justify-center"
            >
              <ChevronsLeft className="text-2xl" />{" "}
              <span className="text-xl">२० मे २०२५</span>
              <ChevronsRight className="text-2xl" />
            </motion.p>
          </div>
          <div className="flex flex-col items-center mt-10">
            {/* Scroll Down Text */}

            {/* Animated Mouse Icon */}
            <div className="relative w-6 h-10 border border-gray-200 rounded-full flex justify-center items-center">
              <motion.div
                className="w-2 h-2 bg-gray-100 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={couplesRef}>
        <Couples />
      </div>
      <div ref={countdownRef}>
        <CountdownTimer />
      </div>
      <div ref={galleryRef}>
        <LoveGallery />
      </div>
      <div ref={eventsRef}>
        <Events />
      </div>
      <div ref={locationRef}>
        <Location />
      </div>
      <Footer setRsvp={setRsvp} />
    </div>
  );
}

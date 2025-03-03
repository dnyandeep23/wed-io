import React, { useState , useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import haldi from "@/assets/images/haldi_img.jpg";
import wed from "@/assets/images/wed_img.jpeg";
import satya from "@/assets/images/satya_img.jpeg";
import { Noto_Sans_Devanagari } from "next/font/google";

const marathiFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

// const events = [
//   {
//     id: 1,
//     name: "हळदी समारंभ",
//     date: "१८ मे २०२५",
//     time: "संध्याकाळी ६:००",
//     image: haldi,
//     points: ["परंपरागत विधी", "संगीत आणि आनंद"],
//     bg: "bg-yellow-300/60",
//     circleColor: "from-yellow-200 to-yellow-500",
//   },
//   {
//     id: 2,
//     name: "विवाह सोहळा",
//     date: "२० मे २०२५",
//     time: "दुपारी १२:००",
//     image: wed,
//     points: ["परंपरागत विधी", "संगीत आणि आनंद"],
//     bg: "bg-pink-100/60",
//     circleColor: "from-pink-200 to-pink-400",
//   },
//   {
//     id: 3,
//     name: "सत्यनारायण महापूजा ",
//     date: "२२ मे २०२५",
//     time: "संध्याकाळी ४:००",
//     image: satya,
//     points: ["परंपरागत विधी"],
//     bg: "bg-green-300/60",
//     circleColor: "from-green-200 to-green-500",
//   },
// ];

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_WEDDING_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        console.log("Fetching wedding invitation data...");
        const data = await response.json();
        console.log(data);
        const invitationUrl = data?.record?.events;

        if (!invitationUrl) throw new Error("Events data not found");

        // Process each event and update its image URL
        const updatedEvents = invitationUrl.map((event) => {
          const fileId = extractFileId(event.image);
          return {
            ...event,
            image: fileId
              ? `https://drive.google.com/uc?export=download&id=${fileId}`
              : event.image,
          };
        });

        setEvents(updatedEvents);
        console.log("Updated Events:", updatedEvents);
      } catch (error) {
        console.error("Error fetching wedding invitation:", error);
      }
    };

    if (process.env.NEXT_PUBLIC_WEDDING_URL) fetchUrl();
  }, [process.env.NEXT_PUBLIC_WEDDING_URL]);

  const extractFileId = (url) => {
    const match = url?.match(/\/d\/([^/]+)/);
    return match ? match[1] : null;
  };

  return (
    <div
      className={`flex flex-col w-full items-center  py-10 px-4 ${marathiFont.className}`}
    >
      <h2
        className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center"
        style={{ fontFamily: "AMS-Vasudeva" }}
      >
        kayaQkXmaacaI @pareVaa
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Circular Event Card */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b ${event.circleColor}/20 shadow-lg`}
            >
              <Image
                src={event.image}
                alt={event.name}
                layout="fill"
                objectFit="cover"
              />

              {/* Event Info */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1/2 ${event.bg} rounded-b-full flex flex-col items-center justify-center  text-center shadow-md`}
                style={{
                  clipPath: "ellipse(100% 90% at 50% 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {event.name}
                </h3>
                <p className="text-base text-gray-700">
                  {event.date} | {event.time}
                </p>
                {event.points?.length > 0 && (
                  <ul className="text-sm text-gray-600 mt-1">
                    {event.points.map((point, index) => (
                      <li
                        key={index}
                        className="before:content-['🔸'] before:mr-1"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

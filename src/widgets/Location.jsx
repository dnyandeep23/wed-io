import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa6";
import msrtc from "@/assets/images/msrtc.png";
import Image from "next/image";
import { Route, Clock, House } from "lucide-react";

const Location = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 mt-24">
      <h1
        className="text-3xl font-bold mb-5"
        style={{ fontFamily: "AMS-Vasudeva" }}
      >
        ivavaah saaehLyaacae iOkaNa
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-start text-center  lg:text-start p-5 w-full max-w-5xl mb-12 h-auto bg-white rounded-lg shadow-lg mt-10">
        {/* Left Side: Address */}
        <div className="w-full lg:w-[40%] p-5">
          <h2 className="text-lg font-bold mt-5 lg:mt-16 mb-2 flex justify-center lg:justify-start lg:ml-6 items-center gap-2">
            विवाह स्थळाचे ठिकाण
          </h2>
          <p className="lg:ml-6 text-base">
            गौरी मंगल कार्यालय, असलदे,
            <br /> नांदगाव, कणकवली,
            <br /> महाराष्ट्र - ४१६६०२
          </p>

          {/* Transport Details */}
          <div className="mt-10 lg:mt-14 flex flex-row items-center justify-center lg:justify-start gap-1 md:gap-2">
            {/* Devgad Bus Station */}
            <div className="flex flex-col items-center w-14 md:w-16 shrink-0">
              <Image src={msrtc} alt="msrtc bus" width={30} />
              <p className="text-[8px] md:text-[10px] mt-1 text-center">
                देवगड बस स्थानक
              </p>
            </div>

            {/* Distance & Time */}
            <div className="relative flex flex-col items-center shrink-0">
              <div className="w-16 h-0.5 bg-black"></div>
              <div className="absolute -top-6 bg-yellow-200/60 rounded p-1 text-[8px] md:text-[9px] flex items-center gap-1">
                <Route size={10} /> <p>१४ कि. मी.</p>
              </div>
              <div className="absolute -bottom-6 bg-yellow-200/60 rounded p-1 text-[7px] md:text-[8px] flex items-center gap-1">
                <Clock size={10} /> <p>२०-२५ मिनिटे</p>
              </div>
            </div>

            {/* Gauri Mangal Karyalay */}
            <div className="flex flex-col items-center w-14 md:w-16 shrink-0">
              <FaMapPin size={25} className="text-red-700" />
              <p className="text-[8px] md:text-[10px] mt-1 text-center">
                गौरी मंगल कार्यालय
              </p>
            </div>

            {/* Distance & Time */}
            <div className="relative flex flex-col items-center shrink-0">
              <div className="w-16 h-0.5 bg-black"></div>
              <div className="absolute -top-6 bg-yellow-200/60 rounded p-1 text-[8px] md:text-[9px] flex items-center gap-1">
                <Route size={10} /> <p>३० कि. मी.</p>
              </div>
              <div className="absolute -bottom-6 bg-yellow-200/60 rounded p-1 text-[7px] md:text-[8px] flex items-center gap-1">
                <Clock size={10} /> <p>३५-४० मिनिटे</p>
              </div>
            </div>

            {/* Kankavli Bus Station */}
            <div className="flex flex-col items-center w-14 md:w-16 shrink-0">
              <Image src={msrtc} alt="msrtc bus" width={30} />
              <p className="text-[8px] md:text-[10px] mt-1 text-center">
                कणकवली बस स्थानक
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Google Map (Iframe) */}
        <div className="w-full lg:w-[60%] p-5 border border-gray-300 h-96 lg:h-[450px] xl:h-[500px] rounded-lg">
          {hasError ? (
            <div className="w-full h-full flex justify-center items-center bg-gray-100 border border-gray-300 rounded-lg">
              <p className="text-lg text-red-600 font-bold">
                मॅप लोड करत असताना काहीतरी समस्या आली आहे. कृपया पुन्हा प्रयत्न
                करा.
              </p>
            </div>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7173868512764!2d73.6617224!3d16.3883528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc03b2ea62dbfe7%3A0x618126f543d3ff69!2sGauri%20Mangal%20Karyalay!5e0!3m2!1smr!2sin!4v1741031392599!5m2!1smr!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;

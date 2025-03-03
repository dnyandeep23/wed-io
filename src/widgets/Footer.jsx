import React, { useEffect, useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Download } from "lucide-react";
import Image from "next/image";
import gpay from "@/assets/images/gpay.svg";
import wed_invite from "@/assets/images/wed_invite.svg";

export default function Footer() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_WEDDING_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const invitationUrl = data?.record?.wed_invitation;

        if (!invitationUrl) throw new Error("Invitation URL not found");

        const fileId = extractFileId(invitationUrl);
        if (!fileId) throw new Error("Invalid Google Drive URL");

        const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        setUrl(directUrl);
      } catch (error) {
        console.error("Error fetching wedding invitation:", error);
      }
    };

    if (process.env.NEXT_PUBLIC_WEDDING_URL) fetchUrl();
  }, [process.env.NEXT_PUBLIC_WEDDING_URL]);

  const extractFileId = (url) => {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? match[1] : null;
  };

  return (
    <footer className="bg-gradient-to-br from-amber-200/70 via-amber-400/80 to-amber-600/90 text-white py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left QR Code */}
        <div className="hidden md:flex w-1/4 justify-center">
          <div className="bg-white p-4 w-56 rounded-xl shadow-lg">
            <Image src={gpay} alt="QR Code" className="w-full h-auto" />
            <p className="text-gray-900 text-sm text-center mt-2 font-medium">
              आपल्या गोड शुभेच्छांचा इथे स्वीकार केल्या जातील 😊😂😂
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center md:w-2/4 w-full">
          <h2
            className="text-2xl md:text-3xl text-gray-900 font-medium mb-3"
            style={{ fontFamily: "AMS-Vasudeva" }}
          >
            🌺 AaagaXhacae Aaama/PaNa 🌺
          </h2>
          <p className="text-lg font-semibold text-gray-700">
            "सर्वांनी यायचं हं..."
          </p>
          <p className="text-md text-gray-700">
            "वधू वरास शुभ आशिर्वाद देण्यासाठी प्रेमाने आमंत्रण"
          </p>

          {/* Contact Info */}
          <div className="flex flex-col text-md items-center gap-3 mt-4">
            <p className="flex items-start gap-2 text-gray-700 text-sm font-medium">
              <Phone size={20} /> +91 9167581568
            </p>
            <p className="flex items-start gap-2 text-gray-700 text-sm font-medium text-center">
              <MapPin size={20} /> सावडावं डगरेवाडी, ता कणकवली, जि सिंधुदुर्ग,
              महाराष्ट्र - ४१६६०२
            </p>
          </div>

          {/* QR Code for Mobile */}
          <div className="flex flex-col items-center md:hidden gap-4 mt-6">
            {[gpay, wed_invite].map((img, idx) => (
              <div key={idx} className="bg-white p-4 w-56 rounded-xl shadow-lg">
                <Image src={img} alt="QR Code" className="w-full h-auto" />
                <p className="text-gray-900 text-sm mt-2 text-center font-medium">
                  {idx === 0
                    ? "आपल्या गोड शुभेच्छांचा इथे स्वीकार केल्या जातील 😊😂😂"
                    : "विवाह पत्रिकेसाठी QR स्कॅन करा"}
                </p>
              </div>
            ))}
          </div>

          {/* Download Invitation Button */}
          <div className="mt-6">
            <a
              href={url}
              download
              className="bg-white text-amber-700 font-bold py-2 px-6 w-full max-w-xs mx-auto rounded-full flex items-center gap-2 justify-center text-base hover:bg-amber-100 transition duration-300 shadow-lg"
            >
              <Download size={20} /> विवाह पत्रिका डाउनलोड करा
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.instagram.com/sagd_28?igsh=MXdxdGhqbnJxeWJpNA=="
              className="text-yellow-900 hover:text-yellow-700 flex gap-3 items-center"
            >
              <Instagram size={26} /> Instagram
            </a>
          </div>
        </div>

        {/* Right QR Code */}
        <div className="hidden md:flex w-1/4 justify-center">
          <div className="bg-white p-4 rounded-xl w-56 shadow-lg">
            <Image src={wed_invite} alt="QR Code" className="w-full h-auto" />
            <p className="text-gray-900 text-sm mt-2 text-center font-medium">
              विवाह पत्रिकेसाठी QR स्कॅन करा
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6">
        <p className="text-gray-900 text-sm">
          © 2024 सर्व हक्क राखीव | प्रेमाने आमंत्रण ❤️
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Developed with ❤️ | Developed By Dnyandeep
        </p>
      </div>
    </footer>
  );
}

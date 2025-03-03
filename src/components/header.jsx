import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  Image as ImageIcon,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function Header({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { name: "मुख्यपृष्ठ", icon: Home, section: "Hero" },
    { name: "कार्यक्रम", icon: Calendar, section: "Events" },
    { name: "गॅलरी", icon: ImageIcon, section: "Gallery" },
    { name: "ठिकाण", icon: MapPin, section: "Location" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all ease-in-out duration-500 ${
        menuOpen ? "bg-white/70 text-black" : "bg-black/40 text-white"
      } hover:bg-white/70 hover:text-[#5c3d2e] shadow-md z-50`}
    >
      <div className="flex justify-between items-center py-2 px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={80} height={80} priority />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map(({ name, icon: Icon, section }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer relative"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => scrollToSection(section)}
            >
              <div className="flex flex-row gap-2 items-center pb-0.5">
                <Icon size={20} />
                <span className="text-sm font-serif">{name}</span>
              </div>

              {/* Animated Underline */}
              <motion.div
                className="h-0.5 bg-[#5c3d2e] mt-1 rounded-md"
                initial={{ width: 0 }}
                animate={hovered === name ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} className="text-white hover:text-[#5c3d2e]" />
          ) : (
            <Menu size={28} className="text-white hover:text-[#5c3d2e]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white/70 backdrop-blur-lg shadow-md min-h-screen fixed top-0 left-0 right-0 z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="absolute right-4 top-4 cursor-pointer hover:border rounded hover:border-[#5c3d2e]"
              onClick={() => setMenuOpen(false)}
            >
              <X
                size={28}
                className="text-[#5c3d2e]/40 hover:text-[#5c3d2e]/90"
              />
            </div>
            <div className="mt-14">
              {menuItems.map(({ name, icon: Icon, section }) => (
                <motion.div
                  key={name}
                  className="flex flex-col mt-6 items-center cursor-pointer relative"
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => scrollToSection(section)}
                >
                  <div className="flex flex-row gap-2 items-center pb-0.5">
                    <Icon size={20} />
                    <span className="text-sm font-serif">{name}</span>
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    className="h-0.5 bg-[#5c3d2e] mt-1 rounded-md"
                    initial={{ width: 0 }}
                    animate={
                      hovered === name ? { width: "100%" } : { width: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

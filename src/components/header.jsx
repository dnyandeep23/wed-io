import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Calendar, Image, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { name: "मुख्यपृष्ठ", icon: Home },
    { name: "कार्यक्रम", icon: Calendar },
    { name: "गॅलरी", icon: Image },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-white [#5c3d2e] opacity-20 hover:opacity-45 shadow-md z-50">
      <div className="flex justify-between items-center p-4 max-w-5xl mx-auto">
        {/* Logo / Title */}
        <h1 className=" text-xl font-semibold">सागर ❤️ रंजना</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer relative"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex gap-2 items-center pb-0.5">
                <Icon size={20} className="" />
                <span className="text-sm">{name}</span>
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
            <X size={28} className="text-[#5c3d2e]" />
          ) : (
            <Menu size={28} className="text-[#5c3d2e]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white bg-opacity-95 shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {menuItems.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 text-[#5c3d2e] cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close menu on selection
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Icon size={20} />
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

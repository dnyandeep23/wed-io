import { useEffect, useState, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Lightbox = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoading(true); // Show loader when switching images
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    resetZoom();
  };

  const resetZoom = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    if (zoom < 3) setZoom(zoom + 0.5);
  };

  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom - 0.5);
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setDragging(true);
      setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;

    setOffset({
      x: Math.max(-200, Math.min(newX, 200)), // Prevent extreme dragging
      y: Math.max(-200, Math.min(newY, 200)),
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative flex flex-col items-center w-full h-full overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 hover:text-red-500 text-white p-2"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Display with Loading */}
          <motion.div className="relative flex justify-center items-center w-full h-full">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="text-white animate-spin" size={48} />
              </div>
            )}
            <motion.img
              key={index} // Ensures React updates the image
              src={images[index].src}
              alt="Lightbox Image"
              className={`max-w-[90vw] max-h-[85vh] transition-transform cursor-${
                zoom > 1 ? "grab" : "default"
              } ${loading ? "hidden" : "block"}`}
              style={{
                transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
                cursor: zoom > 1 ? "grab" : "default",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onLoad={() => setLoading(false)}
              draggable={false}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </motion.div>

          {/* Zoom Controls */}
          {/* <div className="absolute bottom-4  flex items-center space-x-4 bg-gray-800 p-2 rounded-lg">
            <button onClick={handleZoomOut} className="text-white p-2">
              <Minus size={24} />
            </button>
            <span className="text-white">{zoom.toFixed(1)}x</span>
            <button onClick={handleZoomIn} className="text-white p-2">
              <Plus size={24} />
            </button>
          </div> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;

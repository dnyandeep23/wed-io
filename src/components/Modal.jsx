import React from 'react'

export default function Modal({ isOpen, onClose, children }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl h-[80vh] sm:h-[85vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-200 hover:bg-gray-300 px-2 py-1 rounded hover:text-gray-900 text-lg"
        >
          ✖
        </button>

      
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imagen1 from "../assets/img/imagen1.jpg";
import imagen2 from "../assets/img/imagen2.jpg";
import imagen3 from "../assets/img/imagen3.jpg";

// Usamos .src para convertir cada import en un string
const images = [
  imagen1.src,
  imagen2.src,
  imagen3.src,
];

export default function ImageViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button
        className="absolute left-2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={prevImage}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={nextImage}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

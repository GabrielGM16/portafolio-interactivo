"use client"

import { motion } from "framer-motion"

export default function Desktop() {
  return (
    <div className="h-full p-4">
      <motion.h1
        className="text-4xl font-bold text-center mt-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Bienvenido a mi portafolio interactivo
      </motion.h1>
    </div>
  )
}


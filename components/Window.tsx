"use client"

import type React from "react"

import { Rnd } from "react-rnd"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface WindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
}

export default function Window({ title, children, onClose }: WindowProps) {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 400,
      }}
      minWidth={200}
      minHeight={200}
      bounds="window"
    >
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg flex flex-col h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between bg-gray-700 p-2 rounded-t-lg">
          <h2 className="text-sm font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </motion.div>
    </Rnd>
  )
}


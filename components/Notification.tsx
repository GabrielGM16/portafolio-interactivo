"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface NotificationProps {
  message: string
}

export default function Notification({ message }: NotificationProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button className="text-gray-400 hover:text-white">
          <X size={18} />
        </button>
      </div>
    </motion.div>
  )
}


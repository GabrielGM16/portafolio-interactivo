"use client"

import { motion } from "framer-motion"
import { Folder, Terminal, Image, Video, Menu, User } from "lucide-react"
import React from "react"

interface DockProps {
  onOpenFileSystem: () => void
  onOpenTerminal: () => void
  onOpenImageViewer: () => void
  onOpenVideoPlayer: () => void
  onToggleStartMenu: () => void
  onOpenAboutMe: () => void
}

interface DockIconProps {
  icon: React.ElementType
  onClick: () => void
  label: string
}

export default function Dock({
  onOpenFileSystem,
  onOpenTerminal,
  onOpenImageViewer,
  onOpenVideoPlayer,
  onToggleStartMenu,
  onOpenAboutMe,
}: DockProps) {
  return (
    <motion.div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-full p-2 flex space-x-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
    >
      <DockIcon icon={Menu} onClick={onToggleStartMenu} label="Start Menu" />
      <DockIcon icon={Folder} onClick={onOpenFileSystem} label="File System" />
      <DockIcon icon={Terminal} onClick={onOpenTerminal} label="Terminal" />
      <DockIcon icon={Image} onClick={onOpenImageViewer} label="Image Viewer" />
      <DockIcon icon={Video} onClick={onOpenVideoPlayer} label="Video Player" />
      <DockIcon icon={User} onClick={onOpenAboutMe} label="About Me" /> {/* Nuevo botón para About Me */}
    </motion.div>
  )
}

function DockIcon({ icon: Icon, onClick, label }: DockIconProps) {
  return (
    <motion.button
      className="flex flex-col items-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <div className="bg-gray-700 p-3 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.button>
  )
}

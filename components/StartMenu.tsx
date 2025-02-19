"use client"

import { motion } from "framer-motion"
import { Folder, Terminal, Image, Video, User } from "lucide-react"

interface StartMenuProps {
  onClose: () => void
  onOpenWindow: (window: string) => void
}

export default function StartMenu({ onClose, onOpenWindow }: StartMenuProps) {
  const menuItems = [
    { name: "File System", icon: Folder, window: "fileSystem" },
    { name: "Terminal", icon: Terminal, window: "terminal" },
    { name: "Image Viewer", icon: Image, window: "imageViewer" },
    { name: "Video Player", icon: Video, window: "videoPlayer" },
    { name: "About Me", icon: User, window: "aboutMe" },
  ]

  return (
    <motion.div
      className="absolute bottom-16 left-4 bg-gray-800 rounded-lg shadow-lg p-4 w-64"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      {menuItems.map((item) => (
        <motion.button
          key={item.name}
          className="flex items-center w-full p-2 hover:bg-gray-700 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onOpenWindow(item.window)
            onClose()
          }}
        >
          <item.icon className="mr-2" size={18} />
          {item.name}
        </motion.button>
      ))}
    </motion.div>
  )
}


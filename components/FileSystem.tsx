"use client"

import { Folder, File } from "lucide-react"
import { motion } from "framer-motion"

interface FileSystemItemProps {
  name: string
  type: "folder" | "file"
  url?: string
  children?: FileSystemItemProps[]
}

// Ejemplo con enlaces a GitHub
const projects: FileSystemItemProps[] = [
  {
    name: "Project Front-End",
    type: "folder",
    url: "https://github.com/GabrielGM16/front_global_aw",
    children: [
      {
        name: "README.md",
        type: "file",
        url: "https://github.com/GabrielGM16/front_global_aw/blob/master/README.md"
      }
    ],
  },
  {
    name: "Project Back-End",
    type: "folder",
    url: "https://github.com/GabrielGM16/back_global_aw",
    children: [
      {
        name: "README.md",
        type: "file",
        url: "https://github.com/GabrielGM16/back_global_aw/blob/main/README.md"
      }
    ],
  },
  {
    name: "About.txt",
    type: "file",
  },
]

interface FileSystemProps {
  onSelectProject: (project: string) => void
}

export default function FileSystem({ onSelectProject }: FileSystemProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">File System</h2>
      <ul>
        {projects.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FileSystemItem item={item} onSelect={onSelectProject} />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

interface FileSystemItemComponentProps {
  item: FileSystemItemProps
  onSelect: (name: string) => void
}

function FileSystemItem({ item, onSelect }: FileSystemItemComponentProps) {
  const handleClick = () => {
    if (item.url) {
      // Abre el enlace en otra pestaña
      window.open(item.url, "_blank")
    } else {
      // Lógica original
      onSelect(item.name)
    }
  }

  return (
    <motion.div className="mb-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <button
        className="flex items-center text-left w-full hover:bg-gray-700 p-1 rounded"
        onClick={handleClick}
      >
        {item.type === "folder" ? <Folder className="mr-2" /> : <File className="mr-2" />}
        {item.name}
      </button>
      {item.children && (
        <ul className="ml-4 mt-1">
          {item.children.map((child) => (
            <FileSystemItem key={child.name} item={child} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </motion.div>
  )
}

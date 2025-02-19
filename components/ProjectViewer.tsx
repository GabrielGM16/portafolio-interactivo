"use client"

import { motion } from "framer-motion"

export default function ProjectViewer({ project }: { project: string }) {
  return (
    <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <h2 className="text-2xl font-bold mb-4">{project}</h2>
      <motion.div
        className="bg-gray-700 p-4 rounded"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <p>This is a placeholder for the content of {project}.</p>
        <p>You can add more detailed information about each project here.</p>
      </motion.div>
    </motion.div>
  )
}


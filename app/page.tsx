"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Desktop from "../components/Desktop"
import Dock from "../components/Dock"
import Window from "../components/Window"
import FileSystem from "../components/FileSystem"
import Terminal from "../components/Terminal"
import ProjectViewer from "../components/ProjectViewer"
import ImageViewer from "../components/ImageViewer"
import VideoPlayer from "../components/VideoPlayer"
import StartMenu from "../components/StartMenu"
import Notification from "../components/Notification"
import AboutMe from "../components/AboutMe"

export default function Portfolio() {
  const [windows, setWindows] = useState<{ [key: string]: boolean }>({
    fileSystem: false,
    terminal: false,
    project: false,
    imageViewer: false,
    videoPlayer: false,
    aboutMe: false,
  })
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [notifications, setNotifications] = useState<string[]>([])

  const toggleWindow = (window: string) => {
    setWindows((prev) => ({ ...prev, [window]: !prev[window] }))
  }

  const openProject = (project: string) => {
    setActiveProject(project)
    toggleWindow("project")
  }

  const addNotification = (message: string) => {
    setNotifications((prev) => [...prev, message])
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1))
    }, 5000)
  }

  useEffect(() => {
    // Simulate receiving notifications
    const notificationMessages = [
      "Welcome to your interactive portfolio!",
      "New project added: Check it out!",
      "Don't forget to update your resume.",
    ]

    notificationMessages.forEach((message, index) => {
      setTimeout(() => addNotification(message), (index + 1) * 10000)
    })
  }, []) // Removed addNotification from dependencies

  return (
    <motion.div
      className="h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Desktop />

      <AnimatePresence>
        {windows.fileSystem && (
          <Window key="fileSystem" title="File System" onClose={() => toggleWindow("fileSystem")}>
            <FileSystem onSelectProject={openProject} />
          </Window>
        )}

        {windows.terminal && (
          <Window key="terminal" title="Terminal" onClose={() => toggleWindow("terminal")}>
            <Terminal openProject={openProject} />
          </Window>
        )}

        {windows.project && activeProject && (
          <Window key="project" title={activeProject} onClose={() => toggleWindow("project")}>
            <ProjectViewer project={activeProject} />
          </Window>
        )}

        {windows.imageViewer && (
          <Window key="imageViewer" title="Image Viewer" onClose={() => toggleWindow("imageViewer")}>
            <ImageViewer />
          </Window>
        )}

        {windows.videoPlayer && (
          <Window key="videoPlayer" title="Video Player" onClose={() => toggleWindow("videoPlayer")}>
            <VideoPlayer />
          </Window>
        )}

{windows.aboutMe && ( // <-- Agregar esta condición
    <Window key="aboutMe" title="About Me" onClose={() => toggleWindow("aboutMe")}>
      <AboutMe />
    </Window>
  )}
      </AnimatePresence>

      <Dock
        onOpenFileSystem={() => toggleWindow("fileSystem")}
        onOpenTerminal={() => toggleWindow("terminal")}
        onOpenImageViewer={() => toggleWindow("imageViewer")}
        onOpenVideoPlayer={() => toggleWindow("videoPlayer")}
        onToggleStartMenu={() => setShowStartMenu(!showStartMenu)}
        onOpenAboutMe={() => toggleWindow("aboutMe")}
      />

      {showStartMenu && <StartMenu onClose={() => setShowStartMenu(false)} onOpenWindow={toggleWindow} />}

      <div className="fixed top-4 right-4 space-y-2">
        <AnimatePresence>
          {notifications.map((notification, index) => (
            <Notification key={index} message={notification} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}


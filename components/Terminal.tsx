"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface TerminalProps {
  openProject: (project: string) => void
}

export default function Terminal({ openProject }: TerminalProps) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>(["Bienvenido a la terminal!"])

  const handleCommand = (cmd: string) => {
    const newOutput = [...output, `$ ${cmd}`]
    const [command, ...args] = cmd.toLowerCase().split(" ")

    switch (command) {
      case "help":
        newOutput.push("Available commands: help, clear, ls, cat, open, run")
        break
      case "clear":
        setOutput([])
        return
      case "ls":
        newOutput.push("Project 1  Project 2  About.txt  script.sh")
        break
      case "cat":
        newOutput.push(args[0] === "about.txt" ? "This is a portfolio project showcasing my work." : `File not found: ${args[0]}`)
        break
      case "open":
        if (args[0] === "project1" || args[0] === "project2") {
          openProject(args[0])
          newOutput.push(`Opening ${args[0]}...`)
        } else {
          newOutput.push(`Project not found: ${args[0]}`)
        }
        break
      case "run":
        newOutput.push(args[0] === "script.sh" ? "Running script.sh...\nHello from the script!" : `Script not found: ${args[0]}`)
        break
      default:
        newOutput.push(`Command not found: ${command}`)
    }
    setOutput(newOutput)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) handleCommand(input)
    setInput("")
  }

  return (
    <div className="terminal-container">
      {/* Cuerpo de la Terminal con los colores personalizados */}
      <div className="terminal-body">
        {output.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={line.startsWith("$") ? "prompt" : "typed-command"}
          >
            {line}
          </motion.div>
        ))}

        {/* Línea de comandos */}
        <form onSubmit={handleSubmit} className="command-line">
          <span className="prompt">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

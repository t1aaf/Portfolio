"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Tariq Hassan Tiaaf</h3>
            <p className="text-gray-400">Full Stack Developer</p>
            <div className="flex space-x-6">
              <a href="https://github.com/Signature-Tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/_t1aaf/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/_t1aaf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-500">© {currentYear} Tariq Hassan Tiaaf. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}


"use client"

import { useState } from 'react'
import { motion, AnimatePresence} from "framer-motion"
import { Github, User, Briefcase, Code2, FolderKanban, Menu, Instagram, X } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "#about", icon: User, label: "About" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#skills", icon: Code2, label: "Skills" },
    { href: "#projects", icon: FolderKanban, label: "Projects" },
  ]

  const socialItems = [
    { href: "https://github.com/Signature-Tech", icon: Github },
    { href: "https://www.instagram.com/_t1aaf/", icon: Instagram },
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        margin: '0.5rem auto 0',
        maxWidth: '36rem',
        padding: '0 1rem'
      }}
    >
      <div className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-full shadow-lg">
        <div className="container mx-2 px-3 py-2 flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-1 flex-grow">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                  <item.icon className="h-4 w-4 mr-2" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          <Separator orientation="vertical" className="h-8 mx-2 bg-gray-400/50 hidden md:block" />
          <div className="hidden md:flex items-center space-x-1">
            {socialItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild className="text-gray-700 hover:text-gray-900">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="md:hidden mt-2 backdrop-blur-lg bg-white/30 border border-white/50 rounded-3xl shadow-lg overflow-hidden">
              <div className="py-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                      <item.icon className="h-4 w-4 mr-2" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                ))}
                <Separator className="my-2" />
                <div className="flex justify-center space-x-2 py-2">
                  {socialItems.map((item) => (
                    <Button key={item.href} variant="ghost" size="sm" asChild className="text-gray-700 hover:text-gray-900">
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}


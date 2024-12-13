"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import placeholder from "@/public/placeholder.png"
import Link from "next/link"

export function AboutMe() {
  return (
    <section id="about" className="relative min-h-screen flex items-center">
      <Image
        src={placeholder}
        alt="Background"
        fill
        className="object-cover object-center blur-sm"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">Tariq Hassan Tiaaf</h1>
            <h2 className="text-xl md:text-2xl text-gray-200">Full Stack Developer</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about creating seamless web experiences and solving complex problems through elegant code. With 2 years of hands-on experience, I specialize in crafting robust and scalable web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#experience">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore !
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


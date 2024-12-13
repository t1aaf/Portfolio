"use client"

import { motion } from "framer-motion"
import { Calendar } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import logo from "@/public/logo.jpg"

const experiences = [
  {
    date: "Future Aspirations - Next Steps",
    title: "Technology Exploration",
    description: "Enhancing expertise with Mordern Technology and AI integration.",
  },
  {
    date: "Current Expertise - Present",
    title: "Full Stack Developer",
    description: "Full Stack Web Development with Next JS",
  },
  {
    date: "Expanding Horizons - 2nd Year",
    title: "Advanced Frontend Kits",
    description: "Mastered responsive design, frameworks like React, and modern tools like Tailwind CSS.",
  },
  {
    date: "Foundation - 1st Year",
    title: "Joining the universe of Programming !",
    description: "Started my journey in web development, focusing on frontend technologies",
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">My Journey</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex items-center justify-center"
            >
              <Image src={logo} alt="Image" width={"500"} height={"500"} className="rounded-2xl"/>
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="backdrop-blur-lg bg-white/30 border-white/50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-gray-600 mr-2" />
                      <div className="text-sm text-gray-600">{experience.date}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                    <p className="text-gray-700">{experience.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Blocks, Database, Layout, Server } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    icon: Layout,
    title: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "text-blue-600",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Next Js",
    color: "text-green-600",
  },
  {
    icon: Database,
    title: "Databases",
    description: "PostgreSQL",
    color: "text-yellow-600",
  },
  {
    icon: Blocks,
    title: "Tools",
    description: "Git, VS Code",
    color: "text-orange-600",
  },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-lg bg-gray-50 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg ${skill.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.title}</h3>
                  <p className="text-gray-600 flex-grow">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


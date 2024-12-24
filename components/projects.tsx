"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import photoGallery from "@/public/photo-gallery.png"
import ProxyTeach from "@/public/proxyTeach.png"
import listify from "@/public/listify.png"

const projects = [
  {
    title: "Gallery",
    description: "A sleek and immersive photo gallery website",
    image: photoGallery,
    demoLink: "https://photo-gallery-pink-three.vercel.app/",
    codeLink: "https://github.com/Signature-Tech/photo-gallery",
  },
  {
    title: "ProxyTeach",
    description: "A school management website.",
    image: ProxyTeach,
    demoLink: "https://proxy-teach.vercel.app/",
    codeLink: "https://github.com/Signature-Tech/ProxyTeach",
  },
  {
    title: "Listify",
    description: "Stay organized and boost your productivity with our Todo web app!",
    image: listify,
    demoLink: "https://listlify.vercel.app/",
    codeLink: "https://github.com/Signature-Tech/Listlify",
  },
]

export function Projects() {
  const handleDemoClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handleCodeClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="min-h-screen p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-lg bg-white/80 border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between mt-auto">
                  <Button 
                    variant="outline" 
                    className="hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => handleDemoClick(project.demoLink)}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => handleCodeClick(project.codeLink)}
                  >
                    View Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


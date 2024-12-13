"use client"

import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
    >
      <motion.div
        className="text-4xl font-bold text-gray-800 relative text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome Signature Devs
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-blue-500 rounded-full"
            initial={{ 
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: 0,
              opacity: 1
            }}
            animate={{ 
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              scale: [0, 1, 0],
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}


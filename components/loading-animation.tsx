"use client"

import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, rgb(191 219 254), rgb(243 232 255), rgb(251 207 232))'
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
    >
      <motion.div
        style={{
          fontSize: '2.25rem',
          fontWeight: 'bold', 
          color: 'rgb(31 41 55)',
          position: 'relative',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome Signature Devs
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              height: '0.5rem',
              width: '0.5rem',
              backgroundColor: 'rgb(59 130 246)',
              borderRadius: '9999px'
            }}
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


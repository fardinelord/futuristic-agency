'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showWelcome ? (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent text-center"
        >
          Welcome to the Future
        </motion.h1>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold">We Build Brands for the New Era</h2>
          <p>Websites, SEO, Branding, Design & More</p>
        </motion.div>
      )}
    </>
  )
}
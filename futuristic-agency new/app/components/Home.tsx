'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

type HomeProps = {
  welcomeText: string;
  mainTitle: string;
  subtitle: string;
  gradient: string;
  isRtl?: boolean;
};

export default function Home({ welcomeText, mainTitle, subtitle, gradient, isRtl = false }: HomeProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col items-center justify-center p-4">
      <AnimatePresence>
        {showWelcome ? (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent text-center`}
          >
            {welcomeText}
          </motion.h1>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <h2 className="text-3xl font-bold mb-4">{mainTitle}</h2>
            <p className="mb-6">{subtitle}</p>
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
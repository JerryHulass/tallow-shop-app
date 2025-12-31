'use client';

import React, { useState } from 'react';
import { Menu, ArrowRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Setup Framer Motion Scroll Hooks
  const { scrollY } = useScroll();
  
  // 2. Map scroll position (0 to 600px) to a negative Y offset (0 to -100px)
  // This causes the image to move UP faster than the user scrolls, creating the overlap effect.
  const yRange = useTransform(scrollY, [0, 600], [0, -250]);
  const imageY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-gray-900 font-sans selection:bg-gray-100 overflow-x-hidden">
      
      {/* Fonts & Global Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-6 py-5 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-transparent transition-colors"
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.2"/>
              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {['Store', 'Blog', 'Our methods', 'Support'].map((item) => (
            <a key={item} href="#" className="hover:text-black transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 hover:border-gray-400 transition-all font-medium text-sm group">
            Shop
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-[73px] left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl z-30"
        >
           {['Store', 'Blog', 'Our methods', 'Support'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-black font-medium">
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center pt-16 md:pt-24 px-4 relative">
        
        {/* TEXT CONTENT LAYER (z-0: Behind image) */}
        <div className="relative z-0 flex flex-col items-center w-full max-w-4xl mx-auto">
          
          {/* Removed reviews/social proof section for simplicity */}

          {/* Headline Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-[5.5rem] text-center text-gray-900 mb-8 leading-[1] font-serif tracking-tight"
          >
            Made How God, <br/>
            <span className="text-gray-400">Intended To Be</span>
          </motion.h1>

          {/* Subheadline Animation */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-500 text-center max-w-lg mb-10 leading-relaxed font-medium"
          >
            Natural tools and curated products <br className="hidden sm:block"/>
            designed to elevate your lifestyle.
          </motion.p>

          {/* CTA Button Animation */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-9 py-4 rounded-full font-medium shadow-xl shadow-black/10 group mb-2 z-10 relative"
          >
            Store
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        <div>
          <motion.div 
            style={{ y: imageY }}
            className="w-full max-w-4xl mt-12 md:mt-16 lg:mt-20 px-4 z-10"
          >
            <img 
              src="/images/tallow1(2).png" 
              alt="Tallow Product" 
              className="w-full sm:w-3/5 h-auto rounded-3xl shadow-2xl shadow-black/20 mx-auto"
            />
          </motion.div>
        </div>


      </main>

      {/* Content Section to allow scrolling */}
      <section className="w-full bg-[#FDFBF7] py-0 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-1 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-6 inline-block">About us</span>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                "Zero additives. Zero confusion. Just pure, intentional nourishment."
              </h2>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;
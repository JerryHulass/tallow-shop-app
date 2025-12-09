"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import TallowJar from '../3d/TallowJar';

const Hero = () => (
  <section className="relative min-h-screen pt-20 sm:pt-3 flex flex-col md:flex-row items-center overflow-hidden">
    
    {/* Text Content (Left) */}
    <div className="w-full md:w-1/2 px-6 md:pl-24 lg:pl-32 pt-12 md:pt-0 z-10 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-stone-200 bg-white/50 mb-8 animate-fade-in-up">
        <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#7D3E42' }}>New Launch</span>
        <span className="mx-2 h-3 w-[1px] bg-stone-300"></span>
        <span className="text-xs text-stone-500">Whipped Tallow Cream</span>
      </div>
      
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6" style={{ color: '#2F3B32' }}>
        Skincare, as <br/>
        <span className="italic font-light">God</span> intended.
      </h1>
      
      <p className="text-lg md:text-xl font-light max-w-md mb-10 opacity-80" style={{ color: '#2F3B32' }}>
        Reclaim your skin's natural radiance with 100% grass-fed, biologically compatible tallow. No fillers, just nourishment.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button 
          className="px-8 py-4 rounded-full text-white text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          style={{ backgroundColor: '#7D3E42' }}
        >
          Shop Now
        </button>
        <button 
          className="px-8 py-4 rounded-full border border-stone-300 text-lg font-medium hover:bg-stone-100 transition-colors"
          style={{ color: '#2F3B32' }}
        >
          Read the Story
        </button>
      </div>
      
    </div>

    {/* 3D Canvas Area (Right) */}
    <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FDFBF7] z-10 pointer-events-none md:block hidden" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10 pointer-events-none md:hidden block" />
      
      <Canvas shadows dpr={[1, 2]} className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <TallowJar position={[0, -0.5, 0]} />
        </Suspense>
        
        {/* User can rotate the jar */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  </section>
);

export default Hero;
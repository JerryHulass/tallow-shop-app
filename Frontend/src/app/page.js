"use client";

import React from 'react';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import CardSection from '../components/layout/CardSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen selection:bg-[#7D3E42] selection:text-white font-sans">
      <Navbar />
      <Hero />
      <CardSection />
      <Footer />
    </main>
  );
}
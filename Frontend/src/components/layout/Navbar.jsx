"use client";

import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../lib/cartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get cart count from Zustand store
  const cartCount = useCartStore((state) => state.items.length);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/60 backdrop-blur-md py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Mobile: Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#2F3B32] hover:bg-stone-100 rounded-full transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#2F3B32]">
            Intended
          </span>
        </div>

        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {[{ label: 'Our Story', href: '#' }, { label: 'Products', href: '#' }].map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-[#2F3B32]/70 hover:text-[#2F3B32] transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Right: Cart Button */}
        <div className="hidden md:flex items-center">
          <button className="relative flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#2F3B32] text-[#2F3B32] font-medium text-sm hover:bg-[#2F3B32] hover:text-white transition-all duration-300">
            <ShoppingBag size={20} />
            Cart
            {/* Dynamic cart count badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7D3E42] text-white text-xs rounded-full px-2 py-0.5 font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Right: Cart Icon */}
        <div className="md:hidden">
          <div className="relative">
            <ShoppingBag size={24} className="text-[#2F3B32]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7D3E42] text-white text-xs rounded-full px-2 py-0.5 font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-stone-100 p-6 space-y-4 shadow-xl">
          {[{ label: 'Our Story', href: '#' }, { label: 'Products', href: '#' }].map((item) => (
            <a key={item.label} href={item.href} className="block text-xl font-serif text-[#2F3B32] py-2 border-b border-stone-100 last:border-0">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
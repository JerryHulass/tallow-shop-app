import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <div className="absolute inset-0 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-stone-200/50" />
    <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu color="#2F3B32" />
      </div>

      {/* Brand Logo */}
      <div className="flex-1 text-center md:text-left">
        <span className="font-serif text-3xl tracking-tight font-medium" style={{ color: '#2F3B32' }}>
          Intended
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-12">
        {['Shop', 'Our Story', 'Ingredients', 'Journal'].map((link) => (
          <a key={link} href="#" className="text-sm font-medium hover:opacity-60 transition-opacity" style={{ color: '#2F3B32' }}>
            {link}
          </a>
        ))}
      </div>

      {/* Cart Actions */}
      <div className="flex items-center justify-end md:ml-12">
        <button className="relative p-2 hover:bg-stone-100 rounded-full transition-colors">
          <ShoppingBag size={22} color="#2F3B32" />
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: '#7D3E42' }}>
            1
          </span>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
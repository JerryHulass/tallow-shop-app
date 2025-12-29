import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 px-6 border-t border-[#2F3B32]/10 bg-[#FDFBF7]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      
      <div className="text-center md:text-left">
        <span className="font-serif text-2xl font-bold text-[#2F3B32]">Intended</span>
        <p className="text-sm mt-2 text-[#2F3B32]/60">© 2025 Intended Skincare. All rights reserved.</p>
      </div>
      
      <div className="flex gap-8 text-sm font-medium text-[#2F3B32]">
        <a href="#" className="hover:text-[#7D3E42] transition-colors">Privacy</a>
        <a href="#" className="hover:text-[#7D3E42] transition-colors">Terms</a>
        <a href="#" className="hover:text-[#7D3E42] transition-colors">Contact</a>
      </div>

      <div className="flex gap-4">
        <button className="p-2 text-[#2F3B32] hover:text-[#7D3E42] transition-colors">
          <Instagram size={20} />
        </button>
        <button className="p-2 text-[#2F3B32] hover:text-[#7D3E42] transition-colors">
          <Facebook size={20} />
        </button>
      </div>

    </div>
  </footer>
);

export default Footer;
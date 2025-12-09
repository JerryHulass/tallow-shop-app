const Footer = () => (
  <footer className="py-12 px-6 border-t border-stone-200 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="font-serif text-2xl font-bold" style={{ color: '#2F3B32' }}>Intended</span>
        <p className="text-sm mt-2 opacity-60">© 2025 Intended Skincare.</p>
      </div>
      
      <div className="flex gap-8 text-sm font-medium" style={{ color: '#2F3B32' }}>
        <a href="#" className="hover:opacity-60">Privacy</a>
        <a href="#" className="hover:opacity-60">Terms</a>
        <a href="#" className="hover:opacity-60">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
 'use client';
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-light/30 backdrop-blur" : "bg-light"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-dark">Katie Mindset Coach</a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-darker hover:text-dark">About</a>
            <a href="#videos" className="text-sm text-darker hover:text-dark">Videos</a>
            <a href="#workshops" className="text-sm text-darker hover:text-dark">Workshops</a>
            <a href="#resources" className="text-sm text-darker hover:text-dark">Resources</a>
            <a href="#contact" className="text-sm text-darker hover:text-dark">Contact</a>
            <a href="#subscribe" className="text-sm text-dark font-medium">Subscribe</a>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md bg-light">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h14M3 10h14M3 14h14" stroke="#7f1d1d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-dark rounded-lg shadow-lg py-3 px-4 text-light">
          <a href="#about" className="block py-2 text-sm" onClick={() => setOpen(false)}>About</a>
          <a href="#videos" className="block py-2 text-sm" onClick={() => setOpen(false)}>Videos</a>
          <a href="#workshops" className="block py-2 text-sm" onClick={() => setOpen(false)}>Workshops</a>
          <a href="#resources" className="block py-2 text-sm" onClick={() => setOpen(false)}>Resources</a>
          <a href="#contact" className="block py-2 text-sm" onClick={() => setOpen(false)}>Contact</a>
          <a href="#subscribe" className="block py-2 text-sm text-lighter font-medium" onClick={() => setOpen(false)}>Subscribe</a>
        </div>
      )}
    </div>
  );
}
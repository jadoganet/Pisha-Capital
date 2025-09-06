
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: "#portfolio", label: "Portafolio" },
  { href: "#market", label: "Mercado" },
  { href: "#strategy", label: "Estrategia" },
  { href: "#financials", label: "Finanzas" },
  { href: "#investment", label: "Inversión" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-primary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-white transition-colors hover:text-brand-light">
          Pisha Capital
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-brand-text font-medium transition-colors hover:text-white border-b-2 border-transparent hover:border-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#investment" className="hidden md:inline-block bg-brand-light text-brand-primary font-bold py-2 px-4 rounded-full transition-transform hover:scale-105">
          Invertir
        </a>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;

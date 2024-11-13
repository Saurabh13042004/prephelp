import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            PrepHelp
          </span>
          
          <div className="hidden md:flex space-x-8">
            {['Features', 'Experience', 'Contact', 'Login'].map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/90 backdrop-blur-md`}>
        <div className="px-4 py-2 space-y-2">
          {['Features', 'Experience', 'Contact', 'Login'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
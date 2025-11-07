import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['About', 'Programs', 'Admissions', 'Research', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-gray-800 shadow-lg h-16' : 'bg-transparent h-20'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-yellow-400">UOLI</a>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-yellow-400 transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>
          <a href="#admissions" className="bg-yellow-500 text-gray-900 font-bold py-2 px-5 rounded-full text-sm hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            Apply Now
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative w-8 h-8 focus:outline-none">
            <div className="absolute w-8 h-8 flex flex-col justify-around items-center">
              <span className={`block w-7 h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-white transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl hover:text-yellow-400 transition-colors duration-300">
              {link}
            </a>
          ))}
          <a href="#admissions" onClick={() => setIsMenuOpen(false)} className="bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full text-2xl hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
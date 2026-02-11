// components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';           // or your router's Link
import { Send, Headphones, LogIn, Menu, X } from 'lucide-react';
import pineappleImg from '../assets/pine_apple.png';


const MarketHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header 
        className="
          sticky top-0 z-50 
          bg-[var(--color-mheader)] 
          py-4 px-5 sm:px-6 md:px-8 
          flex items-center justify-between
          border-b border-gray-800/40 backdrop-blur-sm
        "
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/src/assets/pine_apple.png" 
            alt="Punch Logo" 
            className="h-9 sm:h-10 md:h-11"
          />
        </Link>

        {/* Desktop / Tablet links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium">
          <Link 
            to="https://t.me/mvpwins" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors"
          >
            <Send size={17} /> Telegram
          </Link>

          <Link 
            to="/support" 
            className="flex items-center gap-2 hover:text-gray-200 transition-colors"
          >
            <Headphones size={17} /> Support
          </Link>

          <Link 
            to="/login" 
            className="
              flex items-center gap-2 
              px-5 py-2 rounded-lg
              bg-gradient-to-r from-indigo-600 to-purple-600 
              hover:from-indigo-500 hover:to-purple-500
              text-white font-semibold
              transition-all duration-300 shadow-sm hover:shadow-md
            "
          >
            <LogIn size={17} /> Login
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-gray-200 p-2 -mr-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-sm 
          transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeMenu}
      >
        <div 
          className={`
            absolute right-0 top-0 h-full w-4/5 max-w-xs 
            bg-gradient-to-b from-gray-900 to-black 
            border-l border-gray-800/60
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={e => e.stopPropagation()}
        >
          {/* Header inside menu */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
            <img 
              src={pineappleImg} 
              alt="Logo" 
              className="h-10"
            />
            <button 
              onClick={closeMenu}
              className="text-gray-300 hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex flex-col p-6 gap-6 text-lg font-medium">
            <Link 
              to="https://t.me/mvpwins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-colors"
              onClick={closeMenu}
            >
              <Send size={22} className="text-teal-400" />
              Telegram
            </Link>

            <Link 
              to="/support"
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-colors"
              onClick={closeMenu}
            >
              <Headphones size={22} className="text-blue-400" />
              Support
            </Link>

            <Link 
              to="/login"
              className="
                mt-6 mx-2 py-4 px-6 rounded-xl text-center font-semibold text-lg
                bg-gradient-to-r from-indigo-600 to-purple-600 
                hover:from-indigo-500 hover:to-purple-500
                shadow-lg hover:shadow-purple-500/20
                transition-all duration-300
              "
              onClick={closeMenu}
            >
              <div className="flex items-center justify-center gap-3">
                <LogIn size={22} />
                Login
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MarketHeader;
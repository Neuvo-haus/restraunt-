import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, UtensilsCrossed, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../types';
import { useTheme } from '../context/ThemeContext';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md py-4 shadow-lg border-b border-stone-200 dark:border-stone-800' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <Magnetic>
              <div className="bg-gold-500 p-2 rounded-full text-stone-950 group-hover:bg-stone-900 dark:group-hover:bg-white transition-colors duration-300">
                <UtensilsCrossed size={20} />
              </div>
            </Magnetic>
            <span className={`text-2xl font-serif font-bold tracking-wider transition-colors ${isScrolled ? 'text-stone-900 dark:text-white' : 'text-white'}`}>
              LUMIÈRE
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item.path} strength={15}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest font-medium transition-all duration-300 relative hover:text-gold-500 block p-2 ${
                      isActive ? 'text-gold-500' : isScrolled ? 'text-stone-600 dark:text-stone-300' : 'text-stone-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </Magnetic>
            ))}
            
            <Magnetic>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-gold-500 dark:text-stone-300' 
                    : 'text-stone-300 hover:text-white'
                }`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </Magnetic>

            <Magnetic>
              <NavLink
                to="/reservations"
                className="bg-gold-500 text-stone-950 px-6 py-2 text-sm uppercase tracking-wider font-bold hover:bg-stone-900 dark:hover:bg-white dark:hover:text-stone-950 hover:text-white transition-colors duration-300 rounded-sm block"
              >
                Book Table
              </NavLink>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
             <button 
              onClick={toggleTheme}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-stone-900 dark:text-white' : 'text-white'
              }`}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className={`transition-colors hover:text-gold-500 ${
                isScrolled ? 'text-stone-900 dark:text-white' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-50 dark:bg-stone-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-2xl font-serif transition-colors ${
                      isActive ? 'text-gold-500' : 'text-stone-800 dark:text-stone-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/reservations"
                className="mt-4 bg-gold-500 text-stone-950 px-8 py-3 text-lg font-bold uppercase tracking-wider rounded-sm w-full text-center"
              >
                Book a Table
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
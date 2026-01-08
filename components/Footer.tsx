import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">LUMIÈRE</h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            Experience the finest culinary artistry in an atmosphere of refined elegance.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-2 text-stone-600 dark:text-stone-400 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 123 Culinary Ave, New York
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (212) 555-0199
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> reservations@lumiere.com
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-4">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm">Opening Hours</h4>
          <ul className="space-y-2 text-stone-600 dark:text-stone-400 text-sm">
            <li className="flex justify-between">
              <span>Mon - Thu:</span>
              <span>5:00 PM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Fri - Sat:</span>
              <span>5:00 PM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sun:</span>
              <span>4:00 PM - 9:30 PM</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Lumière Dining. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-900 dark:hover:text-stone-300">Privacy Policy</a>
          <a href="#" className="hover:text-stone-900 dark:hover:text-stone-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
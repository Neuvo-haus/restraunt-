import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import { MenuItem } from '../types';

// Updated menu items with images
const MENU_ITEMS: MenuItem[] = [
  // Starters
  { id: '1', name: 'Oysters Rockefeller', description: 'Spinach, butter, herbs, breadcrumbs', price: 24, category: 'starters', image: 'https://picsum.photos/id/12/400/400' },
  { id: '2', name: 'Beef Carpaccio', description: 'Truffle oil, parmesan, arugula', price: 28, category: 'starters', image: 'https://picsum.photos/id/292/400/400' },
  { id: '3', name: 'Burrata & Heirloom', description: 'Basil pesto, balsamic glaze, pine nuts', price: 22, category: 'starters', isVegetarian: true, image: 'https://picsum.photos/id/493/400/400' },
  
  // Mains
  { id: '4', name: 'Herb-Crusted Lamb Rack', description: 'Fondant potato, seasonal greens, rosemary jus', price: 48, category: 'mains', image: 'https://picsum.photos/id/365/400/400' },
  { id: '5', name: 'Miso Black Cod', description: 'Bok choy, ginger dashi, crispy leeks', price: 45, category: 'mains', image: 'https://picsum.photos/id/429/400/400' },
  { id: '6', name: 'Wild Mushroom Risotto', description: 'Porcini dust, truffle butter, aged parmesan', price: 36, category: 'mains', isVegetarian: true, image: 'https://picsum.photos/id/1060/400/400' },
  { id: '7', name: 'Duck Breast', description: 'Cherry glaze, parsnip purée, hazelnuts', price: 42, category: 'mains', image: 'https://picsum.photos/id/225/400/400' },

  // Desserts
  { id: '8', name: 'Dark Chocolate Soufflé', description: 'Madagascan vanilla ice cream', price: 18, category: 'desserts', image: 'https://picsum.photos/id/431/400/400' },
  { id: '9', name: 'Lemon Basil Tart', description: 'Meringue, candied zest', price: 16, category: 'desserts', image: 'https://picsum.photos/id/425/400/400' },

  // Drinks (New Category)
  { id: '10', name: 'Smoked Old Fashioned', description: 'Bourbon, maple syrup, angostura, oak smoke', price: 22, category: 'drinks', image: 'https://picsum.photos/id/312/400/400' },
  { id: '11', name: 'Yuzu & Matcha Highball', description: 'Japanese gin, yuzu, matcha, soda', price: 19, category: 'drinks', image: 'https://picsum.photos/id/361/400/400' },
  { id: '12', name: 'Reserve Cabernet', description: 'Napa Valley, 2016', price: 28, category: 'drinks', image: 'https://picsum.photos/id/437/400/400' },
];

const CATEGORIES = [
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Cocktails & Wine' },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  
  // Hover Interaction State
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  
  // Spring physics for mouse follower
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300 relative">
        {/* Floating Image Component */}
        <motion.div 
          className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 hidden md:block overflow-hidden shadow-2xl rounded-sm"
          style={{ 
            x: mouseX, 
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%"
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: hoveredItem ? 1 : 0,
            scale: hoveredItem ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {hoveredItem && (
               <motion.img
                 key={hoveredItem.id}
                 src={hoveredItem.image}
                 alt={hoveredItem.name}
                 className="w-full h-full object-cover"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.2 }}
               />
            )}
          </AnimatePresence>
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Savor" title="Seasonal Menu" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-stone-200 dark:border-stone-800 pb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative text-lg uppercase tracking-wider pb-4 transition-colors ${
                  activeCategory === cat.id ? 'text-gold-500' : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <motion.div 
            layout
            className="space-y-8"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <AnimatePresence mode="wait">
              {MENU_ITEMS.filter(item => item.category === activeCategory).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-between items-baseline group cursor-none md:cursor-default" // Use none if you want to replace cursor
                  onMouseEnter={() => setHoveredItem(item)}
                >
                  <div className="flex-1">
                    <div className="flex items-baseline mb-2">
                      <h3 className="text-xl md:text-2xl font-serif text-stone-900 dark:text-stone-200 group-hover:text-gold-500 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-4 border-b border-stone-300 dark:border-stone-800 border-dotted relative top-[-6px]" />
                      <span className="text-gold-500 font-bold text-xl">${item.price}</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-500 text-sm md:text-base font-light italic">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 text-center text-stone-600 text-sm italic">
            * Please inform our staff of any allergies or dietary restrictions.
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Menu;
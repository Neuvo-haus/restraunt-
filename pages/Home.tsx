import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Tilt from '../components/Tilt';
import VelocityScroll from '../components/VelocityScroll';
import PageTransition from '../components/PageTransition';
import ImageReveal from '../components/ImageReveal';
import Magnetic from '../components/Magnetic';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Wine, Send } from 'lucide-react';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <PageTransition>
      <Hero />
      
      {/* Velocity Scroll Separator */}
      <section className="bg-stone-900 dark:bg-stone-950 py-12 border-b border-stone-800 border-t">
        <VelocityScroll 
          text="FINE DINING • EXPERIENTIAL • ARTISTRY • TASTE • " 
          className="text-stone-800 dark:text-stone-800 opacity-30 dark:opacity-20 font-serif italic" 
          baseVelocity={2}
        />
      </section>

      {/* About Section */}
      <section className="py-24 bg-stone-50 dark:bg-stone-950 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative p-4">
            <div className="absolute top-0 left-0 w-full h-full border border-gold-500/30 -translate-x-4 -translate-y-4 z-0" />
            <div className="relative z-10">
               <ImageReveal 
                 src="https://picsum.photos/id/225/800/1000" 
                 alt="Chef Plating"
                 aspectRatio="aspect-[4/5]"
               />
            </div>
          </div>
          
          <div className="md:pl-10">
            <SectionHeading 
              subtitle="Our Story" 
              title="A Culinary Journey" 
              alignment="left"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed font-light text-lg"
            >
              <p>
                Founded in the heart of the city, Lumière is more than just a restaurant; it is a sanctuary for the senses. Our philosophy is rooted in the belief that food should be an exploration of culture, texture, and flavor.
              </p>
              <p>
                Executive Chef Andre Dubois brings over 20 years of Michelin-starred experience to your table, sourcing only the finest seasonal ingredients from local artisans and farmers.
              </p>
              <div className="pt-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                  alt="Chef Signature" 
                  className="h-12 invert dark:invert-0 dark:opacity-80 opacity-60"
                />
                <p className="text-gold-500 text-sm mt-2 uppercase tracking-widest">Executive Chef</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Dining Section (New Content) */}
      <section className="py-24 bg-stone-100 dark:bg-stone-900 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
            <SectionHeading 
              subtitle="Exclusive" 
              title="Private Dining & Events" 
              alignment="left"
            />
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed font-light text-lg"
            >
              <p>
                Host your next unforgettable gathering in our secluded wine cellar or our panoramic rooftop terrace. Whether it's an intimate anniversary dinner or a corporate gala, our dedicated events team will curate a bespoke menu and atmosphere.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4 text-sm font-bold uppercase tracking-wide text-stone-900 dark:text-white">
                <li className="flex items-center gap-2"><Wine className="text-gold-500" size={18} /> Wine Cellar</li>
                <li className="flex items-center gap-2"><Star className="text-gold-500" size={18} /> Rooftop Terrace</li>
                <li className="flex items-center gap-2"><Star className="text-gold-500" size={18} /> Chef's Table</li>
                <li className="flex items-center gap-2"><Wine className="text-gold-500" size={18} /> Full Buyout</li>
              </ul>
              <div className="pt-8">
                 <Magnetic>
                    <NavLink to="/contact" className="inline-block px-8 py-3 border border-stone-900 dark:border-white text-stone-900 dark:text-white uppercase tracking-widest hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-colors">
                      Inquire Now
                    </NavLink>
                 </Magnetic>
              </div>
            </motion.div>
           </div>
           <div className="order-1 md:order-2 relative p-4">
              <div className="absolute bottom-0 right-0 w-full h-full border border-gold-500/30 translate-x-4 translate-y-4 z-0" />
              <div className="relative z-10">
                <ImageReveal 
                  src="https://picsum.photos/id/431/800/1000" 
                  alt="Private Dining"
                  aspectRatio="aspect-[4/5]"
                />
              </div>
           </div>
        </div>
      </section>

      {/* Featured Menu Parallax */}
      <section className="py-24 relative bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Discover" title="Signature Dishes" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Wagyu Ribeye", price: "$85", img: "https://picsum.photos/id/292/600/800" },
              { title: "Pan-Seared Scallops", price: "$42", img: "https://picsum.photos/id/493/600/800" },
              { title: "Truffle Risotto", price: "$38", img: "https://picsum.photos/id/429/600/800" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Tilt className="group relative cursor-pointer overflow-hidden shadow-2xl bg-white dark:bg-stone-950">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 dark:from-black/90 to-transparent pt-20">
                    <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gold-500 font-bold font-serif italic text-xl">{item.price}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <NavLink 
              to="/menu"
              className="flex items-center gap-2 text-stone-900 dark:text-white border-b border-gold-500 pb-1 hover:text-gold-500 dark:hover:text-gold-500 transition-colors uppercase tracking-widest text-sm"
            >
              View Full Menu <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Reviews / Social Proof */}
      <section className="py-24 bg-stone-100 dark:bg-stone-900 flex flex-col items-center justify-center text-center px-6 transition-colors duration-300">
        <Star className="text-gold-500 mb-6" fill="currentColor" size={32} />
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl text-3xl md:text-4xl font-serif text-stone-800 dark:text-stone-200 leading-tight italic mb-8"
        >
          "An absolute masterpiece of culinary art. The attention to detail is unmatched in the city."
        </motion.blockquote>
        <cite className="text-stone-500 uppercase tracking-widest text-sm not-italic">- The Michelin Guide, 2024</cite>
      </section>

      {/* Newsletter Section (New Content) */}
      <section className="py-20 bg-stone-900 dark:bg-black text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <SectionHeading subtitle="Stay Connected" title="Join Our Newsletter" className="mb-8" />
            <p className="text-stone-400 mb-10">Receive exclusive updates on seasonal menu changes, special events, and chef's tastings.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
               <input 
                 type="email" 
                 placeholder="Your Email Address" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="flex-1 bg-transparent border border-stone-700 px-6 py-4 focus:border-gold-500 focus:outline-none text-white transition-colors"
                 required
               />
               <Magnetic>
                 <button type="submit" className="bg-gold-500 text-stone-950 px-8 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                   Subscribe <Send size={16} />
                 </button>
               </Magnetic>
            </form>
         </div>
         {/* Decorative background element */}
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
         <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
      </section>
    </PageTransition>
  );
};

export default Home;
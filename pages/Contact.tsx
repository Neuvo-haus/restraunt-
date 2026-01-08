import React from 'react';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Visit Us" title="Contact Information" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Details */}
            <div className="space-y-12 lg:col-span-1">
              <div className="flex gap-4 items-start">
                <div className="bg-stone-200 dark:bg-stone-900 p-3 rounded-full text-gold-500 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white font-serif text-xl mb-2">Location</h4>
                  <p className="text-stone-600 dark:text-stone-400">123 Culinary Avenue,<br/>New York, NY 10001</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-stone-200 dark:bg-stone-900 p-3 rounded-full text-gold-500 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white font-serif text-xl mb-2">Phone</h4>
                  <p className="text-stone-600 dark:text-stone-400">+1 (212) 555-0199</p>
                  <p className="text-stone-500 text-sm mt-1">Mon-Sun, 10am - 10pm</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-stone-200 dark:bg-stone-900 p-3 rounded-full text-gold-500 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white font-serif text-xl mb-2">Email</h4>
                  <p className="text-stone-600 dark:text-stone-400">info@lumiere.com</p>
                  <p className="text-stone-600 dark:text-stone-400">events@lumiere.com</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-stone-200 dark:bg-stone-900 p-3 rounded-full text-gold-500 transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white font-serif text-xl mb-2">Hours</h4>
                  <div className="text-stone-600 dark:text-stone-400 space-y-1">
                     <p className="flex justify-between w-48"><span>Mon-Thu:</span> <span>5pm - 10pm</span></p>
                     <p className="flex justify-between w-48"><span>Fri-Sat:</span> <span>5pm - 11pm</span></p>
                     <p className="flex justify-between w-48"><span>Sun:</span> <span>4pm - 9:30pm</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2 bg-stone-200 dark:bg-stone-900 h-[500px] w-full relative group overflow-hidden transition-colors">
              <div className="absolute inset-0 flex items-center justify-center text-stone-500 z-10 pointer-events-none">
                <span className="text-sm uppercase tracking-widest">Interactive Map Placeholder</span>
              </div>
              {/* Using a static image to represent map for this demo */}
              <img 
                 src="https://picsum.photos/id/352/1200/800" 
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
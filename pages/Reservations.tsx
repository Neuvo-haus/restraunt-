import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import { ReservationFormData } from '../types';
import { CheckCircle2 } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock Backend Call
    console.log("Submitting Reservation:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950 relative transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 dark:bg-stone-900/50 -z-0 hidden lg:block transition-colors duration-300" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div className="flex flex-col justify-center">
            <SectionHeading subtitle="Book a Table" title="Reserve Your Spot" alignment="left" />
            <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
              Due to limited seating, we recommend making reservations at least one week in advance. For parties larger than 8, please contact us directly.
            </p>
            <div className="space-y-6">
               <div className="border-l-2 border-gold-500 pl-6">
                  <h4 className="text-stone-900 dark:text-white font-serif text-xl mb-1">Dress Code</h4>
                  <p className="text-stone-600 dark:text-stone-500 text-sm">Smart Casual. No athletic wear or beach sandals.</p>
               </div>
               <div className="border-l-2 border-gold-500 pl-6">
                  <h4 className="text-stone-900 dark:text-white font-serif text-xl mb-1">Cancellation Policy</h4>
                  <p className="text-stone-600 dark:text-stone-500 text-sm">Cancellations must be made at least 24 hours in advance.</p>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white dark:bg-stone-900 p-8 md:p-12 border border-stone-200 dark:border-stone-800 shadow-2xl transition-colors duration-300">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <CheckCircle2 className="text-gold-500 w-20 h-20 mx-auto mb-6" />
                <h3 className="text-3xl font-serif text-stone-900 dark:text-white mb-4">Reservation Confirmed</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Thank you, {formData.name}. We look forward to welcoming you on {formData.date} at {formData.time}.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="mt-8 text-gold-500 hover:text-stone-900 dark:hover:text-white underline underline-offset-4 transition-colors"
                >
                  Make another reservation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">Phone</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white p-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white p-3 focus:outline-none focus:border-gold-500 transition-colors dark:[color-scheme:dark] [color-scheme:light]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">Time</label>
                    <select
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white p-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                    >
                      <option value="">Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white p-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 text-stone-950 font-bold uppercase tracking-widest py-4 mt-8 hover:bg-stone-900 dark:hover:bg-white dark:hover:text-stone-950 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Reservations;
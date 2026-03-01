import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDates: string;
  budget: string;
  travelers: number;
  preferences: string;
};

export default function PlanMyTrip() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-luxury-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-luxury-blue mb-6">Start Your Journey</h1>
          <p className="text-luxury-blue/60 text-lg max-w-2xl mx-auto">
            Tell us about your dream trip, and our expert consultants will design a personalized experience just for you.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-3xl shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="text-green-600 w-12 h-12" />
              </div>
              <h2 className="text-3xl font-serif mb-4">Thank You!</h2>
              <p className="text-luxury-blue/60 mb-8 text-lg">
                Your travel request has been received. A Bookmyplan consultant will contact you within 24 hours to begin designing your masterpiece.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="bg-luxury-blue text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-luxury-blue/90 transition-all"
              >
                PLAN ANOTHER TRIP
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Full Name</label>
                <input
                  {...register('name', { required: true })}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Email Address</label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs">Valid email is required</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Phone Number</label>
                <input
                  {...register('phone', { required: true })}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Destination</label>
                <input
                  {...register('destination', { required: true })}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="e.g. Amalfi Coast, Japan, Safari"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Travel Dates</label>
                <input
                  {...register('travelDates')}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="e.g. Summer 2026 or Specific Dates"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Budget Range</label>
                <select
                  {...register('budget')}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors appearance-none"
                >
                  <option value="">Select Budget</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-widest text-luxury-blue/60">Special Preferences & Notes</label>
                <textarea
                  {...register('preferences')}
                  rows={4}
                  className="w-full bg-luxury-cream/50 border border-luxury-blue/10 rounded-xl px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="Tell us about your interests, dietary requirements, or any specific experiences you're looking for..."
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  disabled={isSubmitting}
                  className="w-full bg-luxury-blue text-white py-5 rounded-xl font-bold tracking-[0.2em] hover:bg-luxury-blue/90 transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      SEND REQUEST <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-luxury-blue/40 text-xs mt-6 uppercase tracking-widest">
                  Your privacy is our priority. We never share your data.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

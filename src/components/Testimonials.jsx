import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechVenture Bangladesh',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content: 'Nexora Digital transformed our legacy systems into a modern, scalable platform. Their team\'s expertise exceeded our expectations.',
    rating: 5,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    name: 'Mohammed Rahman',
    role: 'Founder & CEO',
    company: 'HealthBridge Ltd',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'Working with Nexora was a game-changer for our telemedicine platform. They understood our vision and built a product that serves 100,000+ patients.',
    rating: 5,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'Fatima Zaman',
    role: 'Director of Operations',
    company: 'LogiTech Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    content: 'The supply chain management system reduced our operational costs by 40% and improved delivery times by 60%. Exceptional work.',
    rating: 5,
    color: 'from-orange-500 to-red-500'
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center text-center p-8 ${isActive ? 'block' : 'hidden'}`}
    >
      {/* Quote Icon */}
      <div className="relative mb-6">
        <Quote size={40} className="text-yellow-500/20" />
      </div>

      {/* Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Testimonial Text */}
      <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mt-4">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 object-cover border border-slate-700"
        />
        <div className="text-left">
          <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
          <p className="text-xs text-yellow-500 font-medium">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/20 tracking-widest uppercase"
          >
            Client Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Loved by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400"
          >
            Here's what our clients say about working with us.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Navigation Arrows - Square */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-slate-800 border border-slate-700 text-white hover:bg-yellow-500 hover:text-black transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-slate-800 border border-slate-700 text-white hover:bg-yellow-500 hover:text-black transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator - Square */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats strip - Square design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-slate-900 border border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-slate-400 mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-sm text-slate-400 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">12</p>
              <p className="text-sm text-slate-400 mt-1">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-slate-400 mt-1">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

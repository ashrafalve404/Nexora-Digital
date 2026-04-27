import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Rocket, Shield, Zap, Play } from 'lucide-react';
import bgWeb from '../assets/bgweb.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Image */}
      <img 
        src={bgWeb}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      {/* Vignette effect for vintage look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.5)_100%)]" />
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-slate-950/40" />

      {/* Floating Decorative Elements - Square shaped (hidden on mobile) */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
        className="absolute top-1/4 right-1/4 w-24 sm:w-40 lg:w-64 h-24 sm:h-40 lg:h-64 bg-yellow-500/5 rotate-12 blur-xl hidden lg:block"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute bottom-1/4 left-1/4 w-24 sm:w-40 lg:w-64 h-24 sm:h-40 lg:h-64 bg-purple-500/5 -rotate-12 blur-xl hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 lg:space-y-8 lg:text-left lg:col-span-1"
        >
          {/* Badge - Square design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-yellow-500"></span>
            </span>
            <Zap size={14} className="text-yellow-500" />
            <span className="text-yellow-500 text-sm font-bold tracking-wide">Q2 2026</span>
          </motion.div>

          {/* Main Heading - Clean, bold typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block lg:inline">Engineering the </span>
            <span className="block text-gradient">Digital Future</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            From AI-driven automation to scalable enterprise software, we help businesses transform with world-class technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-500/20"
            >
              Start Your Project
              <ChevronRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-slate-700 text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
            >
              <Play size={18} />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-6 border-t border-slate-800"
          >
            <p className="text-slate-400 text-sm font-medium mb-4">Trusted by Leading Companies</p>
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee gap-16 whitespace-nowrap">
                {["TechGiant", "InnovateCo", "GlobalTech", "MetaSoft", "CloudNet"].map((company, i) => (
                  <span key={i} className="text-xl font-bold text-slate-600">
                    {company}
                  </span>
                ))}
                {["TechGiant", "InnovateCo", "GlobalTech", "MetaSoft", "CloudNet"].map((company, i) => (
                  <span key={`dup-${i}`} className="text-xl font-bold text-slate-600">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual - Hidden on mobile and tablet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* Main Image Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Software development workspace"
                className="w-full h-auto"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20"
            >
              <div className="bg-slate-900 p-6 border border-slate-800 w-56">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Performance</p>
                    <p className="text-2xl font-bold text-white">+150%</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 z-20"
            >
              <div className="bg-slate-900 p-6 border border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-600 text-white">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Security</p>
                    <p className="text-2xl font-bold text-white">AES-256</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Code snippet overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-16 left-8 right-8 md:left-auto md:right-0 md:w-72 bg-slate-900/95 backdrop-blur-md p-4 border border-slate-800 font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500" />
                <div className="w-3 h-3 bg-yellow-500" />
                <div className="w-3 h-3 bg-green-500" />
              </div>
              <pre className="text-slate-300">
{`<NexoraApp
  aiEnabled={true}
  cloud="AWS"
  secure="AES256"
/>`}
              </pre>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-slate-600 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-yellow-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
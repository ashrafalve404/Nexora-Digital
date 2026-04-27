import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Layout, Smartphone, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke enterprise solutions tailored to your specific business logic and operational needs.',
    icon: <Cpu size={28} />,
    features: ['Microservices', 'API Development', 'System Integration'],
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0
  },
  {
    title: 'AI & Machine Learning',
    description: 'Integrating intelligent automation and predictive analytics to give your business a competitive edge.',
    icon: <Globe size={28} />,
    features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision'],
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    title: 'UI/UX Strategy & Design',
    description: 'Creating intuitive, human-centric digital experiences that drive engagement and conversion.',
    icon: <Layout size={28} />,
    features: ['User Research', 'Prototyping', 'Design Systems'],
    gradient: 'from-orange-500 to-red-500',
    delay: 0.2
  },
  {
    title: 'Mobile App Ecosystems',
    description: 'High-performance native and cross-platform apps that deliver seamless utility on every device.',
    icon: <Smartphone size={28} />,
    features: ['iOS & Android', 'Cross-Platform', 'App Optimization'],
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.3
  },
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: service.delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative h-full p-8 bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all duration-300">
        {/* Icon container - Square design */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`w-14 h-14 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6`}
        >
          {service.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6 text-sm">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-4 border-t border-slate-800">
          <button className="inline-flex items-center gap-2 text-yellow-500 font-semibold text-sm hover:gap-3 transition-all">
            Learn More
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-yellow-500/50" />
            <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase">
              Our Expertise
            </span>
            <div className="h-px w-10 bg-yellow-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Scaling Businesses with <span className="text-gradient">Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We build digital assets that generate revenue and streamline operations.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom CTA - Square design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-6 bg-slate-900 border border-slate-800">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Have a project in mind?
              </h3>
              <p className="text-slate-400 text-sm">
                Let's discuss how we can help transform your business.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

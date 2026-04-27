import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Target, Award, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2015', event: 'Nexora Digital founded in Dhaka' },
    { year: '2018', event: 'Expanded to Singapore & UAE' },
    { year: '2021', event: 'Launched AI Research Lab' },
    { year: '2024', event: '150+ projects delivered globally' },
  ];

  const values = [
    { icon: <Target size={20} />, title: 'Mission', text: 'To establish Bangladesh as a global leader in high-end software engineering.' },
    { icon: <Users size={20} />, title: 'Vision', text: 'To be the most trusted technology partner for businesses worldwide.' },
    { icon: <Award size={20} />, title: 'Values', text: 'Excellence, integrity, innovation, and client success drive everything we do.' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image - Square design */}
            <div className="relative overflow-hidden border border-slate-800">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Nexora Team Collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Achievement Card - Square */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-yellow-600 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/20 backdrop-blur-sm">
                  <Award className="text-black" size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">10+</p>
                  <p className="text-black/80 font-medium text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Location Badge - Square */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-4 left-4 bg-slate-900 border border-slate-700 px-4 py-3 flex items-center gap-3"
            >
              <Globe className="text-yellow-500" size={18} />
              <div>
                <p className="text-xs text-slate-400 font-medium">Headquarters</p>
                <p className="text-sm font-bold text-white">Dhaka, Bangladesh</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold text-sm tracking-widest uppercase"
              >
                <Sparkles size={16} />
                Who We Are
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Bridging Dhaka's Talent with <span className="text-gradient">Global Innovation</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-slate-400 leading-relaxed"
              >
                Nexora Digital is a premier software consultancy based in the heart of Dhaka. We specialize in transforming complex business challenges into elegant digital products.
              </motion.p>
            </div>

            {/* Values - Square cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid gap-4"
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-yellow-500/30 transition-all group"
                >
                  <div className="flex gap-4">
                    <div className={`p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black group-hover:scale-105 transition-transform`}>
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{value.title}</h3>
                      <p className="text-slate-400 text-sm">{value.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold inline-flex items-center gap-2"
            >
              Our Company Story
              <Sparkles size={18} />
            </motion.button>
          </div>
        </div>

        {/* Timeline / Milestones - Square design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative flex justify-between">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-slate-950 px-4"
              >
                <div className="w-3 h-3 bg-yellow-500 mx-auto mb-3" />
                <p className="text-sm font-bold text-yellow-500 mb-1">{milestone.year}</p>
                <p className="text-sm text-slate-400 max-w-[120px] text-center">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

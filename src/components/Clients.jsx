import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Box, Cloud, Database, Globe, Server, Cpu, Network, Monitor, Code, Layers, HardDrive } from 'lucide-react';

const clients = [
  { name: "TechGiant", icon: Hexagon },
  { name: "InnovateCo", icon: Box },
  { name: "GlobalTech", icon: Globe },
  { name: "MetaSoft", icon: Layers },
  { name: "CloudNet", icon: Cloud },
  { name: "DataFlow", icon: Database },
  { name: "SmartSys", icon: Cpu },
  { name: "NetSol", icon: Network },
  { name: "DigiCorp", icon: Monitor },
  { name: "InnoTech", icon: Code },
  { name: "SoftWorks", icon: Server },
  { name: "TechSol", icon: HardDrive }
];

const Clients = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Trusted by <span className="text-gradient">Leading Companies</span>
          </motion.h2>
        </div>

        {/* Text Marquee */}
        <div className="overflow-hidden py-6">
          <div className="flex animate-marquee gap-6 lg:gap-10 whitespace-nowrap">
            {clients.map((client, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-yellow-500/50 rounded-xl cursor-pointer transition-all group">
                <client.icon className="w-10 h-10 lg:w-12 lg:h-12 text-slate-500 group-hover:text-yellow-500 transition-colors" />
              </div>
            ))}
            {clients.map((client, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-yellow-500/50 rounded-xl cursor-pointer transition-all group">
                <client.icon className="w-10 h-10 lg:w-12 lg:h-12 text-slate-500 group-hover:text-yellow-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Square design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-slate-900 border border-slate-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white mb-1">ISO 27001</p>
              <p className="text-slate-400 text-sm">Certified Security</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white mb-1">AWS Partner</p>
              <p className="text-slate-400 text-sm">Advanced Consulting</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white mb-1">Google Cloud</p>
              <p className="text-slate-400 text-sm">Premier Partner</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinFlow Banking Platform',
    category: 'Fintech',
    description: 'AI-powered digital banking with seamless cross-border payments.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'AI/ML', 'Blockchain'],
    color: 'from-blue-500 to-cyan-500',
    link: '#'
  },
  {
    id: 2,
    title: 'HealthConnect App',
    category: 'Healthcare',
    description: 'Telemedicine platform with AI symptom checker and digital prescriptions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25ddf?auto=format&fit=crop&w=800&q=80',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'TensorFlow'],
    color: 'from-green-500 to-emerald-500',
    link: '#'
  },
  {
    id: 3,
    title: 'SupplyChain OS',
    category: 'Logistics',
    description: 'End-to-end supply chain management with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'IoT', 'PostgreSQL', 'AWS'],
    color: 'from-orange-500 to-red-500',
    link: '#'
  },
  {
    id: 4,
    title: 'EduVerse Learning',
    category: 'EdTech',
    description: 'Interactive e-learning with gamification and adaptive paths.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'GraphQL', 'WebGL', 'Redis'],
    color: 'from-purple-500 to-pink-500',
    link: '#'
  },
  {
    id: 5,
    title: 'Smart City Dashboard',
    category: 'IoT',
    description: 'Municipal command center for traffic, safety, and energy monitoring.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'D3.js', 'MQTT', 'Kubernetes'],
    color: 'from-cyan-500 to-blue-500',
    link: '#'
  },
  {
    id: 6,
    title: 'RetailNext AI',
    category: 'Retail',
    description: 'AI-driven retail analytics with customer insights.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Python', 'OpenCV', 'MongoDB'],
    color: 'from-amber-500 to-yellow-500',
    link: '#'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all duration-300">
        {/* Image Container - Square aspect */}
        <div className="relative aspect-square overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-40 transition-opacity z-10`} />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category Badge - Square */}
          <div className="absolute top-2 left-2 z-20">
            <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${project.color} text-black`}>
              {project.category}
            </span>
          </div>

          {/* External Link - Square button (hidden on mobile) */}
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-2 right-2 z-20 p-1.5 bg-slate-900/90 text-yellow-500 opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-yellow-500 hover:text-black hidden sm:block"
          >
            <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2 hidden sm:block">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 shadow-[0_0_40px_-10px_rgba(234,179,8,0.2)]" />
        </div>
      </div>
    </motion.article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-yellow-500/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-purple-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/20 tracking-widest uppercase"
          >
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Projects That <span className="text-gradient">Define Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Innovative solutions that have transformed businesses worldwide.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button - Square design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

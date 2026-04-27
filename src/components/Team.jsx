import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Arifur Rahman',
    role: 'CEO & Founder',
    bio: '15+ years leading digital transformations for Fortune 500 companies. MIT graduate and serial entrepreneur.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    social: { linkedin: '#', twitter: '#', github: '#' },
    expertise: ['Strategy', 'Leadership', 'Innovation'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Tahmina Akter',
    role: 'Chief Technology Officer',
    bio: 'Former Google engineer with expertise in scalable systems, AI/ML, and cloud architecture.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    social: { linkedin: '#', twitter: '#', github: '#' },
    expertise: ['Cloud Architecture', 'AI/ML', 'Security'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Rafiqul Islam',
    role: 'Head of Design',
    bio: 'Award-winning UX designer with a passion for creating human-centered digital experiences.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
    expertise: ['UI/UX', 'Design Systems', 'Prototyping'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    name: 'Sabrina Khan',
    role: 'Lead Mobile Developer',
    bio: 'Flutter and React Native expert who has built apps used by millions worldwide.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    social: { linkedin: '#', twitter: '#', github: '#' },
    expertise: ['Mobile Dev', 'iOS', 'Android'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    name: 'Kamal Hossain',
    role: 'AI Research Lead',
    bio: 'PhD in Machine Learning from Stanford. Published researcher in NLP and Computer Vision.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    social: { linkedin: '#', twitter: '#', github: '#' },
    expertise: ['NLP', 'Computer Vision', 'Deep Learning'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 6,
    name: 'Nusrat Jahan',
    role: 'Project Director',
    bio: 'Certified PMP with 12+ years managing complex software projects across Asia and Europe.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
    social: { linkedin: '#', twitter: '#' },
    expertise: ['Agile', 'Scrum', 'Risk Management'],
    color: 'from-pink-500 to-rose-500'
  }
];

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all duration-300">
        {/* Image - Square aspect */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90`} />

          {/* Bottom accent line */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`} />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-yellow-500 font-medium">
              {member.role}
            </p>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {member.bio}
          </p>

          {/* Expertise tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="p-2 bg-slate-800 text-slate-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Linkedin size={16} />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="p-2 bg-slate-800 text-slate-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Twitter size={16} />
              </a>
            )}
            {member.social.github && (
              <a href={member.social.github} className="p-2 bg-slate-800 text-slate-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Github size={16} />
              </a>
            )}
            <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@nexoradigital.com`} className="p-2 bg-slate-800 text-slate-400 hover:bg-yellow-500 hover:text-black transition-all ml-auto">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-gradient-to-br from-yellow-500/5 via-purple-500/5 to-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/20 tracking-widest uppercase"
          >
            Our Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Meet the <span className="text-gradient">Visionaries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400"
          >
            A passionate team of innovators committed to pushing boundaries.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Join Team CTA - Square design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-6 bg-slate-900 border border-slate-800">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Want to join our team?</h3>
              <p className="text-slate-400 text-sm">We're always looking for talented individuals</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition-all"
            >
              View Openings
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

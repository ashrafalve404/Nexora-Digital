import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Linkedin, Twitter, Github, Facebook, Instagram, MapPin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Custom Software', 'Mobile Apps', 'AI/ML Solutions', 'UI/UX Design', 'Cloud Services'],
    Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
    Resources: ['Documentation', 'Case Studies', 'Whitepapers', 'Newsletter', 'Webinars'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, url: '#', label: 'Twitter' },
    { icon: <Github size={18} />, url: '#', label: 'GitHub' },
    { icon: <Facebook size={18} />, url: '#', label: 'Facebook' },
    { icon: <Instagram size={18} />, url: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-6 gap-6 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <Cpu className="text-black w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-white">
                  Nexora<span className="text-yellow-500">Digital</span>
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-sm text-sm">
                Engineering the digital future of Bangladesh. We build world-class software that transforms businesses.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@nexoradigital.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  <Mail size={14} className="text-yellow-500" />
                  <span>hello@nexoradigital.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <MapPin size={14} className="text-yellow-500" />
                  <span>Banani, Dhaka, Bangladesh</span>
                </div>
              </div>

              {/* Social Links - Square buttons */}
              <div className="flex gap-2 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    whileHover={{ scale: 1.05 }}
                    className="w-9 h-9 bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-black transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
              className="col-span-1"
            >
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-slate-600 group-hover:bg-yellow-500 transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Nexora Digital Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-2 h-2 bg-green-500" />
              <span>Available for projects</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:bg-yellow-500 hover:text-black transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

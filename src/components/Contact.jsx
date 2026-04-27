import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, Globe, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', projectType: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email Us',
      detail: 'hello@nexoradigital.com',
      sub: 'We reply within 24 hours'
    },
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      detail: '+880 1712-345678',
      sub: 'Mon-Fri, 9am-6pm BDT'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Our Office',
      detail: 'Dhaka, Bangladesh',
      sub: 'Banani, Gulshan & Uttara'
    },
    {
      icon: <Clock size={20} />,
      title: 'Response Time',
      detail: '< 24 hours',
      sub: 'Guaranteed turnaround'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-yellow-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold text-sm uppercase tracking-wider">
            <Globe size={16} />
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let's Build the <span className="text-gradient">Next Big Thing</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Whether you're a startup in Banani or an enterprise across Bangladesh, we're ready to scale your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards - Square design */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-yellow-500/30 transition-all"
                >
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 mb-3">
                    {info.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{info.title}</h3>
                  <p className="text-base font-semibold text-slate-200">{info.detail}</p>
                  <p className="text-xs text-slate-500 mt-1">{info.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Office Visual - Square */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border border-slate-800"
            >
              <div className="h-64 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Dhaka skyline"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg flex items-center gap-2">
                    <MapPin className="text-yellow-500" size={20} />
                    Banani, Dhaka
                  </p>
                  <p className="text-slate-400 text-sm">Visit our modern workspace</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm"
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <div className="p-8 lg:p-12 bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-yellow-500/30 transition-all">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                  <p className="text-slate-400 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Full Name</label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-yellow-500 transition-all text-sm"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email Address</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-yellow-500 transition-all text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Project Type - Square buttons */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Project Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['Custom Software', 'Mobile App', 'AI/ML', 'UI/UX Design'].map((type) => (
                        <label
                          key={type}
                          className={`relative flex items-center justify-center p-3 border cursor-pointer transition-all text-sm ${
                            formState.projectType === type
                              ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                              : 'border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-600'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={formState.projectType === type}
                            onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                            className="sr-only"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Message</label>
                    <textarea
                      rows="5"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-yellow-500 transition-all resize-none text-sm"
                      placeholder="Tell us about your vision, goals, and timeline..."
                      required
                    />
                  </div>

                  {/* Submit Button - Square */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold inline-flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={14} />
                    Your information is secure and never shared.
                  </p>
                  <p>Or email: <a href="mailto:hello@nexoradigital.com" className="text-yellow-500 hover:underline">hello@nexoradigital.com</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

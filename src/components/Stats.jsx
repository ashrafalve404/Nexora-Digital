import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Rocket, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users size={24} />,
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed across 12 countries',
  },
  {
    icon: <Rocket size={24} />,
    value: 98,
    suffix: '%',
    label: 'On-Time Delivery',
    description: 'Consistently meeting deadlines',
  },
  {
    icon: <Award size={24} />,
    value: 25,
    suffix: '+',
    label: 'Industry Awards',
    description: 'Recognized for excellence',
  },
  {
    icon: <Globe size={24} />,
    value: 12,
    suffix: '',
    label: 'Countries Served',
    description: 'Global reach with local expertise',
  },
];

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-yellow-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 bg-slate-900 border border-slate-800 hover:border-yellow-500/30 transition-all overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black mb-4">
                    {stat.icon}
                  </div>

                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="text-base font-bold text-yellow-500 mb-1">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

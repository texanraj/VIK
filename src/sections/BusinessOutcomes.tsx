import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, BarChart3, ShieldCheck, TrendingDown, ArrowRight } from 'lucide-react';

const BusinessOutcomes = () => {
  const outcomes = [
    {
      icon: Lightbulb,
      title: 'Digital Innovation',
      description: 'Innovation is the foundation of continued success. Securing a first-mover advantage accelerates growth and propels organizations into the future.',
      link: '/services',
      color: 'teal',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Couple your data with the analytics power of AI, and you\'ve got a recipe for data-driven decision-making and business success.',
      link: '/services',
      color: 'blue',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Protect Data',
      description: 'Reduce risk, protect your reputation, and comply with industry mandates. A modern security strategy is a necessity for every business.',
      link: '/services',
      color: 'purple',
    },
    {
      icon: TrendingDown,
      title: 'Cloud Cost Optimization',
      description: 'Eliminate technical debt, reduce the total cost of ownership (TCO), and optimize your cloud spend with intelligent automation.',
      link: '/services',
      color: 'cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; hover: string; glow: string }> = {
      teal: { icon: 'text-teal-400', hover: 'hover:border-teal-500/50', glow: 'group-hover:shadow-glow' },
      blue: { icon: 'text-blue-400', hover: 'hover:border-blue-500/50', glow: 'group-hover:shadow-glow-blue' },
      purple: { icon: 'text-purple-400', hover: 'hover:border-purple-500/50', glow: 'group-hover:shadow-glow-purple' },
      cyan: { icon: 'text-cyan-400', hover: 'hover:border-cyan-500/50', glow: 'group-hover:shadow-glow' },
    };
    return colors[color] || colors.teal;
  };

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label mb-4 block">Business Outcomes</span>
          <h2 className="heading-lg text-white mb-6">
            Turning Business Challenges into{' '}
            <span className="text-gradient">Business Outcomes</span>
          </h2>
        </motion.div>

        {/* Outcomes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {outcomes.map((outcome, index) => {
            const colors = getColorClasses(outcome.color);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group card-glass rounded-2xl p-8 ${colors.hover} transition-all duration-500`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 ${colors.glow} transition-shadow duration-500`}>
                    <outcome.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {outcome.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {outcome.description}
                    </p>
                    <Link
                      to={outcome.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;

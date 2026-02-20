import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Brain, Workflow, Database, Cloud, Code, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'Generative AI Services',
      description: 'Custom LLM implementation, fine-tuning, and deployment tailored to your enterprise needs.',
      link: '/services',
      featured: true,
    },
    {
      icon: Brain,
      title: 'Agentic AI Systems',
      description: 'Autonomous AI agents that make decisions and execute complex workflows.',
      link: '/services',
      featured: false,
    },
    {
      icon: Workflow,
      title: 'AI Workflows',
      description: 'End-to-end automation of business processes with intelligent orchestration.',
      link: '/services',
      featured: false,
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights with AI-powered analytics.',
      link: '/services',
      featured: false,
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud-native architectures with AI optimization.',
      link: '/services',
      featured: false,
    },
    {
      icon: Code,
      title: 'Modern App Development',
      description: 'Cloud-native applications built with AI at the core.',
      link: '/services',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label mb-4 block">Our Solutions</span>
          <h2 className="heading-lg text-white mb-6">
            End-to-End <span className="text-gradient">Modernization</span> Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive AI solutions that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative ${solution.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Link to={solution.link} className="block h-full">
                <div className={`card-glass rounded-2xl p-6 h-full border border-white/5 group-hover:border-teal-500/30 transition-all duration-500 ${
                  solution.featured ? 'bg-gradient-to-br from-teal-500/10 to-transparent' : ''
                }`}>
                  {/* Featured Badge */}
                  {solution.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      Featured
                    </span>
                  )}
                  
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 group-hover:shadow-glow transition-all duration-500">
                    <solution.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {solution.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;

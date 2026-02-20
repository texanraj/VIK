import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  Shield,
  ArrowRight,
  CheckCircle,
  Cpu,
  Zap,
  Globe
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Outcome-Driven',
      description: 'We focus on delivering measurable business results, not just technical implementations. Every project is tied to clear KPIs and ROI.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the cutting edge of AI technology, constantly evaluating new models, techniques, and approaches to deliver the best solutions.',
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work alongside your team, transferring knowledge and building capabilities that last beyond our engagement.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and compliance are built into everything we do. Your data and IP are always protected.',
    },
  ];

  const stats = [
    { value: '50+', label: 'AI Deployments' },
    { value: '3x', label: 'Faster Time-to-Value' },
    { value: '40%', label: 'Average Cost Reduction' },
    { value: '99.9%', label: 'Uptime SLA' },
  ];

  const expertise = [
    'Generative AI & LLMs',
    'Agentic AI Systems',
    'Conversational AI',
    'Machine Learning Operations',
    'Cloud-Native Architecture',
    'Data Engineering',
    'AI Governance & Security',
    'Enterprise Integration',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label mb-6 block">About Us</span>
              <h1 className="heading-xl text-white mb-8">
                We Architect the{' '}
                <span className="text-gradient">Future of Intelligence</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                VIK Consulting is a premier Generative AI consulting firm specializing in enterprise digital transformation. We combine deep technical expertise with strategic business acumen to deliver AI solutions that drive real, measurable outcomes.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Founded by industry veterans with decades of experience in cloud computing and artificial intelligence, we have helped organizations across industries—from Fortune 500 enterprises to innovative startups—harness the power of AI to transform their operations, products, and customer experiences.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full glass-strong flex items-center justify-center glow-teal">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-glow">
                      <Cpu className="w-12 h-12 text-slate-950" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2">VIK</div>
                    <div className="text-teal-400 font-bold uppercase tracking-widest text-sm">Consulting</div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-xl bg-teal-500/20 backdrop-blur-sm flex items-center justify-center border border-teal-500/30">
                      <Zap className="w-8 h-8 text-teal-400" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                      <Globe className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[40px]"
                >
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                      <Award className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
        <div className="container-wide">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Principles</span>
            <h2 className="heading-lg text-white mb-6">
              The Values That Drive <span className="text-gradient">Everything We Do</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-glass rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none" />
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Our Expertise</span>
              <h2 className="heading-lg text-white mb-6">
                Deep Technical <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our team brings together expertise across the full spectrum of AI and cloud technologies. From the latest foundation models to enterprise-grade infrastructure, we have the skills to tackle your most complex challenges.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-strong rounded-3xl p-8 glow-teal">
                <h3 className="text-xl font-bold text-white mb-6">Why Partner with VIK Consulting?</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Full Source Code Delivery',
                      description: 'Every project includes complete source code, documentation, and knowledge transfer.',
                    },
                    {
                      title: 'Production-Ready in Weeks',
                      description: 'Our accelerator program moves you from concept to production in 3 weeks, not quarters.',
                    },
                    {
                      title: 'Enterprise-Grade Security',
                      description: 'Built-in compliance, RBAC, and data privacy from day one.',
                    },
                    {
                      title: '24/7 Support',
                      description: 'Dedicated support during rollout and beyond with 99.9% SLA.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how VIK Consulting can help you achieve your AI transformation goals. From strategy to execution, we are with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;

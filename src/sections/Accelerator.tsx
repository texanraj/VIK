import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Clock, Database, Shield, CheckCircle, TrendingUp, Zap } from 'lucide-react';

const Accelerator = () => {
  const features = [
    { icon: Clock, text: 'Zero-Infrastructure Burden Deployment' },
    { icon: Database, text: 'Custom-Tuned Enterprise Knowledge Base' },
    { icon: Shield, text: 'Built-In Compliance & Data Privacy' },
  ];

  const benefits = [
    'Production-ready in 3 weeks',
    'Full source code delivery',
    'Knowledge transfer included',
    '24/7 support during rollout',
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label mb-4 block">Solution Spotlight</span>
            <h2 className="heading-lg text-white mb-6">
              The VIK <span className="text-gradient italic">Intelligence Accelerator</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              While others experiment, we execute. Our accelerator program bypasses the 
              &quot;Proof of Concept&quot; purgatory, moving your enterprise from roadmap to 
              production in weeks, not quarters.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Start Your Acceleration
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/20 animate-spin-slow" />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-white/5" />
              
              {/* Inner Content */}
              <div className="absolute inset-16 rounded-full glass-strong flex flex-col items-center justify-center glow-teal">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Zap className="w-8 h-8 text-slate-950" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2">3</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Weeks to Production</div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/20 backdrop-blur-sm flex items-center justify-center border border-teal-500/30">
                    <TrendingUp className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[60px]"
              >
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Accelerator;

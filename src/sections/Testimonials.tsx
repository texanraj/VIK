import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "VIK Consulting has been an extension of our team, implementing scalable, innovative, and well-architected AI solutions. They continually go above and beyond to ensure project success by truly understanding our business objectives.",
      author: 'Andrea Valenti',
      role: 'Director of Cloud Engineering',
      company: 'Fortune 500 Technology Firm',
      rating: 5,
    },
    {
      quote: "The project exceeded expectations. It overdelivered in customer satisfaction, innovation in infrastructure code and automation, and cost optimization—enabling us to realize nearly 40% TCO savings.",
      author: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'Enterprise SaaS Platform',
      rating: 5,
    },
    {
      quote: "We try to be a forward-thinking organization, and VIK Consulting deepened our ability to meet the growing needs of our technology roadmap. Their AI expertise is unmatched.",
      author: 'Gregg Knutson',
      role: 'Sr. VP of Information Technology',
      company: 'Global Real Estate Group',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label mb-4 block">Customer Success</span>
          <h2 className="heading-lg text-white mb-6">
            What Our <span className="text-gradient">Customers</span> Are Saying
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card-glass rounded-2xl p-8 h-full border border-white/5 group-hover:border-teal-500/30 transition-all duration-500">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <Quote className="w-6 h-6 text-teal-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-teal-400 text-teal-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-slate-950 font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                    <div className="text-teal-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
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
            to="/contact"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors group"
          >
            Read More Case Studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

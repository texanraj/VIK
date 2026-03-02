import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  User, 
  Mail, 
  Building, 
  MessageSquare,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    state: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        state: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const services = [
    'Select Your Service Interest',
    'GenAI Strategy & Roadmap',
    'LLM Implementation',
    'AI Agent Development',
    'The VIK Accelerator',
    'Data & Analytics',
    'Cloud Migration',
    'Other',
  ];

  const locations = [
    {
      name: 'Headquarters',
      address: '7777 Southwest Freeway, Suite 500',
      city: 'Houston, TX 77002'
    },
    {
      name: 'West Coast Office',
      address: '1117 Phyllis Dr',
      city: 'Mountain View, CA 94040'
    },
    {
      name: 'Chennai Office',
      address: '40 Akbar St.',
      city: 'Chennai, TN 600004'
    },
  ];

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="label mb-6 block">Contact Us</span>
            <h1 className="heading-xl text-white mb-8">
              Let&apos;s Build What&apos;s <span className="text-gradient">Next</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Connect with our team to discuss your cloud, data, or AI initiatives and explore how to move from strategy to execution with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent pointer-events-none" />
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-white mb-4">
              Our <span className="text-gradient">Locations</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{location.name}</h3>
                <div className="space-y-2 text-slate-400">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-teal-400" />
                    <a href={`tel:${location.phone}`} className="text-teal-400 hover:text-teal-300 transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="glass-strong rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-slate-400 mb-8">
                  Complete the form below and a member of our team will be in touch shortly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-teal-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Message Sent!</h4>
                    <p className="text-slate-400">We&apos;ll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm text-slate-400 mb-2">First Name *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="input-glass pl-12"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm text-slate-400 mb-2">Last Name *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="input-glass pl-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm text-slate-400 mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-glass pl-12"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm text-slate-400 mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-glass pl-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm text-slate-400 mb-2">Company Name *</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="input-glass pl-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm text-slate-400 mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="input-glass"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-sm text-slate-400 mb-2">State/Region</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="input-glass"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm text-slate-400 mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-glass appearance-none cursor-pointer"
                      >
                        {services.map((service, index) => (
                          <option key={index} value={index === 0 ? '' : service} className="bg-slate-900">
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-[38px] pointer-events-none">
                        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm text-slate-400 mb-2">Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="input-glass pl-12 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 py-5"
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </button>

                    <p className="text-center text-slate-500 text-xs">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Quick Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <a href="tel:281-201-6635" className="text-white hover:text-teal-400 transition-colors">
                        800-991-3011
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a href="mailto:sanstorage@gmail.com" className="text-white hover:text-teal-400 transition-colors">
                        info@vikconsulting.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Hours</p>
                      <p className="text-white">Mon - Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Careers CTA */}
              <div className="glass rounded-2xl p-8 border border-teal-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Join Our Team</h4>
                <p className="text-slate-400 text-sm mb-6">
                  Passionate about AI and cloud innovation? We are always looking for talented individuals to join our growing team.
                </p>
                <a
                  href="mailto:sanstorage@gmail.com"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                >
                  View Open Positions
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;

import { Link } from 'react-router-dom';
import { Cpu, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const expertiseLinks = [
    { label: 'AI Services', path: '/services' },
    { label: 'Generative AI', path: '/services' },
    { label: 'Agentic AI', path: '/services' },
    { label: 'Conversational AI', path: '/services' },
    { label: 'LLM Implementation', path: '/services' },
  ];

  const solutionLinks = [
    { label: 'AI Strategy', path: '/services' },
    { label: 'AI Accelerators', path: '/services' },
    { label: 'Cloud Migration', path: '/services' },
    { label: 'Data Analytics', path: '/services' },
    { label: 'AI Governance', path: '/services' },
  ];

  const companyLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/contact' },
    { label: 'News & Blog', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@vikconsulting.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-glow">
                <Cpu className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic font-display">
                VIK <span className="text-teal-400">Consulting</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Precision-engineered Generative AI strategies that transform legacy systems into autonomous engines of growth. Architecting the future of enterprise intelligence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Expertise Column */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              Expertise
            </h4>
            <ul className="space-y-3">
              {expertiseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} VIK Consulting Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

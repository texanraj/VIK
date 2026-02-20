import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  MessageSquare, 
  Sparkles, 
  Brain,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Lightbulb,
  Target,
  Rocket,
  Shield,
  Database,
  Cloud,
  Code,
  LineChart
} from 'lucide-react';

const Services = () => {
  // AI Use Cases
  const aiUseCases = [
    {
      icon: Brain,
      title: 'Agentic AI',
      description: 'Automate complex tasks and enable real-time decision making with agentic AI. Our systems can proactively manage inventory, detect threats in real-time, and execute high-volumes of repetitive tasks—such as document processing or invoicing.',
      features: ['Autonomous Decision Making', 'Real-time Threat Detection', 'Intelligent Process Automation'],
      color: 'teal',
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Conversational AI is more than just chatbots—it is a powerful assistant at everyone\'s fingertips. By engaging in human-like conversations and interpreting natural language, these virtual assistants streamline tasks, boost productivity, and enhance customer experiences.',
      features: ['Natural Language Understanding', 'Multi-channel Deployment', 'Contextual Awareness'],
      color: 'blue',
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      description: 'Accelerate content creation, personalization and development with generative AI. Our systems help draft customer communications, improve emails, generate code, and synthesize data based on learned patterns.',
      features: ['Content Generation', 'Code Synthesis', 'Data Augmentation'],
      color: 'purple',
    },
  ];

  // Service Offerings
  const serviceOfferings = [
    {
      icon: Bot,
      title: 'Custom AI Agent Development',
      description: 'Deploy production-grade intelligent agents built on high-performance cloud infrastructure. We specialize in creating agents that handle complex document processing, conversational interfaces, and intelligent workflow optimization.',
      borderColor: 'border-teal-500',
      iconColor: 'text-teal-400',
    },
    {
      icon: Brain,
      title: 'Multi-Agent Orchestration',
      description: 'Synchronize diverse AI models to solve multifaceted business challenges. We design systems where specialized agents collaborate seamlessly, governed by a central intelligence framework for maximum efficiency.',
      borderColor: 'border-blue-500',
      iconColor: 'text-blue-400',
    },
    {
      icon: Database,
      title: 'MCP Server Integration',
      description: 'Harness the power of Model Context Protocol (MCP) to connect your LLMs directly to your private data and tools, ensuring real-time accuracy and reducing hallucinations.',
      borderColor: 'border-purple-500',
      iconColor: 'text-purple-400',
    },
    {
      icon: Shield,
      title: 'Secure AI Governance',
      description: 'Implement robust safety protocols and compliance monitors. Our framework includes role-based access control (RBAC), audit trails, and automated privacy protection to keep your data secure.',
      borderColor: 'border-red-500',
      iconColor: 'text-red-400',
    },
    {
      icon: Code,
      title: 'Intelligent Content Processing',
      description: 'Automate the ingestion and analysis of massive textual datasets. Our AI summarization engines turn unstructured data into actionable business intelligence in seconds.',
      borderColor: 'border-yellow-500',
      iconColor: 'text-yellow-400',
    },
    {
      icon: Target,
      title: 'Strategic Transformation',
      description: 'A collaborative do-with approach to identifying high-value AI use cases. We build your team\'s autonomy while delivering production-ready solutions and full source code ownership.',
      borderColor: 'border-green-500',
      iconColor: 'text-green-400',
    },
  ];

  // How We Deliver
  const deliveryMethods = [
    {
      icon: Lightbulb,
      title: 'Experience and Expertise',
      description: 'In addition to our track record of designing and implementing complex cloud environments, VIK Consulting has a proven approach to designing, developing, and deploying AI solutions at scale.',
    },
    {
      icon: Users,
      title: 'Customer-Focused Partnership',
      description: 'We do more than simply deliver solutions for you—we create them with you. Our do-with approach ensures your team learns directly from our experts, fostering transparency, integrity, and hands-on collaboration at every stage.',
    },
    {
      icon: Rocket,
      title: 'Innovation at the Core',
      description: '"Good enough is never good enough." Our teams stay at the forefront of AI, from the latest frontier AI models to cutting-edge techniques for agentic reasoning, so you can harness the most advanced capabilities.',
    },
    {
      icon: Target,
      title: 'Proven AI that Delivers',
      description: 'We are a can-do company. In AI, that means taking on complexity with confidence—turning obstacles into opportunities. We do not just explore possibilities; we execute, delivering scalable AI solutions that drive meaningful transformation.',
    },
  ];

  // AWS Technologies
  const awsTechnologies = [
    { name: 'Amazon Bedrock', icon: Brain },
    { name: 'Amazon DynamoDB', icon: Database },
    { name: 'Amazon SageMaker', icon: LineChart },
    { name: 'AWS Lambda', icon: Zap },
    { name: 'Amazon ECS', icon: Cloud },
    { name: 'Amazon EKS', icon: Code },
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="label mb-6 block">Services</span>
            <h1 className="heading-xl text-white mb-8">
              Transform Your Business with{' '}
              <span className="text-gradient">AI</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Prepare Your Business for the Transformative Power of AI
            </p>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
              The future of business is here, and it is intelligent. AI is no longer a distant concept—it is a strategic imperative for companies seeking to stay competitive and resilient. From predicting customer needs to automating repetitive tasks, AI-driven solutions empower teams to work smarter, faster, and more securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Use Cases Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-6">
              AI <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              By integrating solutions like Agentic AI, Conversational AI, and Generative AI, you can create more efficient processes, drive deeper customer engagement, and seize new market opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {aiUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-glass rounded-2xl p-8 hover-lift"
              >
                <div className={`w-14 h-14 rounded-xl bg-${useCase.color}-500/10 flex items-center justify-center mb-6`}>
                  <useCase.icon className={`w-7 h-7 text-${useCase.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 text-${useCase.color}-400 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Accelerator CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 pointer-events-none" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Discover how our <span className="text-gradient">AI Accelerators</span> can empower enterprise teams
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Now is the time to embrace AI and harness its power to transform your organization. With VIK Consulting&apos;s AI Accelerators, you gain a trusted ally who understands both the promise and the practical realities of leveraging AI in today&apos;s digital world.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Make AI Work Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-6">
              Make AI Work for <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Successful AI adoption starts with a strategic approach—one that aligns technology with business goals, maximizes the value of your data, and ensures seamless adoption across your organization. VIK Consulting&apos;s proven methodology helps you identify opportunities, unlock insights, and drive meaningful change with AI.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Identify Opportunities',
                description: 'Begin with a clear vision of how AI can support your broader business objectives. Our AI consulting experts collaborate with you to identify high-impact opportunities where AI can have the greatest impact on your business, such as customer service, operations, or development.',
              },
              {
                title: 'Unlock the Power of Your Data',
                description: 'Data is the fuel that powers AI and, regardless of its state, it holds immense value. Our expertise ensures that you can extract meaningful value from your AI investments, regardless of where your data resides or its current state of organization.',
              },
              {
                title: 'Engage Stakeholders & Drive Adoption',
                description: 'We meet your teams where they are, providing the education, training, and support they need to explore and confidently implement AI solutions. By bringing everyone along on the journey, we help foster a culture of continuous learning and innovation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-glass rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6">
                  <span className="text-teal-400 font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Expertise</span>
            <h2 className="heading-lg text-white mb-6">
              Comprehensive <span className="text-gradient">GenAI Solutions</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We do not just build chatbots; we architect enterprise-grade AI ecosystems. From strategic roadmaps to custom multi-agent orchestration, VIK Consulting empowers your organization to lead the generative era.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`card-glass rounded-3xl p-8 border-l-4 ${service.borderColor} hover:scale-[1.02] transition-transform duration-300`}
              >
                <service.icon className={`w-10 h-10 ${service.iconColor} mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How VIK Delivers Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-6">
              How VIK Consulting Delivers <span className="text-gradient">AI Success</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Achieving AI success requires more than just technology—it demands the right expertise, execution, and strategic partnership. VIK Consulting combines deep cloud and AI experience with a customer-first approach to deliver scalable, outcome-driven solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {deliveryMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 card-glass rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-7 h-7 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AWS Technologies */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 pointer-events-none" />
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              AWS-Native <span className="text-gradient">Infrastructure</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We leverage the full power of AWS to build scalable, secure, and cost-effective AI solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {awsTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 glass px-6 py-3 rounded-full"
              >
                <tech.icon className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how VIK Consulting can help you harness the power of AI to drive innovation, efficiency, and growth.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

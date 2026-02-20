import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import BusinessOutcomes from '../sections/BusinessOutcomes';
import Solutions from '../sections/Solutions';
import Accelerator from '../sections/Accelerator';
import Testimonials from '../sections/Testimonials';
import ContactForm from '../sections/ContactForm';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <BusinessOutcomes />
      <Solutions />
      <Accelerator />
      <Testimonials />
      <ContactForm />
    </motion.div>
  );
};

export default Home;

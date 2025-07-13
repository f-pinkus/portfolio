import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactInfo, resumeURL } from '../data/portfolioData';

const Contact = () => {
  const [ref, isInView] = useScrollAnimation();

  const wiggleAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.6, ease: "easeInOut" }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1, ...wiggleAnimation } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </motion.a>
            
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200"
            >
              <Download size={20} />
              <span>Download Résumé</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
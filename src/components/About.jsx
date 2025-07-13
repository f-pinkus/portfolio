import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { funFacts } from '../data/portfolioData';

const About = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 text-center max-w-3xl mx-auto"
          >
            I'm a software developer who enjoys building clean, user-friendly web apps. 
            I like turning ideas into working products and learning new tools along the way.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ y: 25, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  delay: 0.4 + (index * 0.2), 
                  duration: 0.4 
                }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {fact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
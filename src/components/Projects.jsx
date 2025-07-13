import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
      </motion.div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProject = ({ project, imageRight = false }) => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${imageRight ? 'md:grid-flow-col-dense' : ''}`}
    >
      <div className={imageRight ? 'md:col-start-2' : ''}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-300"
          />
        </motion.div>
      </div>
      
      <div className={imageRight ? 'md:col-start-1 md:row-start-1' : ''}>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h3>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github size={18} />
            <span>View Code</span>
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, isInView] = useScrollAnimation();
  
  const featuredProjects = projects.filter(p => p.id === 'capstone' || p.id === 'mini-capstone');
  const otherProjects = projects.filter(p => p.id !== 'capstone' && p.id !== 'mini-capstone');

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Featured Projects
          </h2>
          
          {/* Featured Projects with Zig-Zag Layout */}
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              imageRight={index % 2 === 1}
            />
          ))}
          
          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <>
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 mt-20">
                Other Projects
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
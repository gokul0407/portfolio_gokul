import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'News Research Tool',
      description: 'Developed a comprehensive news research tool with News API integration for daily updates, offering article summarization, keyword extraction, and access to past news by date.',
      technologies: ['Python', 'Django', 'News API', 'NLP'],
      year: '2024',
      features: [
        'Real-time news API integration',
        'Article summarization using NLP',
        'Keyword extraction algorithms',
        'Historical news data access',
        'User-friendly web interface'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Text-to-Speech & Speech-to-Text System',
      description: 'Built a voice interaction system that converts text to speech and speech to text using advanced NLP tools. Optimized for real-time performance to support accessible and hands-free application use.',
      technologies: ['Python', 'Flask', 'Pyttsx3', 'Pytesseract', 'Tesseract OCR'],
      year: '2024',
      features: [
        'Real-time speech recognition',
        'Natural text-to-speech conversion',
        'OCR text extraction',
        'Accessibility-focused design',
        'Cross-platform compatibility'
      ],
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'Text Generation using GPT',
      description: 'Developed a text generation tool utilizing the GPT model to generate coherent, contextually relevant text based on user-given prompts. Fine-tuned GPT models on specific datasets to optimize for desired writing styles.',
      technologies: ['Python', 'GPT-2', 'TensorFlow', 'Transformers'],
      year: '2024',
      features: [
        'GPT model integration',
        'Custom prompt processing',
        'Context-aware text generation',
        'Style-specific fine-tuning',
        'Interactive web interface'
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

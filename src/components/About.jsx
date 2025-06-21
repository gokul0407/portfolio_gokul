import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Experienced in building ML models for predictive analysis and data preprocessing'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in MERN stack with expertise in building scalable web applications'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Skilled in data analysis tools like Pandas, NumPy, and data visualization'
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Adaptive learner with multiple certifications and hands-on project experience'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a B.Tech AI & Data Science student at Sri Eshwar College of Engineering, I've been passionate about 
                leveraging technology to solve real-world problems. My journey has been enriched with hands-on experience 
                in machine learning, full-stack development, and data analysis.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Through internships at RV Techlearn and V3 Analytics, I've developed secure APIs, built authentication 
                systems, and created ML models for predictive analysis. I'm always eager to learn new technologies 
                and apply my skills in innovative ways.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">7.5</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">6+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
    title: 'ReactJs',
    provider: 'Coursera',
    year: '2025',
    description: 'Comprehensive course on building interactive user interfaces using React, including hooks, state management, and component design.',
    color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Supervised Machine Learning',
      provider: 'Coursera',
      year: '2025',
      description: 'Comprehensive course covering supervised learning algorithms, model evaluation, and practical implementations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Structured Query Language (SQL)',
      provider: 'HackerRank',
      year: '2024',
      description: 'Advanced SQL certification covering database design, complex queries, and performance optimization.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JavaScript Programming Language',
      provider: 'Udemy',
      year: '2024',
      description: 'Complete JavaScript course covering ES6+, DOM manipulation, async programming, and modern frameworks.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Data Structures and Algorithms using C',
      provider: 'Udemy',
      year: '2023',
      description: 'Comprehensive DSA course covering fundamental algorithms, data structures, and problem-solving techniques.',
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Java Programming',
      provider: 'Udemy',
      year: '2023',
      description: 'Complete Java programming course covering OOP concepts, collections, multithreading, and enterprise development.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Certificate Header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Award size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="text-blue-400 font-medium mb-4">
                  {cert.provider}
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">View Certificate</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.TECH (AI-DS)',
      institution: 'Sri Eshwar College of Engineering',
      duration: '2022-2026',
      grade: '7.5 CGPA (up to 5th sem)',
      description:
        'Specialized in Artificial Intelligence and Data Science with focus on machine learning, deep learning, and data analytics.',
      highlights: [
        'Core subjects: Machine Learning, Deep Learning, Data Structures',
        'Projects in AI/ML and full-stack development',
        'Active participation in technical events and hackathons',
      ],
    },
    {
      degree: 'HSC (Higher Secondary)',
      institution: 'MDN Future School',
      duration: '2020-2022',
      grade: '72%',
      description:
        'Completed higher secondary education with Mathematics, Physics, Chemistry, and Computer Science.',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Introduction to Computer Science fundamentals',
        'Academic excellence and consistent performance',
      ],
    },
    {
      degree: 'SSLC (Secondary School)',
      institution: 'Nava Barath National School',
      duration: '2019-2020',
      grade: '73%',
      description:
        'Completed secondary education with excellent academic performance and well-rounded development.',
      highlights: [
        'Solid academic foundation across all subjects',
        'Developed strong analytical and problem-solving skills',
        'Active participation in school activities',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-600 hidden md:block"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 hidden md:block"></div>

              <div className="md:ml-16 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <GraduationCap size={16} />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={16} />
                        <span className="text-blue-400 font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

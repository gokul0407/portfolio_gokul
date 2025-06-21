import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'RV Techlearn',
      duration: '2024',
      location: 'Remote',
      description:
        'Developed secure APIs and handled database connections for dynamic web applications. Collaborated with a team to build user authentication and full-stack components.',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Express.js'],
      highlights: [
        'Built secure REST APIs with authentication',
        'Implemented database connections and queries',
        'Collaborated on user authentication systems',
        'Developed full-stack web components',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'V3 Analytics',
      duration: '2024',
      location: 'Remote',
      description:
        'Built ML models for predictive analysis. Worked on data preprocessing, model evaluation, and deployment using Python and various ML libraries.',
      technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
      highlights: [
        'Developed ML models for predictive analysis',
        'Performed data preprocessing and cleaning',
        'Conducted model evaluation and optimization',
        'Assisted in model deployment processes',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
             <span className="text-blue-400">InternShip</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-600 hidden md:block"></div>
              )}

              <div className="absolute left-4 top-8 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 hidden md:block"></div>

              <div className="md:ml-16 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

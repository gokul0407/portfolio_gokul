import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Gokul <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">K</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
          >
            AI & Data Science Developer
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            B.Tech AI & Data Science student with hands-on experience in machine learning and full-stack development. 
            Passionate about creating intelligent solutions and building scalable applications.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
        <a href="src\res\Gokul K .pdf" download>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/gokul0407', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/gokul-k1604/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:gokulk1604@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+919345881218', label: 'Phone' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

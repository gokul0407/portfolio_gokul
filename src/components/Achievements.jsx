import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code, Zap, Target, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'LeetCode Excellence',
      description: 'Top 33.19% | Contest Rating: 1539 | Badge in Introduction to Pandas',
      stats: 'Top 33.19%',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'CodeChef Recognition',
      description: '1 star | Bronze badge | Highest Rating: 979',
      stats: '1 Star',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'HackerRank Badges',
      description: 'Badge in Java, SQL | SQL certificates',
      stats: 'Multiple Badges',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Ideathon Participation',
      description: 'Intellina (Ideathon) at Coimbatore Institute of Technology (CIT)',
      stats: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Java-DB Leap',
      description: 'Java-DBMS project expo in intra college event',
      stats: '2023',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Web Development Hackathon',
      description: 'Hackathon on web development at Karpagam Institution',
      stats: '2025',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const platformLinks = [
    {
      platform: 'LeetCode',
      username: 'gokul_16',
      url: 'https://leetcode.com/u/gokul_16/',
      color: 'bg-yellow-500'
    },
    {
      platform: 'CodeChef',
      username: 'go_kul10',
      url: 'https://www.codechef.com/users/go_kul10',
      color: 'bg-blue-500'
    },
    {
      platform: 'HackerRank',
      username: 'gokul_k2022ai_ds',
      url: 'https://www.hackerrank.com/profile/gokul_k2022ai_ds',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-blue-400 font-bold text-sm">{achievement.stats}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Platform Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Coding Profiles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {platformLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300"
              >
                <div className={`w-3 h-3 rounded-full ${link.color}`}></div>
                <div>
                  <div className="text-white font-semibold">{link.platform}</div>
                  <div className="text-gray-400 text-sm">{link.username}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import type { Skill } from '../types';

const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript']
  },
  {
    category: 'Backend Development',
    items: ['Spring Boot', 'Java', 'RESTful APIs', 'Microservices']
  },
  {
    category: 'Databases & Cloud',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'AWS Basics']
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'Docker', 'Jenkins', 'Maven', 'Postman']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
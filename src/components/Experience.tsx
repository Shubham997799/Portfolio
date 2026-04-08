import React from 'react';
import type { Experience } from '../types';

const experienceList: Experience[] = [
  {
    company: 'Intouch Consumer Care Solutions Pvt. Ltd. India',
    position: 'Software Developer',
    duration: 'Oct 2025 - Present',
    description: [
      'Working on migration of legacy systems (Core PHP and Java 6) to Laravel framework',
      'Contributing to development of ERP system, POS system, and ordering platform',
      'Designed and integrated REST APIs for seamless communication between systems',
      'Implemented payment gateway integrations for secure transaction processing',
      'Used Redis for caching and improving system performance',
      'Collaborated with cross-functional teams to deliver scalable and maintainable solutions',
      'Performed debugging, performance optimization, and code refactoring'
    ],
    technologies: ['PHP', 'Java', 'Laravel', 'Redis', 'REST APIs', 'MySQL']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {exp.duration}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src="/intouch-consumer-care-solutions.jpg" 
                    alt={exp.company}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              <div className="mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
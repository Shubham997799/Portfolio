import React from 'react';
import type { Education } from '../types';

const educationList: Education[] = [
  {
    institution: 'CDAC Hyderabad, Telangana, India',
    degree: 'PG-DAC',
    year: 'Aug 2024 - Feb 2025',
    percentage: '61%'
  },
  {
    institution: 'RMD Sinhgad School of Engineering, Pune, India',
    degree: 'Bachelor of Engineering - Mechanical',
    year: 'Aug 2017 - Aug 2022',
    percentage: '7.75 GPA'
  },
  {
    institution: 'B.H. Chate School and Junior College, Khed-Shivapur, India',
    degree: 'Intermediate',
    year: 'March 2017',
    percentage: '72.61%'
  },
  {
    institution: 'Shankarrao Butte Patil Vidyalaya, Junnar, Pune, India',
    degree: 'Matriculation',
    year: 'March 2015',
    percentage: '89.60%'
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.institution}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
              <p className="text-blue-600 dark:text-blue-400">{edu.year}</p>
              <p className="text-gray-700 dark:text-gray-400">Percentage: {edu.percentage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

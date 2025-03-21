import React from 'react';
import type { Certification } from '../types';

const certifications: Certification[] = [
  {
    title: 'C Language',
    issuer: 'Phoenix InfoTech, Pune',
    image: '/C_LANGUAGE.jpg'
  },
  {
    title: 'Python OOP',
    issuer: 'LinkedIn Learning',
    image: '/PYthon OOP.jpg'
  },
  {
    title: 'Python',
    issuer: 'Phoenix InfoTech, Pune',
    image: '/PYTHON.jpg'
  },
  {
    title: 'Java',
    issuer: 'EduComp Softech, Pune',
    image: '/JAVA.jpg'
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Issued by {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

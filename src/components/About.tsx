import React from 'react';
import { Code2, Database, Server, PenTool as Tool } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate Software Engineer with a strong foundation in full-stack development.
              My journey began with mechanical engineering, but my love for coding led me to pursue
              PG-DAC from CDAC Hyderabad.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I specialize in building robust web applications using modern technologies and best practices.
              My experience spans across frontend development with React.js, backend development with
              Spring Boot, and database management with MySQL and MongoDB.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <Code2 className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frontend Dev
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern UI/UX with React.js
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <Server className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Backend Dev
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Robust APIs with Spring Boot
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <Database className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Databases
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                MySQL & MongoDB expertise
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <Tool className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Git, Docker, & Cloud platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
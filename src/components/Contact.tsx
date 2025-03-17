import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <a
              href="mailto:tateshubham549@gmail.com"
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-4 text-gray-900 dark:text-white">tateshubham549@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/shubham-tate-48703734b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-4 text-gray-900 dark:text-white">LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/Shubham997799"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="ml-4 text-gray-900 dark:text-white">GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
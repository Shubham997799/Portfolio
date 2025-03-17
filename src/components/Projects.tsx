import React from 'react';
import { Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Restaurant Management Platform',
    description: 'A comprehensive platform for restaurant management including order processing, inventory management, and customer relationship management.',
    techStack: ['React.js', 'Spring Boot', 'MongoDB'],
    githubLink: 'https://github.com/Shubham997799/restaurant-management',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop'
  },
  {
    title: 'Human Capital Management System (HCMS)',
    description: 'An integrated system for managing employee data, attendance, payroll, and performance evaluations.',
    techStack: ['React', 'Spring Boot', 'MySQL'],
    githubLink: 'https://github.com/Shubham997799/hcms',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=400&fit=crop'
  },
  {
    title: 'WealthConnect',
    description: 'A financial management application for tracking investments, expenses, and generating financial reports.',
    techStack: ['React.js', 'Spring Boot', 'MySQL'],
    githubLink: 'https://github.com/Shubham997799/wealth-connect',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    title: 'Self-Charging Electric Vehicle Prototype',
    description: 'Innovative mechanical engineering project focusing on sustainable transportation solutions.',
    techStack: ['CATIA', 'SolidWorks'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=400&fit=crop'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Download, ChevronDown, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shubham Tate</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
              PG-DAC graduate with expertise in Full-Stack Development specializing in React, 
              Spring Boot, Java, and MySQL. Passionate about creating efficient and scalable solutions.
            </p>

            {/* Buttons - Resume Download & View Projects */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <a
                href="/Resume/TateShubham_Resume.pdf"
                download="ShubhamTate_Resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-64}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 
                text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              >
                View Projects
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/Shubham997799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/shubham-tate-48703734b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:tateshubham549@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+918380941519"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 
              border-white dark:border-gray-800 shadow-xl">
              <img
                src="/Shubham1.jpg"
                alt="Shubham Tate"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link to="about" smooth={true} duration={500} offset={-64} className="cursor-pointer">
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 hidden xl:flex flex-col space-y-3">
      <a
        href="https://github.com/sutapa703"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group hover:scale-110"
      >
        <Github className="text-gray-400 group-hover:text-white" size={18} />
      </a>
      
      <a
        href="https://www.linkedin.com/in/sutapa-maity-7b0521311"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group hover:scale-110"
      >
        <Linkedin className="text-gray-400 group-hover:text-blue-400" size={18} />
      </a>
      
      <a
        href="mailto:sutapam510@gmail.com"
        className="p-2.5 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group hover:scale-110"
      >
        <Mail className="text-gray-400 group-hover:text-yellow-400" size={18} />
      </a>
      
      <a
        href="https://x.com/sutapa141"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group hover:scale-110"
      >
        <Twitter className="text-gray-400 group-hover:text-sky-400" size={18} />
      </a>
    </div>
  );
};

export default SocialSidebar;
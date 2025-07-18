import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'ShopNow',
    description: 'A modern e-commerce platform with secure payments and intuitive user experience.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/sutapa703/e-commerce',
    demo: 'https://e-commerce-teal-iota-41.vercel.app/',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Portfolio Website',
    description: 'This personal portfolio showcasing my work and creative journey.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/sutapa703/Portfolio-sm',
    demo: 'https://sutapaheree.vercel.app/',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'ForeSee',
    description: 'Real-time weather dashboard with beautiful animations and detailed forecasts.',
    techStack: ['React', 'API Integration', 'Chart.js', 'CSS3'],
    github: 'https://github.com/sutapa703/ForeSee',
    demo: 'https://foresee-wine.vercel.app/',
    image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Glowzy',
    description: 'Beauty care companion app with personalized routines and product recommendations.',
    techStack: ['React Native', 'Firebase', 'Node.js', 'AI/ML'],
    github: 'https://github.com/sutapa703/glowzyy',
    demo: 'https://glowzykit.vercel.app/auth',
    image: 'https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Texo',
    description: 'AI-powered text generator with multiple writing styles and templates.',
    techStack: ['React', 'OpenAI API', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/sutapa703/texoo',
    demo: 'https://texoo.vercel.app/',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Doquo',
    description: 'Smart task management app with team collaboration and progress tracking.',
    techStack: ['React', 'Redux', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/sutapa703/DOQUO-FINAL',
    demo: 'https://doquo-final-seven.vercel.app/',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Fitzy',
    description: 'Comprehensive fitness and health tracker with workout plans and nutrition guides.',
    techStack: ['React Native', 'Firebase', 'Health APIs', 'Charts'],
    github: 'https://github.com/sutapa703/fitzy-tracker',
    demo: 'https://fitzy-ez.netlify.app/',
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Petverse',
    description: 'Pet care and adoption platform connecting pet lovers with furry friends.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/sutapa703/PetVerse',
    demo: 'https://petverse-sm.vercel.app/',
    image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'ElderEase',
    description: 'Senior citizen support app with health monitoring and emergency features.',
    techStack: ['React Native', 'Firebase', 'Health APIs', 'Geolocation'],
    github: 'https://github.com/sutapa703/ElderEase',
    demo: 'https://elder-ease.netlify.app/',
    image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Sync',
    description: 'Real-time collaboration tool for teams with video calls and file sharing.',
    techStack: ['React', 'Socket.io', 'WebRTC', 'Express.js'],
    github: 'https://github.com/sutapa703/Sync',
    demo: 'https://screenrec.com/share/mAyC8J0jQ1',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'YapYap',
    description: 'Modern social media app with real-time messaging and content sharing.',
    techStack: ['React', 'Socket.io', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/sutapa703/YapYap',
    demo: 'https://screenrec.com/share/RoL7dZbywW',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Mindbridge',
    description: 'Memory illness companion app with cognitive exercises and family support.',
    techStack: ['React Native', 'Firebase', 'AI/ML', 'Health APIs'],
    github: 'https://github.com/sutapa703/MindBridge',
    demo: 'https://mindbridge-pro.netlify.app/',
    image: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Princessia',
    description: 'Disney princess virtual pet app with interactive games and care activities.',
    techStack: ['React Native', 'Firebase', 'Animations', 'Game Logic'],
    github: 'https://github.com/sutapa703/Princessia',
    demo: 'https://princessiav1.netlify.app/',
    image: 'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

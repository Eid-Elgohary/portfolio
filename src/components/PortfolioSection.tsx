
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  bgColor: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  bgColor 
}) => {
  return (
    <Card className={`${bgColor} border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group`}>
      <CardContent className="p-6">
        <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-4 flex items-center justify-center">
          <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">{image}</span>
          </div>
        </div>
        
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-purple-600/30 text-purple-300 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
          )}
          {githubUrl && (
            <button className="flex items-center gap-2 bg-purple-700/50 hover:bg-purple-600/50 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              <Github className="w-4 h-4" />
              Code
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      bgColor: "bg-gradient-to-br from-green-900/50 to-purple-800/30",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "🌤️",
      technologies: ["React", "TypeScript", "API Integration", "Charts"],
      bgColor: "bg-gradient-to-br from-cyan-900/50 to-purple-800/30",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media management with data visualization and reporting features.",
      image: "📊",
      technologies: ["Vue.js", "D3.js", "Python", "REST API"],
      bgColor: "bg-gradient-to-br from-pink-900/50 to-purple-800/30",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            UI/UX design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

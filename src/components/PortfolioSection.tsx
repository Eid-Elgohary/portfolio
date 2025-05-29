import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Ecommerce from "../../src/imgs/e-commerce.png";
import portfolio from "../../src/imgs/portfolio.png";

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
  bgColor,
}) => {
  return (
    <Card
      className={`${bgColor} border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group`}
    >
      <CardContent className="p-6">
        <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-4 flex items-center justify-center">
          <img src={image} className="w-full h-auto rounded-lg" alt="" />
        </div>

        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-700 text-purple-200 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-700/50 hover:bg-purple-600/50 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
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
      description:
        "FreshCart is a modern and responsive e-commerce front-end built with React. The project features essential pages such as Home, Products, Product Details, Cart, Wishlist, and Login. It utilizes Styled Components for component-level styling and leverages several libraries to enhance user experience and interface functionality. The app is structured using React Router for navigation and Context API for state management, ensuring clean code and smooth user interaction.",
      image: Ecommerce,
      technologies: [
        "React",
        "styled components",
        "react-helmet",
        "react-hook-form",
        "react-icons",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://fresh-cart-aqer.vercel.app/",
      githubUrl: "https://github.com/Eid-Elgohary/fresh-cart.git",
    },
    {
      title: "portfolio",
      description:
        "A personal portfolio website designed to showcase my front-end development skills, projects, and professional background. Built using modern web technologies and generated with the help of artificial intelligence to save development time and stay aligned with the latest advancements in technology—especially in AI.",
      image: portfolio,
      technologies: [
        "next.js",
        "tailwindcss",
        "typescript",
        "react-hook-form",
        "lucide-react",
      ],
      bgColor: "bg-gradient-to-br from-blue-900/50 to-purple-800/30",
      liveUrl: "https://portfolio-ashen-omega-44.vercel.app/",
      githubUrl: "https://github.com/Eid-Elgohary/portfolio.git",
    },
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

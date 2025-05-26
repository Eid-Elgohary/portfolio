
import React from 'react';
import { Code, Palette, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, JavaScript",
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Experience",
      color: "from-purple-500/20 to-purple-600/10"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Algorithm Design, System Architecture",
      color: "from-green-500/20 to-green-600/10"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Practices",
      description: "Clean Code, Testing, Performance",
      color: "from-orange-500/20 to-orange-600/10"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate software engineer with 3+ years of experience creating 
            beautiful and functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${skill.color} border border-purple-700/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105`}
            >
              <div className="text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-700/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                Started as a self-taught developer, I've grown into a full-stack engineer 
                who loves creating meaningful digital products. My passion lies in the 
                intersection of design and technology.
              </p>
              <p className="text-gray-300">
                Currently working at Facebook as a Software Engineer, where I contribute 
                to building scalable applications used by millions of users worldwide.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">IB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface WorkItemProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <Card className={`${bgColor} border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center text-2xl`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkSection = () => {
  const workItems = [
    {
      icon: '🔮',
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      bgColor: 'bg-gradient-to-br from-purple-900/50 to-purple-800/30',
      iconColor: 'bg-purple-600'
    },
    {
      icon: '🌸',
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      bgColor: 'bg-gradient-to-br from-pink-900/50 to-purple-800/30',
      iconColor: 'bg-pink-600'
    },
    {
      icon: '🛡️',
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      bgColor: 'bg-gradient-to-br from-blue-900/50 to-purple-800/30',
      iconColor: 'bg-blue-600'
    },
    {
      icon: '💎',
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      bgColor: 'bg-gradient-to-br from-indigo-900/50 to-purple-800/30',
      iconColor: 'bg-indigo-600'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-16">
          Work Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workItems.map((item, index) => (
            <WorkItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

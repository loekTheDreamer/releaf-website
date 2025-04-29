
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  const animationDelay = `${delay * 100}ms`;
  
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-releaf-green">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

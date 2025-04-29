
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TeamMember = ({ name, role, image, delay = 0 }: TeamMemberProps) => {
  const animationDelay = `${delay * 100}ms`;
  
  return (
    <div className="flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay }}>
      <div className="mb-4 w-[200px] h-[200px] overflow-hidden rounded-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;

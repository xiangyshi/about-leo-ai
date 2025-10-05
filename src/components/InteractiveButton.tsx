"use client";

import React, { useState } from 'react';

interface InteractiveButtonProps {
  initialText?: string;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  initialText = "Click me!" 
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        px-4 py-2 rounded-md transition-all duration-200
        ${isHovered ? 'bg-blue-600' : 'bg-blue-500'}
        text-white font-medium
        transform ${isHovered ? 'scale-105' : 'scale-100'}
      `}
    >
      {initialText} (Clicked: {clickCount} times)
    </button>
  );
};

export default InteractiveButton; 
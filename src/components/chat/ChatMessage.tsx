"use client";

import React from 'react';

interface ChatMessageProps {
  content: string;
  role: 'user' | 'assistant';
  timestamp?: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, role, timestamp }) => {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`
        max-w-[70%] rounded-lg p-3
        ${role === 'user' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-100 text-gray-800'
        }
      `}>
        <p className="text-sm">{content}</p>
        {timestamp && (
          <span className="text-xs opacity-70 mt-1 block">
            {timestamp.toLocaleTimeString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage; 
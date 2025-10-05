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
        max-w-[80%] rounded-2xl p-4 relative
        ${role === 'user' 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white ai-glow' 
          : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-blue-200 ai-glow-purple'
        }
      `}>
        {role === 'assistant' && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-xs">
              🤖
            </div>
            <span className="text-xs text-blue-600 font-medium">AI Assistant</span>
          </div>
        )}
        
        <p className="text-sm leading-relaxed">{content}</p>
        
        {timestamp && (
          <span className="text-xs opacity-70 mt-2 block">
            {timestamp.toLocaleTimeString()}
          </span>
        )}
        
        {/* Message tail */}
        <div className={`
          absolute top-4 w-0 h-0
          ${role === 'user' 
            ? 'right-[-8px] border-l-[8px] border-l-blue-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent' 
            : 'left-[-8px] border-r-[8px] border-r-blue-200 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent'
          }
        `}></div>
      </div>
    </div>
  );
};

export default ChatMessage; 
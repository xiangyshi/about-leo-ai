"use client";

import React, { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 backdrop-blur-sm p-4 border-t border-blue-200">
      <div className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about Leo..."
            disabled={isLoading}
            className="w-full p-4 bg-white border border-blue-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ai-glow transition-all duration-300"
          />
        </div>
        
        <button
          onClick={handleSend}
          disabled={isLoading || !message.trim()}
          className={`
            px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2
            ${isLoading || !message.trim()
              ? 'bg-gray-300 cursor-not-allowed text-gray-500'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white ai-glow hover:scale-105'
            }
          `}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send</span>
              <div className="text-lg">🚀</div>
            </>
          )}
        </button>
      </div>
      
      {/* Typing indicator */}
      {message && (
        <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
          <span>Ready to send</span>
        </div>
      )}
    </div>
  );
};

export default ChatInput; 
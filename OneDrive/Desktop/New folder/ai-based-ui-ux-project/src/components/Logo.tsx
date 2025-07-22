import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white">
          AI<span className="gradient-text-purple">Design</span>
        </span>
        <span className="text-xs text-gray-400 -mt-1">Platform</span>
      </div>
    </div>
  );
};

export default Logo;

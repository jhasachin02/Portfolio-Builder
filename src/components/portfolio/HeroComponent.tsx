import React from 'react';

interface HeroComponentProps {
  data: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    backgroundImage?: string;
  };
}

export const HeroComponent: React.FC<HeroComponentProps> = ({ data }) => {
  const {
    title = "Your Name",
    subtitle = "Professional Title",
    description = "Brief description about yourself and your expertise.",
    buttonText = "View My Work"
  } = data;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8 text-blue-100">
          {subtitle}
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
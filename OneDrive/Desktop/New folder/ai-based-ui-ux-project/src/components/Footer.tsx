import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-auto border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 AI Platform. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

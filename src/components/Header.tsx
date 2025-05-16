import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent text-white">
      {/* Logo (replace src with your actual logo path) */}
      <div className="flex items-center gap-2">
        <img src="/images/Logo.svg" alt="Ophira Logo" className="h-8 w-8" />
        <span className="text-xl font-bold hidden md:inline">Ophira</span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 text-sm">
        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
          <Globe size={16} />
          <span>ENG</span>
          <ChevronDown size={14} />
        </div>

        {/* Profile Button (e.g., FB) */}
        <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
          FB
        </div>
      </div>
    </header>
  );
};

export default Header;

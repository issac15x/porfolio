import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "./LangContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          _Issac15x
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 items-center">
          {/* Language Switch */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-white  cursor-pointer transition"
          >
            <Globe size={18} />
            {lang}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-indigo-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 transition-colors">
          <nav className="flex flex-col items-center py-3 space-y-3">
            {/* Language Switch (mobile) */}
            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-indigo-50 transition"
            >
              <Globe size={18} />
              {lang}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

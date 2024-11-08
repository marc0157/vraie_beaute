import React from 'react';
import { Menu, X, ShoppingCart, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-gray-600'} shadow-lg fixed w-full z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img 
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2wydWU0bzBtNXA4OWRxYWFtNXY3YmNub2plYnZlYzV2ZDU2NWZsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9aSVde4cr0bHxswBZn/giphy.gif" 
              alt="Vraie Beauté Logo" 
              className="h-16"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-amber-400 neon-text hover:text-amber-300 font-medium">Inicio</a>
            <a href="#productos" className="text-amber-400 neon-text hover:text-amber-300 font-medium">Productos</a>
            <a href="#contacto" className="text-amber-400 neon-text hover:text-amber-300 font-medium">Contacto</a>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-amber-400 neon-text hover:text-amber-300 p-2 rounded-lg"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            
            <button className="bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-rose-700 transition">
              <ShoppingCart size={20} />
              Carrito (0)
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-amber-400 neon-text hover:text-amber-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-400 neon-text hover:text-amber-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-600'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-amber-400 neon-text hover:text-amber-300">Inicio</a>
            <a href="#productos" className="block px-3 py-2 text-amber-400 neon-text hover:text-amber-300">Productos</a>
            <a href="#contacto" className="block px-3 py-2 text-amber-400 neon-text hover:text-amber-300">Contacto</a>
            <button className="w-full mt-2 bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-rose-700 transition">
              <ShoppingCart size={20} />
              Carrito (0)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
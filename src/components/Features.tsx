import React from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50"> {/* Cambiado a bg-gray-900 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2wydWU0bzBtNXA4OWRxYWFtNXY3YmNub2plYnZlYzV2ZDU2NWZsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9aSVde4cr0bHxswBZn/giphy.gif" 
              alt="Vraie Beauté Logo" 
              className="h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-100 hover:text-rose-400">Inicio</a> {/* Cambiado a texto claro */}
            <a href="#productos" className="text-gray-100 hover:text-rose-400">Productos</a>
            <a href="#contacto" className="text-gray-100 hover:text-rose-400">Contacto</a>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-rose-700 transition">
              <ShoppingCart size={20} />
              Carrito (0)
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-rose-400" // Cambiado a texto claro
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900"> {/* Cambiado el fondo del menú móvil */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-100 hover:text-rose-400">Inicio</a> {/* Cambiado a texto claro */}
            <a href="#productos" className="block px-3 py-2 text-gray-100 hover:text-rose-400">Productos</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-100 hover:text-rose-400">Contacto</a>
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

import React from 'react';
import { MessageCircle, Facebook } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/51913877900`, '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com', '_blank');
  };

  return (
    <div id="contacto" className={`bg-white py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Redes Sociales</h3>
            <div className="flex flex-col space-y-6">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-4 text-green-600 hover:text-green-700 transition-colors p-4 rounded-lg hover:bg-gray-100"
              >
                <MessageCircle size={32} />
                <div>
                  <p className="font-medium text-lg">WhatsApp</p>
                  <p className="text-gray-600">+51 913 877 900</p>
                </div>
              </button>
              <button
                onClick={handleFacebookClick}
                className="flex items-center gap-4 text-blue-600 hover:text-blue-700 transition-colors p-4 rounded-lg hover:bg-gray-100"
              >
                <Facebook size={32} />
                <div>
                  <p className="font-medium text-lg">Facebook</p>
                  <p className="text-gray-600">Síguenos en Facebook</p>
                </div>
              </button>
            </div>
          </div>

          <form className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
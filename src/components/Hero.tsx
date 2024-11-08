import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="inicio" className="relative bg-gradient-to-r from-indigo-600 to-purple-600 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Descubre ESTE</span>
            <span className="block text-indigo-200">Una Nueva Experiencia</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explora una plataforma diseñada para transformar tu experiencia digital con herramientas innovadoras y diseño intuitivo.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-50 transition">
              Comenzar
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition">
              Saber más
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
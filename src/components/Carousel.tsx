import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
    title: 'Nueva Colección Primavera',
    description: 'Descubre las últimas tendencias'
  },
  {
    url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
    title: 'Ofertas Especiales',
    description: 'Hasta 50% de descuento'
  },
  {
    url: 'https://images.unsplash.com/photo-1470082719408-b2843ab5c9ab',
    title: 'Ropa Exclusiva',
    description: 'Diseños únicos para ti'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    title: 'Colección Verano',
    description: 'Prepárate para el sol'
  },
  {
    url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc',
    title: 'Accesorios de Moda',
    description: 'Complementa tu estilo'
  },
  {
    url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    title: 'Moda Urbana',
    description: 'Estilo para la ciudad'
  },
  {
    url: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe',
    title: 'Colección Elegante',
    description: 'Para ocasiones especiales'
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Cambiado a 3 segundos
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-screen pt-16 group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute inset-0 bg-black/30">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{slides[currentIndex].title}</h1>
              <p className="text-xl md:text-2xl">{slides[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <ChevronLeft size={30} />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
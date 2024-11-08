import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Desarrollo Web'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    title: 'Colaboración'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Análisis'
  },
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    title: 'Equipo'
  }
];

export default function Gallery() {
  return (
    <div id="galeria" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galería
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explora nuestro trabajo visual
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
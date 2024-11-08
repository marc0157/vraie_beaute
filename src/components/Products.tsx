import React, { useState } from 'react';
import { ShoppingBag, X, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Vestido Floral',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
      'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
    ],
    description: 'Elegante vestido floral perfecto para ocasiones especiales',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: [
      'Material: 100% Algodón',
      'Estampado floral',
      'Ideal para primavera/verano',
      'Lavado en máquina',
      'Hecho en España'
    ]
  },
  // ... Repite la misma estructura para los otros 6 productos
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div id="productos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre nuestra colección exclusiva
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
              onClick={() => openModal(product)}
            >
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-600">${product.price}</span>
                  <button 
                    className="bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-rose-700 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Lógica del carrito
                    }}
                  >
                    <ShoppingBag size={20} />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de producto */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500"
                  onClick={closeModal}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* Carrusel de imágenes */}
                <div className="relative">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Información del producto */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                    <p className="text-3xl font-bold text-rose-600 mt-2">${selectedProduct.price}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Descripción</h4>
                    <p className="mt-2 text-gray-600">{selectedProduct.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Tallas Disponibles</h4>
                    <div className="mt-2 flex gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border rounded-md hover:border-rose-600 hover:text-rose-600"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">Detalles del Producto</h4>
                    <ul className="mt-2 space-y-2">
                      {selectedProduct.details.map((detail, index) => (
                        <li key={index} className="text-gray-600">• {detail}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-rose-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-rose-700 transition">
                    <ShoppingBag size={20} />
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
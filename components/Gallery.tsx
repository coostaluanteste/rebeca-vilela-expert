
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ImageData } from '../types';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<ImageData['category'] | 'all'>('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'antes-depois', label: 'Antes & Depois' },
    { id: 'feedback', label: 'Feedbacks' },
    { id: 'botox', label: 'Botox' },
    { id: 'criancas', label: 'Infantil' },
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar mb-6 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === cat.id 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4">
        {filteredImages.map((img, idx) => (
          <div 
            key={idx} 
            className="aspect-square bg-slate-200 rounded-lg overflow-hidden relative cursor-pointer group"
            onClick={() => setSelectedImg(img.url)}
          >
            <img 
              src={img.url} 
              alt={img.category} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      <p className="text-center text-[10px] text-slate-400 mt-4 px-6 italic">
        * Resultados podem variar de pessoa para pessoa. Fotos autorizadas para fins informativos.
      </p>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl">&times;</button>
          <img 
            src={selectedImg} 
            alt="Resultado" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
          />
        </div>
      )}
    </div>
  );
};

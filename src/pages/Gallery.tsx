import { useState } from 'react';
import { galleryPhotos } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="space-y-12 pb-24">
      <header>
        <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-900">
          Memory Gallery
        </h1>
        <p className="mt-2 text-lg text-stone-500">
          A collection of beautiful moments frozen in time.
        </p>
      </header>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {galleryPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative mb-6 overflow-hidden rounded-3xl bg-stone-100 shadow-sm ring-1 ring-stone-200/50"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-serif text-xl font-medium">{photo.title}</h3>
            </div>

            <button
              onClick={() => setSelectedPhoto(photo.url)}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/40 opacity-0 group-hover:opacity-100"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-8 top-8 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedPhoto}
              alt="Enlarged view"
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

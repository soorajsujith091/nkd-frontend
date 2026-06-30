import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Classes', 'Events', 'Workshops'];

  const galleryItems = [
    { id: 1, category: 'Classes', type: 'image', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'Events', type: 'image', url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'Workshops', type: 'image', url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'Classes', type: 'image', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'Events', type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'Classes', type: 'image', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
    { id: 7, category: 'Workshops', type: 'image', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' },
    { id: 8, category: 'Events', type: 'image', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80' },
    { id: 9, category: 'Classes', type: 'image', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80' },
  ];

  const videos = [
    { id: 1, title: "NKD Studios Anniversary Showcase", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Hip Hop Masterclass Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-24 font-body">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh] border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1920&q=80" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <motion.div
          className="relative z-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white uppercase mb-4 tracking-tight">Our <span className="font-semibold text-nkd-purple">Gallery</span></h1>
          <p className="text-gray-200 font-light text-lg">A glimpse into our world of dance.</p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-wrap justify-center gap-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-nkd-purple text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-500 hover:border-nkd-purple hover:text-nkd-purple shadow-sm'
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-24">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer group relative shadow-sm border border-gray-100"
                onClick={() => setSelectedImage(item.url)}
              >
                <img src={item.url} alt={item.category} className="w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700" />
                <div className="absolute inset-0 bg-nkd-purple/0 group-hover:bg-nkd-purple/10 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-50 py-12 md:py-24 px-6 md:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-center mb-16 text-gray-900">Featured <span className="font-medium text-nkd-purple">Videos</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {videos.map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden mb-5 relative bg-gray-100">
                  <iframe 
                    src={video.url} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-[300px] md:h-[400px]"
                  ></iframe>
                </div>
                <h3 className="text-lg font-medium font-heading text-gray-900 ml-2 mb-2">{video.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.img 
              src={selectedImage} 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-w-full max-h-full rounded-2xl shadow-2xl border border-gray-100"
              alt="Expanded view" 
            />
            <button 
              className="absolute top-8 right-8 text-gray-500 hover:text-nkd-purple p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

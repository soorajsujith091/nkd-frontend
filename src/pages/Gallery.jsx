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
    <div className="bg-nkd-dark min-h-screen text-nkd-white pb-24">
      
      {/* Hero Section */}
      <section className="bg-nkd-dark pt-20 pb-12 section-container text-center border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lg md:text-5xl font-heading font-bold uppercase mb-4">Our <span className="text-nkd-purple">Gallery</span></h1>
          <div className="w-24 h-1 bg-nkd-purple mx-auto"></div>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-[1920px] mx-auto section-container py-12 flex flex-wrap justify-center gap-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-nkd-purple text-[#ffffff]'
                : 'bg-[#ffffff] border border-gray-300 text-gray-600 hover:border-nkd-purple hover:text-nkd-purple shadow-sm'
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Masonry Grid */}
      <section className="max-w-[1920px] mx-auto section-container mb-24">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative shadow-sm border border-gray-200"
                onClick={() => setSelectedImage(item.url)}
              >
                <img src={item.url} alt={item.category} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-nkd-purple/0 group-hover:bg-nkd-purple/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="bg-nkd-offwhite py-24 section-container border-y border-gray-200">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-lg md:text-3xl font-heading font-bold uppercase text-center mb-16 text-nkd-white">Featured <span className="text-nkd-purple">Videos</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {videos.map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#ffffff] p-4 rounded-3xl border border-gray-200 shadow-sm"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden mb-4">
                  <iframe 
                    src={video.url} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-[400px]"
                  ></iframe>
                </div>
                <h3 className="text-lg font-bold font-heading uppercase text-nkd-white ml-2">{video.title}</h3>
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.img 
              src={selectedImage} 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              alt="Expanded view" 
            />
            <button 
              className="absolute top-8 right-8 text-white hover:text-nkd-purple p-2 bg-black/50 rounded-full"
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

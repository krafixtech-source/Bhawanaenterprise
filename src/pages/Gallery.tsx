import React, { useState } from 'react'
import { X } from 'lucide-react'

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState('ALL')

  const galleryItems = [
    {
      title: 'Serenity Condo Suite',
      category: 'RESIDENTIAL',
      image: '/hero-day.png',
      desc: 'Jaipur upscale modern apartment flat concept.'
    },
    {
      title: 'Luxury Grand Hotel',
      category: 'COMMERCIAL',
      image: '/hero-night.png',
      desc: 'Premium commercial resort model in Jaipur.'
    },
    {
      title: 'Industrial Warehouse',
      category: 'INDUSTRIAL',
      image: '/hero-day.png',
      desc: 'Logistic storage layout structure.'
    },
    {
      title: 'Premium Agricultural Land',
      category: 'AGRICULTURAL',
      image: '/hero-night.png',
      desc: 'Fertile agricultural fields in Rajasthan.'
    },
    {
      title: 'Luxury Farmhouse Retreat',
      category: 'RESIDENTIAL',
      image: '/hero-day.png',
      desc: 'Private green getaway property.'
    },
    {
      title: 'Modern Business Office',
      category: 'COMMERCIAL',
      image: '/hero-night.png',
      desc: 'Jaipur corporate office workspace layout.'
    }
  ]

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'AGRICULTURAL']

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white pt-32 pb-24 px-6 md:px-12 font-sans relative z-40">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[4px] text-luxury-gold font-bold uppercase block mb-3">VISUAL PORTFOLIO</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium tracking-wide">
            Property Gallery
          </h1>
          <p className="text-brand-stone text-sm mt-4">
            Curated architectural renderings and strategic site images
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase font-bold border transition-colors duration-300 ${
                activeFilter === cat
                  ? 'bg-luxury-gold text-black border-luxury-gold'
                  : 'bg-white/5 border-white/10 hover:border-luxury-gold text-white'
              }`}
              data-cursor="FILTER"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.image)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-luxury-gold transition-colors duration-300 cursor-none flex flex-col justify-between h-full"
              data-cursor="ZOOM"
            >
              {/* Image box */}
              <div className="overflow-hidden aspect-video relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-white border border-white/30 px-4 py-2 rounded-full bg-black/40">
                    Enlarge Image
                  </span>
                </div>
              </div>

              {/* Text box */}
              <div className="p-6">
                <span className="text-[9px] text-luxury-gold font-bold tracking-widest block uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-brand-stone font-sans leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-brand-stone hover:text-brand-light flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
              data-cursor="CLOSE"
            >
              <X size={20} />
              <span>Close</span>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged property view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-white/15"
            />
          </div>
        )}

      </div>
    </div>
  )
}
export default Gallery

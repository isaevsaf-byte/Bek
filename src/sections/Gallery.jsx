import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();
    const scrollContainerRef = useRef(null);

    const items = [
        '/gallery/IMG_0581.jpg',
        '/gallery/IMG_0582.jpg',
        '/gallery/IMG_0583.jpg',
        '/gallery/IMG_0584.jpg',
        '/gallery/IMG_1123.jpg'
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Adjust scroll distance
            const container = scrollContainerRef.current;
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="gallery" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-12 border-l-2 border-neon-magenta pl-6"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-white">
                        {t.gallery.title}
                    </h2>
                </motion.div>

                {/* Horizontal Scroll Layout */}
                <div className="relative group/gallery">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-neon-magenta/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 disabled:opacity-0 -ml-2 sm:ml-0"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-neon-magenta/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 -mr-2 sm:mr-0"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide scroll-smooth"
                    >
                        {items.map((src, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 relative group overflow-hidden bg-gray-900 border border-white/10 snap-center w-[300px] sm:w-[400px] aspect-[4/5] sm:aspect-square"
                                initial={{ opacity: 0, scale: window.innerWidth < 768 ? 1 : 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-neon-magenta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

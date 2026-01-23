import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();

    const items = [
        '/gallery/IMG_0581.jpg',
        '/gallery/IMG_0582.jpg',
        '/gallery/IMG_0583.jpg',
        '/gallery/IMG_0584.jpg',
        '/gallery/IMG_1123.jpg'
    ];

    return (
        <section id="gallery" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-l-2 border-neon-magenta pl-6"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-white">
                        {t.gallery.title}
                    </h2>
                </motion.div>

                {/* Horizontal Scroll Layout */}
                <div className="relative">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                        {items.map((src, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 relative group overflow-hidden bg-gray-900 border border-white/10 snap-center w-[300px] sm:w-[400px] aspect-[4/5] sm:aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
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

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();

    const items = [1, 2, 3, 4, 5, 6, 7, 8];

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
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 relative group overflow-hidden bg-gray-900 border border-white/10 snap-center w-[300px] sm:w-[400px] aspect-[4/5] sm:aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-neon-magenta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-orbitron text-xl">
                                    [IMG {item}]
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

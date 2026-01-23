import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-[80vh] flex items-center justify-center py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="border-l-2 border-retro-orange pl-6 mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold uppercase text-transparent bg-clip-text bg-metallic drop-shadow-sm">
                        {t.about.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed space-y-6"
                    >
                        <p>
                            {t.about.bio}
                        </p>
                        <p className="text-gray-500 text-base">
                            The underground isn't a place, it's a frequency.
                        </p>
                    </motion.div>

                    {/* Placeholder for an artist image or visual element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="relative h-64 md:h-96 bg-gray-900 rounded-sm overflow-hidden border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-retro-orange/20 to-neon-cyan/20 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-orbitron text-2xl">
                            [Artist Photo Placeholder]
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

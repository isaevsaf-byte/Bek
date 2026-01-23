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

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed max-w-[65ch] text-center"
                    >
                        <p dangerouslySetInnerHTML={{ __html: t.about.bio }}></p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

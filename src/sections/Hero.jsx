import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-background to-background z-0"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

            <div className="z-10 text-center px-4 max-w-4xl w-full flex flex-col items-center">
                <motion.img
                    src="/logo.png"
                    alt="Bek to the Future"
                    className="w-full max-w-2xl mb-8 drop-shadow-[0_0_15px_rgba(255,77,0,0.5)]"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <motion.h2
                    className="text-xl md:text-2xl font-inter font-light tracking-[0.2em] text-gray-400 mb-12 uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {t.hero.tagline}
                </motion.h2>

                <motion.a
                    href="#sound"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-retro-orange/50 text-white font-orbitron uppercase tracking-widest hover:bg-retro-orange/10 transition-all duration-300 hover:border-retro-yellow hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Play className="w-5 h-5 fill-current text-retro-orange group-hover:text-retro-yellow transition-colors" />
                    {t.hero.cta}
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;

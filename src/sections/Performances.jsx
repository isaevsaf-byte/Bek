import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Performances = () => {
    const { t, language } = useLanguage();

    const gigs = [
        { date: 'Past', city: 'Tashkent', venue: 'Gravity Bar, Zevon Bar, Sado Bar', status: 'Past' },
        { date: 'Past', city: 'Muynak', venue: 'Stihia Festival', status: 'Past' },
        { date: 'Upcoming', city: 'Tashkent', venue: 'The Bar', status: 'Upcoming' },
    ];

    return (
        <section id="performances" className="py-20 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-12 border-l-2 border-retro-yellow pl-6"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-retro-yellow to-white">
                        {t.performances.title}
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {gigs.map((gig, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: window.innerWidth < 768 ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                            className="group flex flex-col md:flex-row items-center justify-between p-6 border border-white/5 hover:border-retro-yellow/50 hover:bg-white/5 transition-all duration-300 rounded-sm"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto text-center md:text-left">
                                <span className="font-mono text-retro-orange text-sm md:text-base">{gig.date}</span>
                                <span className="text-2xl font-orbitron text-white group-hover:text-retro-yellow transition-colors">{gig.venue}</span>
                            </div>

                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                <span className="font-inter text-gray-400 uppercase tracking-wider text-sm">{gig.city}</span>
                                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${gig.status === 'Upcoming' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-gray-800 text-gray-500'}`}>
                                    {gig.status === 'Upcoming' ? (language === 'ru' ? 'SCOPO' : 'UPCOMING') : (language === 'ru' ? 'PROSHLO' : 'PAST')}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Performances;

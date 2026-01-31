import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Papa from 'papaparse';
import { ExternalLink } from 'lucide-react';

const Performances = () => {
    const { t, language } = useLanguage();
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        const fetchGigs = async () => {
            try {
                const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRdLM6P1sgVpNPCxY1p8kns-yPhzu2beqM8ryxrx3UF-yHc5iNgKcTPnJlF47hVnw/pub?gid=1260256819&single=true&output=csv');
                const csvText = await response.text();

                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const parsedData = results.data;

                        // Parse date helper (DD.MM.YYYY)
                        const parseDate = (dateStr) => {
                            if (!dateStr) return new Date(0);
                            const parts = dateStr.split('.');
                            if (parts.length === 3) {
                                return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                            }
                            return new Date(dateStr);
                        };

                        const upcoming = parsedData.filter(item => item.Type === 'Upcoming');
                        const past = parsedData.filter(item => item.Type === 'Past');

                        // Sort Upcoming: Nearest first
                        upcoming.sort((a, b) => parseDate(a.Date) - parseDate(b.Date));

                        // Sort Past: Newest first
                        past.sort((a, b) => parseDate(b.Date) - parseDate(a.Date));

                        setGigs([...upcoming, ...past]);
                    }
                });
            } catch (error) {
                console.error("Error fetching gigs:", error);
            }
        };

        fetchGigs();
    }, []);

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
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-orbitron font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-retro-yellow to-white">
                        {t.performances.title}
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {gigs.map((gig, index) => (
                        <motion.a
                            key={index}
                            href={gig.Link || '#'}
                            target={gig.Link ? "_blank" : "_self"}
                            rel={gig.Link ? "noopener noreferrer" : ""}
                            initial={{ opacity: 0, y: window.innerWidth < 768 ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                            className={`group flex flex-col md:flex-row items-center justify-between p-6 border border-white/5 hover:border-retro-yellow/50 hover:bg-white/5 transition-all duration-300 rounded-sm ${!gig.Link ? 'cursor-default pointer-events-none' : 'cursor-pointer'}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto text-center md:text-left">
                                <span className="font-mono text-retro-orange text-sm md:text-base whitespace-nowrap">{gig.Date}</span>
                                <span className="text-2xl font-orbitron text-white group-hover:text-retro-yellow transition-colors">{gig.Venue}</span>
                            </div>

                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                <span className="font-inter text-gray-400 uppercase tracking-wider text-sm">{gig.Location}</span>
                                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${gig.Type === 'Upcoming' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-gray-800 text-gray-500'}`}>
                                    {gig.Type === 'Upcoming' ? (language === 'ru' ? 'SCOPO' : 'UPCOMING') : (language === 'ru' ? 'PROSHLO' : 'PAST')}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Performances;

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Music, Disc } from 'lucide-react';

const Sound = () => {
    const { t } = useLanguage();

    return (
        <section id="sound" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-l-2 border-neon-cyan pl-6"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold uppercase text-white drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                        {t.sound.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* SoundCloud Card */}
                    <motion.a
                        href="https://soundcloud.com/begi4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block bg-gray-900 border border-white/10 p-8 rounded-sm overflow-hidden hover:border-retro-orange transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-black rounded-full border border-white/10">
                                    <Music className="w-8 h-8 text-retro-orange" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-orbitron text-white">SoundCloud</h3>
                                    <p className="text-gray-400 text-sm">Latest Mixes & Originals</p>
                                </div>
                            </div>
                            <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                        </div>
                    </motion.a>

                    {/* Mixcloud Card */}
                    <motion.a
                        href="https://www.mixcloud.com/bekkhalimov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block bg-gray-900 border border-white/10 p-8 rounded-sm overflow-hidden hover:border-neon-cyan transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-black rounded-full border border-white/10">
                                    <Disc className="w-8 h-8 text-neon-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-orbitron text-white">Mixcloud</h3>
                                    <p className="text-gray-400 text-sm">Broadcasts & Live Sets</p>
                                </div>
                            </div>
                            <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                        </div>
                    </motion.a>
                </div>

                {/* Spotify / Moods Section */}
                <div className="border-t border-white/10 pt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-orbitron font-bold uppercase text-white mb-8">
                            {t.sound.spotify_title}
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Playlist 1 */}
                        <motion.a
                            href="https://open.spotify.com/playlist/3ttVEjsGRIj7wWFtEGWDJH?si=uJNYZd4iT-OTTAva9g0YFw&pi=eqiTfs3PTgyQ2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-6 bg-gray-900 border border-white/10 rounded-sm hover:border-[#1DB954] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Monochrome to Green Icon */}
                                <div className="p-3 bg-black rounded-full border border-white/10 group-hover:border-[#1DB954] transition-colors duration-300">
                                    <Disc className="w-6 h-6 text-gray-400 group-hover:text-[#1DB954] transition-colors duration-300" />
                                </div>
                                <span className="font-orbitron text-lg text-white group-hover:text-[#1DB954] transition-colors duration-300">
                                    {t.sound.spotify_btn_1}
                                </span>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#1DB954] transition-colors" />
                        </motion.a>

                        {/* Playlist 2 */}
                        <motion.a
                            href="https://open.spotify.com/playlist/2lXkEgRcksphZBZ4nZFnl7?si=nQ2ITGSuSai5TNA-VJQv9w&pi=SZ71kal2Rg-4h"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-6 bg-gray-900 border border-white/10 rounded-sm hover:border-[#1DB954] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Monochrome to Green Icon */}
                                <div className="p-3 bg-black rounded-full border border-white/10 group-hover:border-[#1DB954] transition-colors duration-300">
                                    <Disc className="w-6 h-6 text-gray-400 group-hover:text-[#1DB954] transition-colors duration-300" />
                                </div>
                                <span className="font-orbitron text-lg text-white group-hover:text-[#1DB954] transition-colors duration-300">
                                    {t.sound.spotify_btn_2}
                                </span>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#1DB954] transition-colors" />
                        </motion.a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Sound;

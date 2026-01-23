import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Disc } from 'lucide-react';

const SoundCloudIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z" />
    </svg>
);

const MixcloudIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.462 8.596l1.372 6.49h.319l1.372-6.49h2.462v6.808H6.742v-5.68l.232-.81h-.402l-1.43 6.49H2.854l-1.44-6.49h-.391l.222.81v5.68H0V8.596zM24 8.63v1.429L21.257 12 24 13.941v1.43l-3.235-2.329h-.348l-3.226 2.329v-1.43l2.734-1.94-2.733-1.942V8.63l3.225 2.338h.348zm-7.869 2.75v1.24H9.304v-1.24z" />
    </svg>
);

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
                        className="group relative block bg-gray-900 border border-white/10 p-8 rounded-sm overflow-hidden hover:border-[#FF5500] hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-black rounded-full border border-white/10 group-hover:border-[#FF5500]/50 transition-colors duration-300">
                                    <SoundCloudIcon className="w-8 h-8 text-[#FF5500]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-orbitron text-white group-hover:text-[#FF5500] transition-colors duration-300">SoundCloud</h3>
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
                        className="group relative block bg-gray-900 border border-white/10 p-8 rounded-sm overflow-hidden hover:border-[#5000FF] hover:shadow-[0_0_30px_rgba(80,0,255,0.3)] transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5000FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-black rounded-full border border-white/10 group-hover:border-[#5000FF]/50 transition-colors duration-300">
                                    <MixcloudIcon className="w-8 h-8 text-[#5000FF]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-orbitron text-white group-hover:text-[#5000FF] transition-colors duration-300">Mixcloud</h3>
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

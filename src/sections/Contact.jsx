import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Mail, Music, Disc, MessageCircle } from 'lucide-react';

const Contact = () => {
    const { t } = useLanguage();

    const socials = [
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bektothefuturefuture', color: 'hover:text-pink-500' },
        { name: 'SoundCloud', icon: Music, href: 'https://soundcloud.com/begi4', color: 'hover:text-retro-orange' },
        { name: 'Mixcloud', icon: Disc, href: 'https://www.mixcloud.com/bekkhalimov/', color: 'hover:text-neon-cyan' },
        { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/bekinuzb', color: 'hover:text-blue-400' },
    ];

    return (
        <section id="contact" className="py-20 min-h-[60vh] flex items-center justify-center bg-black relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-orbitron font-bold uppercase mb-12 text-white"
                >
                    {t.contact.title}
                </motion.h2>

                <motion.div
                    className="flex justify-center items-center gap-8 md:gap-12 mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                            aria-label={social.name}
                        >
                            <social.icon className="w-10 h-10 md:w-12 md:h-12" />
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <a
                        href="mailto:contact@bektothefuture.com"
                        className="inline-block px-8 py-4 border border-white/20 text-white font-orbitron uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {t.contact.email}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.sound, href: '#sound' },
        { name: t.nav.performances, href: '#performances' },
        { name: t.nav.gallery, href: '#gallery' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="font-orbitron font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-retro-orange to-retro-yellow hover:text-neon-cyan transition-colors duration-300">
                            BEK
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-inter text-gray-300 hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleLanguage}
                                className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/50 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 relative overflow-hidden"
                                aria-label="Toggle Language"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Globe className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan group-hover:animate-spin-slow transition-colors" />
                                <span className="absolute -bottom-1 text-[8px] font-mono font-bold text-gray-500 group-hover:text-white uppercase tracking-tighter">
                                    {language}
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsOpen(false);
                                }}
                                className="flex items-center text-gray-300 hover:text-neon-magenta px-3 py-2 w-full text-left"
                            >
                                <Globe className="w-5 h-5 mr-2" />
                                <span className="uppercase">{language === 'en' ? 'English' : 'Русский'}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-600 text-[10px] font-mono mb-4 uppercase tracking-widest opacity-50">
                    © {new Date().getFullYear()} Bek to the Future
                </p>

                <div className="font-mono text-[11px] md:text-[12px] text-[#666] flex items-center justify-center gap-3">
                    <span className="tracking-tight">
                        System Architect: <span className="text-white">Saf</span>
                    </span>
                    <span className="text-[#444]">//</span>
                    <a
                        href="https://t.me/SafarIsaev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-retro-orange transition-colors duration-300"
                    >
                        TG
                    </a>
                    <span className="text-[#444]">: :</span>
                    <a
                        href="mailto:saf@safarisaev.ai?subject=Project Inquiry"
                        className="hover:text-neon-cyan transition-colors duration-300"
                    >
                        MAIL
                    </a>
                    <span className="animate-blink text-neon-cyan">_</span>
                </div>
            </div>
        </footer>
    );
}

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

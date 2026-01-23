import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // 'en' or 'ru'

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
    };

    const translations = {
        en: {
            nav: {
                about: "About",
                sound: "The Sound",
                performances: "Performances",
                gallery: "Gallery",
                contact: "Contact"
            },
            hero: {
                tagline: "Time Traveling Through Tech House.",
                cta: "Listen Now"
            },
            about: {
                title: "The Identity",
                bio: "Bek combines retro-futuristic aesthetics with driving tech-house rhythms. A sonic identity built for the underground and the future."
            },
            sound: {
                title: "The Sound"
            },
            performances: {
                title: "Performances"
            },
            gallery: {
                title: "Gallery"
            },
            contact: {
                title: "Contact / Socials",
                email: "Email for Bookings"
            }
        },
        ru: {
            nav: {
                about: "Об артисте",
                sound: "Звук",
                performances: "Выступления",
                gallery: "Галерея",
                contact: "Контакты"
            },
            hero: {
                tagline: "Путешествие во времени через Tech House.",
                cta: "Слушать"
            },
            about: {
                title: "Личность",
                bio: "Bek сочетает ретро-футуристическую эстетику с драйвовыми ритмами tech-house. Звуковая идентичность, созданная для андерграунда и будущего."
            },
            sound: {
                title: "Звук"
            },
            performances: {
                title: "Выступления"
            },
            gallery: {
                title: "Галерея"
            },
            contact: {
                title: "Контакты",
                email: "Email для бронирования"
            }
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

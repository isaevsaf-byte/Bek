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
                bio: "<span class='text-retro-orange font-bold'>Office professional by day, underground explorer by night.</span> Hailing from Bukhara, Bek blends driving Tech House rhythms with atmospheric melodies.<br/><br/>From intimate Wild Chill gatherings to the main stage at <span class='text-retro-orange font-bold'>Stihia Festival</span>, he is now a fixture in Tashkent’s nightlife bringing the sound of the future to venues like <span class='text-retro-orange font-bold'>Gravity, Zevon, and The Bar.</span>"
            },
            sound: {
                title: "The Sound",
                spotify_title: "Moods & Playlists",
                spotify_btn_1: "Focus Mode",
                spotify_btn_2: "Café & Bar Vibes"
            },
            performances: {
                title: "Performances",
                upcoming: "Upcoming",
                past: "Past"
            },
            gallery: {
                title: "Gallery"
            },
            contact: {
                title: "Contact / Socials",
                email: "Email for Bookings",
                telegram: "Telegram"
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
                bio: "<span class='text-retro-orange font-bold'>Офисный профессионал днем, исследователь андерграунда ночью.</span> Родом из Бухары, Bek смешивает драйвовые ритмы Tech House с атмосферными мелодиями.<br/><br/>От камерных вечеринок Wild Chill до главной сцены фестиваля <span class='text-retro-orange font-bold'>Stihia</span>, он стал неотъемлемой частью ночной жизни Ташкента принося звук будущего в такие места, как <span class='text-retro-orange font-bold'>Gravity, Zevon и The Bar.</span>"
            },
            sound: {
                title: "Звук",
                spotify_title: "Настроение & Плейлисты",
                spotify_btn_1: "Режим Фокуса",
                spotify_btn_2: "Атмосфера Кафе & Бара"
            },
            performances: {
                title: "Выступления",
                upcoming: "Скоро",
                past: "Прошло"
            },
            gallery: {
                title: "Галерея"
            },
            contact: {
                title: "Контакты",
                email: "Email для бронирования",
                telegram: "Telegram"
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

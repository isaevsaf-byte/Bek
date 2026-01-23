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
                bio: "Bek to the Future is the alter ego of Bek, who works in an office during the day and dives into the world of underground electronic music by night. His style is based on tech house & Melodic house—rhythmic and melodic music with influences from artists like Mark Knight and the atmospheric sound of Anjunabeats. Hailing from Bukhara, the aspiring artist started his journey behind the DJ booth at Wild Chill parties—small gatherings for a close-knit circle of true electronic music lovers. Since then, he has become a fixture in the capital's nightlife, performing at the top bars of Tashkent, including Gravity, Zevon, and The Bar. Most notably, Bek reached his milestone by performing at Stihia Festival, cementing his place within the electronic music scene."
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
                bio: "Bek to the Future — это альтер-эго Бека, который днем работает в офисе, а ночью погружается в мир андерграундной электронной музыки. Его стиль основан на tech house и Melodic house — ритмичной и мелодичной музыке с влиянием таких артистов, как Mark Knight, и атмосферного звучания Anjunabeats. Родом из Бухары, начинающий артист начал свой путь за пультом на вечеринках Wild Chill — небольших собраниях для узкого круга истинных ценителей электронной музыки. С тех пор он стал неотъемлемой частью ночной жизни столицы, выступая в топовых барах Ташкента, включая Gravity, Zevon и The Bar. Самым значимым достижением Бека стало выступление на фестивале Stihia, закрепившее его место на сцене электронной музыки."
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

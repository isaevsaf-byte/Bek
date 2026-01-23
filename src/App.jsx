import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Sound from './sections/Sound';
import Performances from './sections/Performances';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <About />
        <Sound />
        <Performances />
        <Gallery />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;

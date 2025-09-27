import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p>&copy; 2024 Sajjad Ansari. Built with ❤️ using React & TypeScript</p>
            <p className="footer-quote">
              "الصلاة معراج المؤمن - Salah is the Mi'raj (ascension) of the believer"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

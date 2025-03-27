import { useState, useEffect, useRef } from 'react';

import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('main');
    const sections = ['main', 'aboutMe', 'projects', 'contact', 'footer'];

    useEffect(() => {
        const handleScroll = () => {
            // Determine which section is most visible
            const viewportHeight = window.innerHeight;
            const viewportMiddle = window.scrollY + (viewportHeight / 2);

            let closestSection = sections[0];
            let closestDistance = Infinity;

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionMiddle = window.scrollY + rect.top + (rect.height / 2);
                    const distance = Math.abs(viewportMiddle - sectionMiddle);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = sectionId;
                    }
                }
            });

            setActiveSection(closestSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-x-hidden">
            {/* Navigation sidebar */}
            <Sidenav activeSection={activeSection} handleNavClick={handleNavClick} />

            {/* Decorative background elements */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
                <div className="absolute top-2/3 left-1/4 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10">
                <section id="main" className="min-h-screen flex items-center justify-center">
                    <Main />
                </section>

                <section id="aboutMe" className="min-h-screen flex items-center justify-center">
                    <AboutMe />
                </section>

                <section id="projects" className="min-h-screen flex items-center justify-center">
                    <Projects />
                </section>

                <section id="contact" className="min-h-screen flex items-center justify-center">
                    <Contact />
                </section>

                <section id="footer" className="pt-10">
                    <Footer />
                </section>
            </div>
        </div>
    );
}

export default App;

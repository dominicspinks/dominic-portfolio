import { useState, useEffect, useRef } from 'react';

import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startY = useRef(0); // Ref to track the start position of the touch

    useEffect(() => {
        const sectionIds = ['main', 'aboutMe', 'projects', 'contact', 'footer'];
        const sections = sectionIds.map((id) => document.getElementById(id));

        function handleScroll(event) {
            const prevIndex = currentIndex;
            let scrollOffset = 0;
            if (event.deltaY > 0 && prevIndex < sections.length - 1) {
                // Scrolling down
                scrollOffset = 1;
            } else if (event.deltaY < 0 && prevIndex > 0) {
                // Scrolling up
                scrollOffset = -1;
            }

            setCurrentIndex(prevIndex + scrollOffset);
            sections[prevIndex + scrollOffset].scrollIntoView({
                behavior: 'smooth',
            });
            event.preventDefault(); // Prevent default scroll behavior
        }

        function handleTouchStart(event) {
            if (event.touches.length > 0) {
                startY.current = event.touches[0].clientY; // Record the starting Y position
            }
        }

        function handleTouchEnd(event) {
            if (event.changedTouches.length > 0) {
                const endY = event.changedTouches[0].clientY;
                const prevIndex = currentIndex;
                let scrollOffset = 0;

                if (endY > startY.current && prevIndex > 0) {
                    // Swiping up
                    scrollOffset = -1;
                    console.log('up');
                } else if (
                    endY < startY.current &&
                    prevIndex < sections.length - 1
                ) {
                    // Swiping down
                    scrollOffset = 1;
                    console.log('down');
                }

                setCurrentIndex(prevIndex + scrollOffset);
                sections[prevIndex + scrollOffset].scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }

        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, {
            passive: true,
        });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentIndex]);

    // Function to handle navigation clicks
    function handleNavClick(index) {
        setCurrentIndex(index);
    }

    return (
        <>
            <Sidenav handleNavClick={handleNavClick} />
            <Main />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

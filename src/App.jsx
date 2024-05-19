import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Sidenav />
            <Main />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

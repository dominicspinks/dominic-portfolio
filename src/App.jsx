import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
    return (
        <>
            <Sidenav />
            <Main />
            <AboutMe />
            <Projects />
            <Contact />
        </>
    );
}

export default App;

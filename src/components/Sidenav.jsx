import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Sidenav({ activeSection, handleNavClick }) {
    const [hoverItem, setHoverItem] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Animate in after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#menu-toggle')) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { id: 'main', icon: FaHome, label: 'Home' },
        { id: 'aboutMe', icon: FaUser, label: 'About Me' },
        { id: 'projects', icon: FaLaptopCode, label: 'Projects' },
        { id: 'contact', icon: FaEnvelope, label: 'Contact' }
    ];

    const handleMobileNavClick = (sectionId) => {
        handleNavClick(sectionId);
        setMobileMenuOpen(false);
    };


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Sidebar Navigation */}
            <nav className={`fixed left-0 top-0 h-full z-50 hidden md:flex flex-col justify-center items-center w-20 bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">DS</div>
                </div>

                <ul className="flex flex-col space-y-8">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        const delay = 100 + (index * 100);

                        return (
                            <li
                                key={item.id}
                                className={`relative transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                style={{ transitionDelay: `${delay}ms` }}
                            >
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    onMouseEnter={() => setHoverItem(item.id)}
                                    onMouseLeave={() => setHoverItem(null)}
                                    className={`relative flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${isActive
                                        ? 'text-blue-400'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <span className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-md transform -translate-x-4"></span>
                                    )}
                                    <Icon size={24} />

                                    {/* Tooltip */}
                                    <div
                                        className={`absolute left-full ml-4 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap transition-all duration-300 ${hoverItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
                                            }`}
                                    >
                                        {item.label}
                                        <span className="absolute top-1/2 -left-1 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></span>
                                    </div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="fixed top-6 right-6 md:hidden z-50">
                <button
                    id="menu-toggle"
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-blue-400 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <div className="pointer-events-none">
                        {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-lg"></div>

                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Dominic Spinks
                    </div>

                    <ul className="flex flex-col space-y-6 mb-12 w-full">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleMobileNavClick(item.id)}
                                        className={`flex items-center justify-center w-full py-3 px-8 rounded-lg transition-all duration-300 ${isActive
                                            ? 'bg-blue-500/20 text-blue-400'
                                            : 'text-gray-300 hover:bg-gray-800'
                                            }`}
                                    >
                                        <Icon size={20} className="mr-3" />
                                        <span className="text-lg">{item.label}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};
import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import profileImg from '../assets/profile.jpeg';

export default function Main() {
    // State to control animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set visible after a small delay to trigger animations
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-6xl px-4 md:px-8 py-10 md:py-16 md:pl-24 lg:pl-28">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                {/* Left column with profile image - smaller on mobile */}
                <div
                    className={`relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-500/20 p-1 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm shadow-xl">
                        <img
                            src={profileImg}
                            alt="Dominic Spinks"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    {/* Decorative circles - adjusted for mobile */}
                    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 backdrop-blur-md animate-pulse"></div>
                    <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-14 h-14 md:w-20 md:h-20 rounded-full bg-purple-500/10 backdrop-blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Right column with text content - smaller fonts on mobile */}
                <div className="flex-1 max-w-xl">
                    <div
                        className={`transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <div className="mb-2 inline-block px-3 py-1 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm text-blue-400 text-xs sm:text-sm">
                            Software Engineer
                        </div>
                    </div>

                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Hi, I'm
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ml-2">
                            Dominic!
                        </span>
                    </h1>

                    <h2
                        className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-6 transition-all duration-700 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Based in Melbourne, Australia
                    </h2>

                    <p
                        className={`text-sm sm:text-base md:text-lg text-gray-400 mb-4 md:mb-8 transition-all duration-700 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        I build modern, responsive web applications with a focus on clean code,
                        intuitive user experiences, and scalable architecture.
                    </p>

                    {/* CTA buttons - smaller on mobile */}
                    <div
                        className={`flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-8 transition-all duration-700 delay-1100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                (document.getElementById('projects') as Element).scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-transform hover:scale-105"
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                (document.getElementById('contact') as Element).scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg border border-gray-600 text-gray-300 font-medium transition-all hover:border-blue-400 hover:text-blue-400"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social icons - slightly smaller on mobile */}
                    <div
                        className={`flex gap-4 md:gap-6 transition-all duration-700 delay-1300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <a
                            href="https://github.com/dominicspinks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                        >
                            <FaGithub size={16} className="md:text-xl" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dominicspinks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                        >
                            <FaLinkedinIn size={16} className="md:text-xl" />
                        </a>

                        <a
                            href="mailto:dominic.spinks@outlook.com"
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                        >
                            <HiMail size={16} className="md:text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
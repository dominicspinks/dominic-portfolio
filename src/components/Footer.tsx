import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer id="footer" className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 md:px-8 md:pl-24 lg:pl-28 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Copyright & name */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <div className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            Dominic Spinks
                        </div>
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>

                    {/* Right side - Social links & scroll to top */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://github.com/dominicspinks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                            >
                                <FaGithub size={16} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dominicspinks/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            <a
                                href="mailto:dominic.spinks@outlook.com"
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                            >
                                <HiMail size={16} />
                            </a>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="px-3 py-1 flex items-center gap-2 text-xs rounded-full border border-gray-700 text-gray-400 transition-all hover:text-blue-400 hover:border-blue-400"
                        >
                            <FaArrowUp size={10} />
                            <span>Back to top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
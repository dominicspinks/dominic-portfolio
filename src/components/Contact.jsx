import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaLocationDot } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_phone: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('contact');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        handleScroll(); // Check on initial load
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const validateForm = () => {
        const errors = {};

        if (!formData.from_name.trim()) {
            errors.from_name = "Name is required";
        }

        if (!formData.from_email.trim()) {
            errors.from_email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.from_email)) {
            errors.from_email = "Email address is invalid";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: undefined });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .sendForm('service_9ninlqb', 'template_3i22kjj', form.current, {
                publicKey: '_vScShfGw_s20VTwu',
            })
            .then(
                () => {
                    setFormSubmitted(true);
                    setFormData({
                        from_name: '',
                        from_email: '',
                        from_phone: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="w-full max-w-6xl px-4 md:px-8 md:pl-24 lg:pl-28 py-10 md:py-16">
            <h1
                className={`text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                Contact Me
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                {/* Left column - Contact info */}
                <div
                    className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="inline-block px-3 py-1 mb-6 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm text-blue-400 text-xs sm:text-sm">
                        Get In Touch
                    </div>

                    <p className="text-sm md:text-base text-gray-300 mb-8">
                        Feel free to reach out if you want to work together or just want to say hello.
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 text-blue-400">
                                <FaLocationDot size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">Location</h3>
                                <p className="text-sm text-gray-400">Melbourne, Australia</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 text-blue-400">
                                <HiMail size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">Email</h3>
                                <a href="mailto:dominic.spinks@outlook.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                                    dominic.spinks@outlook.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 text-blue-400">
                                <FaLinkedinIn size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/dominicspinks/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    linkedin.com/in/dominicspinks
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 text-blue-400">
                                <FaGithub size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">GitHub</h3>
                                <a
                                    href="https://github.com/dominicspinks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    github.com/dominicspinks
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column - Contact form */}
                <div
                    className={`flex-1 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {formSubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center p-6 rounded-xl border border-green-500/30 bg-green-500/5 backdrop-blur-sm">
                            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                <FaPaperPlane size={24} />
                            </div>
                            <h3 className="text-xl font-medium text-green-400 mb-2">Message Sent!</h3>
                            <p className="text-center text-gray-300">
                                Thank you for reaching out. I'll get back to you as soon as possible!
                            </p>
                        </div>
                    ) : (
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 backdrop-blur-sm"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="from_name" className="block text-sm text-gray-400 mb-1">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        className={`w-full p-3 bg-gray-900/70 border ${formErrors.from_name ? 'border-red-500/70' : 'border-gray-700'} rounded-lg text-gray-200 text-sm focus:border-blue-500 focus:outline-none transition-colors`}
                                    />
                                    {formErrors.from_name && (
                                        <p className="mt-1 text-xs text-red-400">{formErrors.from_name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="from_phone" className="block text-sm text-gray-400 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="from_phone"
                                        name="from_phone"
                                        value={formData.from_phone}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-900/70 border border-gray-700 rounded-lg text-gray-200 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="from_email" className="block text-sm text-gray-400 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="from_email"
                                    name="from_email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    className={`w-full p-3 bg-gray-900/70 border ${formErrors.from_email ? 'border-red-500/70' : 'border-gray-700'} rounded-lg text-gray-200 text-sm focus:border-blue-500 focus:outline-none transition-colors`}
                                />
                                {formErrors.from_email && (
                                    <p className="mt-1 text-xs text-red-400">{formErrors.from_email}</p>
                                )}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className={`w-full p-3 bg-gray-900/70 border ${formErrors.message ? 'border-red-500/70' : 'border-gray-700'} rounded-lg text-gray-200 text-sm focus:border-blue-500 focus:outline-none transition-colors`}
                                ></textarea>
                                {formErrors.message && (
                                    <p className="mt-1 text-xs text-red-400">{formErrors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
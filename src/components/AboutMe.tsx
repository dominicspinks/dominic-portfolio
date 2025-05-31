import { useState, useEffect } from 'react';
import { FaCode, FaLaptopCode, FaUserTie, FaLightbulb } from 'react-icons/fa';

interface Skill {
    category: string;
    items: string[];
}

interface Strength {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section: Element | null = document.getElementById('aboutMe');
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

    const skills: Skill[] = [
        {
            category: 'Frontend',
            items: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
        },
        {
            category: 'Backend',
            items: ['C#', '.NET', 'Node.js', 'Express', 'Python', 'Django', 'Django REST Framework', 'RESTful APIs', 'GraphQL']
        },
        {
            category: 'Database',
            items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Supabase', 'SQL']
        },
        {
            category: 'Tools',
            items: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'CI/CD', 'Visual Studio', 'Postman']
        }
    ];

    // Core strengths
    const strengths: Strength[] = [
        {
            icon: FaCode,
            title: 'Technical Expertise',
            description: 'Full-stack development with modern technologies and best practices'
        },
        {
            icon: FaLaptopCode,
            title: 'Problem Solving',
            description: 'Analytical approach to challenges with efficient solutions'
        },
        {
            icon: FaUserTie,
            title: 'Adaptability',
            description: 'Quick to learn new technologies and frameworks as needed'
        },
        {
            icon: FaLightbulb,
            title: 'Creative Thinking',
            description: 'Innovative approaches to complex technical challenges'
        }
    ];

    return (
        <div className="w-full max-w-6xl px-4 md:px-8 md:pl-24 lg:pl-28 py-10 md:py-16">
            <h1
                className={`text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                About Me
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Left column - About text and strengths */}
                <div>
                    <div
                        className={`inline-block px-3 py-1 mb-4 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm text-blue-400 text-xs sm:text-sm transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        My Background
                    </div>

                    <div
                        className={`space-y-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            I'm a software engineer with six years of experience in IT, starting in tech support and moving through roles in testing, documentation, design, and management.
                        </p>

                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Problem-solving and critical thinking are my strengths. I enjoy tackling challenging issues with a focus on honesty and accountability. Colleagues know me as patient, logical, and adaptable.
                        </p>

                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            My goal is to lead projects from design to development, which inspired me to complete General Assembly's Software Engineering Immersive. I'm excited to use my skills and experience to make an impact in software engineering.
                        </p>
                    </div>

                    {/* Core strengths */}
                    <div
                        className={`pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {strengths.map((strength, index) => {
                            const Icon = strength.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-blue-400">
                                            <Icon size={18} />
                                        </div>
                                        <h3 className="font-medium text-sm md:text-base">{strength.title}</h3>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        {strength.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right column - Skills and Experience */}
                <div>
                    <div className="relative">
                        {/* Background decoration */}
                        <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>

                        <div
                            className={`inline-block px-3 py-1 mb-6 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm text-blue-400 text-xs sm:text-sm transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            Technical Skills
                        </div>

                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${500 + (index * 100)}ms` }}
                                >
                                    <h3 className="text-lg font-medium mb-3 text-gray-200">
                                        {skillGroup.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {skillGroup.items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg bg-gray-800/70 border border-gray-700 text-xs md:text-sm text-gray-300 hover:border-blue-500/30 transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
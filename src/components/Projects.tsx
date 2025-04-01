import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

import ProjectPacerImg from '../assets/projectPacer.png';
import TripMixerImg from '../assets/tripMixer.png';
import RepRealmImg from '../assets/repRealm.png';
import StoreBytesImg from '../assets/storeBytes.png';

export interface Project {
    id: number;
    img: string;
    title: string;
    tech: string[];
    description: string;
    demoLink: string;
    githubLink: string;
}

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [allProjects] = useState<Project[]>([
        {
            id: 1,
            img: StoreBytesImg,
            title: 'StoreBytes',
            tech: ['C#', '.NET 8', 'PostgreSQL'],
            description: 'A file storage and management system inspired by AWS S3. StoreBytes allows users to upload, retrieve, and manage files through a secure API, with public URLs enabling seamless file access for websites and applications.',
            demoLink: 'https://storebytes.domsapps.com/',
            githubLink: 'https://github.com/dominicspinks/StoreBytes',
        },
        {
            id: 2,
            img: ProjectPacerImg,
            title: 'ProjectPacer',
            tech: ['React', 'Supabase', 'Tailwind CSS'],
            description: 'Project management application designed to help small teams efficiently manage their projects. It provides features for user authentication, tracking project progress, and facilitating team communication through the included chat widget.',
            demoLink: 'https://projectpacer.netlify.app/',
            githubLink: 'https://github.com/dominicspinks/ProjectPacer',
        },
        {
            id: 3,
            img: TripMixerImg,
            title: 'TripMixer',
            tech: ['Python', 'Django', 'PostgreSQL'],
            description: 'TripMixer is a travel planning app designed to help users create and manage their holiday. Users can plan their trips, select their preferred destinations, and customize their itinerary to suit their preferences.',
            demoLink: 'https://tripmixer.dominicspinks.com/',
            githubLink: 'https://github.com/dominicspinks/TripMixer',
        },
        {
            id: 4,
            img: RepRealmImg,
            title: 'RepRealm',
            tech: ['MongoDB', 'Express', 'Node.js'],
            description: 'RepRealm is a web application for creating and storing your custom workout routines. Users can browse through the repository of other user\'s shared workouts, saving those they like to perform for themselves.',
            demoLink: 'https://reprealm.dominicspinks.com/',
            githubLink: 'https://github.com/dominicspinks/RepRealm-EJS',
        },
    ]);

    // Separate featured projects from gallery projects
    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [galleryProjects, setGalleryProjects] = useState<Project[]>([]);

    // Set initial featured and gallery projects
    useEffect(() => {
        setFeaturedProjects(allProjects.slice(0, 3));
        setGalleryProjects(allProjects.slice(3));
    }, []);

    // Detect when the section enters viewport
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('projects');
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

    // Function to promote a gallery project to featured
    const promoteProject = (projectId: number) => {
        // Find the project in gallery
        const projectToPromote = galleryProjects.find(project => project.id === projectId);
        if (!projectToPromote) return;

        // Create new array with promoted project at first position
        const newFeatured = [
            projectToPromote,
            ...featuredProjects.slice(0, 2)
        ];

        // Move the last featured project to gallery
        const demotedProject = featuredProjects[2];

        // Update gallery without the promoted project but with the demoted one
        const newGallery = [
            ...galleryProjects.filter(project => project.id !== projectId),
            demotedProject
        ];

        // Update state
        setFeaturedProjects(newFeatured);
        setGalleryProjects(newGallery);

        // Scroll to the featured projects section after a small delay
        // to allow for state update and re-render
        setTimeout(() => {
            const featuredSection = document.getElementById('featured-projects');
            if (featuredSection) {
                const offset = 80;
                window.scrollTo({
                    top: featuredSection.getBoundingClientRect().top + window.scrollY - offset,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <div className="w-full max-w-6xl px-4 md:px-8 md:pl-24 lg:pl-28 py-10 md:py-16">
            <h1
                className={`text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 pb-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                Projects
            </h1>

            {/* Featured Projects Section */}
            <div id="featured-projects" className="mb-12">
                {featuredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                            }`}
                        style={{ transitionDelay: `${300 + (index * 150)}ms` }}
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Project Image */}
                            <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                                <div className="absolute bottom-4 left-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="inline-block px-2 py-1 bg-gray-900/80 rounded-md text-xs font-medium text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="md:w-1/2 p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-6 text-sm">
                                    {project.description}
                                </p>

                                <div className="flex justify-between">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <FaGithub size={20} />
                                        <span className="text-sm font-medium">Code</span>
                                    </a>

                                    {project.demoLink && <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <span className="text-sm font-medium">Live Demo</span>
                                        <BiLinkExternal size={20} />
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery Section */}
            {galleryProjects.length > 0 && (
                <div
                    className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-xl font-semibold text-gray-200 mb-6">More Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                onClick={() => promoteProject(project.id)}
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.tech.slice(0, 3).map(tech => (
                                            <span
                                                key={tech}
                                                className="inline-block px-2 py-0.5 bg-gray-900/80 rounded-md text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="text-blue-400 text-xs font-medium">
                                        Click to view details
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
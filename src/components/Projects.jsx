import { useRef } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectItem from './ProjectItem';
import ProjectPacerImg from '../assets/projectPacer.png';
import TripMixerImg from '../assets/tripMixer.png';
import RepRealmImg from '../assets/repRealm.png';
import StoreBytesImg from '../assets/storeBytes.png';

export default function Projects() {
    const projects = useRef([
        {
            img: StoreBytesImg,
            title: 'StoreBytes',
            subtitle: 'C#, .NET 8, PostgreSQL',
            description: `A file storage and management system inspired by AWS S3. StoreBytes allows users to upload, retrieve, and manage files through a secure API, with public URLs enabling seamless file access for websites and applications.`,
            demoLink: 'https://storebytes.domsapps.com/',
            githubLink: 'https://github.com/dominicspinks/StoreBytes',
        },
        {
            img: ProjectPacerImg,
            title: 'ProjectPacer',
            subtitle: 'React, Supabase',
            description: `Project management application designed to help small teams efficiently manage their projects. It provides features for user authentication, tracking project progress, and facilitating team communication through the included chat widget.`,
            demoLink: 'https://projectpacer.netlify.app/',
            githubLink: 'https://github.com/dominicspinks/ProjectPacer',
        },
        {
            img: TripMixerImg,
            title: 'TripMixer',
            subtitle: 'Python, Django, PostgreSQL',
            description: `TripMixer is a travel planning app designed to help users create and manage their holiday. Users can plan their trips, select their preferred destinations, and customize their itinerary to suit their preferences.

Users can also share their trips and experiences with other users, allowing them to get inspired and connect with other travellers.`,
            demoLink: 'https://tripmixer.dominicspinks.com/',
            githubLink: 'https://github.com/dominicspinks/TripMixer',
        },
        {
            img: RepRealmImg,
            title: 'RepRealm',
            subtitle: 'MongoDB, Express, NodeJs',
            description: `RepRealm is a web application for creating and storing your custom workout routines.

Users can browse through the repository of other user's shared workouts, saving those they like to perform for themselves.`,
            demoLink: 'https://reprealm.dominicspinks.com/',
            githubLink: 'https://github.com/dominicspinks/RepRealm',
        },
    ]);
    const responsive = {
        all: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
        },
    };

    return (
        <div
            id='projects'
            className='flex flex-col items-center justify-center h-screen max-w-[1000px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-slate-700 py-4'>
                Projects
            </h1>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                slidesToSlide={1}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={1000}
                className='rounded-xl w-full m-auto my-0 py-2 lg:w-3/4 max-w-[1000px]'>
                {projects.current.map((project) => (
                    <ProjectItem key={project.title} project={project} />
                ))}
            </Carousel>
        </div>
    );
}

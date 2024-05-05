import { useRef } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import ProjectItem from './ProjectItem';
import ProjectPacerImg from '../assets/projectPacer.png';
import TripMixerImg from '../assets/tripMixer.png';
import RepRealmImg from '../assets/repRealm.png';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default function Projects() {
    const projects = useRef([
        {
            img: ProjectPacerImg,
            title: 'ProjectPacer',
            subtitle: 'React, Supabase',
            description: '',
            demoLink: 'https://projectpacer.netlify.app/',
        },
        {
            img: TripMixerImg,
            title: 'TripMixer',
            subtitle: 'Python, Django, PostgreSQL',
            description: '',
            demoLink: 'https://sei-tripmixer.fly.dev/',
        },
        {
            img: RepRealmImg,
            title: 'RepRealm',
            subtitle: 'MongoDB, Express, NodeJs',
            description: '',
            demoLink: 'https://reprealm.onrender.com/',
        },
    ]);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div id='projects' className='h-screen m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-slate-700 py-4'>
                Projects
            </h1>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                slidesToSlide={2}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition='all .5'
                transitionDuration={500}
                containerClass='carousel-container'
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                className='rounded-xl h-4/5 w-full m-auto lg:w-3/4'>
                {projects.current.map((project) => (
                    <ProjectItem key={project.title} project={project} />
                ))}
            </Carousel>
        </div>
    );
}

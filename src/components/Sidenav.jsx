import { useState } from 'react';
import {
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineMenu,
    AiOutlineProject,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

import HoverLabelIcon from './HoverLabelIcon';

export default function Sidenav({ handleNavClick }) {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    }
    function handleNavItemClick(index) {
        handleNav();
        handleNavClick(index);
    }

    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className='absolute top-4 right-4 z-[99] md:hidden'
            />
            {nav && (
                <div
                    // onClick={handleNav}
                    className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a
                        onClick={() => handleNavItemClick(0)}
                        href='#main'
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a
                        onClick={() => handleNavItemClick(1)}
                        href='#aboutMe'
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsPerson size={20} />
                        <span className='pl-4'>About Me</span>
                    </a>
                    <a
                        onClick={() => handleNavItemClick(2)}
                        href='#projects'
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a
                        onClick={() => handleNavItemClick(3)}
                        href='#contact'
                        className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <HoverLabelIcon
                        href='#main'
                        Icon={AiOutlineHome}
                        label='Home'
                        onSideNavClick={() => handleNavClick(0)}
                    />
                    <HoverLabelIcon
                        href='#aboutMe'
                        Icon={BsPerson}
                        label='About Me'
                        onSideNavClick={() => handleNavClick(1)}
                    />
                    <HoverLabelIcon
                        href='#projects'
                        Icon={AiOutlineProject}
                        label='Projects'
                        onSideNavClick={() => handleNavClick(2)}
                    />
                    <HoverLabelIcon
                        href='#contact'
                        Icon={AiOutlineMail}
                        label='Contact'
                        onSideNavClick={() => handleNavClick(3)}
                    />
                </div>
            </div>
        </div>
    );
}

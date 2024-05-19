import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

import profileImg from '../assets/profile.png';
import resumeFile from '../assets/DominicSpinksResume.pdf';

export default function Main() {
    return (
        <div id='main'>
            <div className='w-full h-screen top-0 left-0 bg-white flex flex-col lg:flex-row justify-center items-center gap-6'>
                <img
                    src={profileImg}
                    alt='background'
                    className='max-w-[250px] border-4 border-slate-900 rounded-full'
                />
                <div className='max-w-[700px] flex justify-center items-center gap-4'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='sm:text-5xl text-3xl font-bold text-slate-900'>
                            Hi, I'm Dominic!
                        </h1>
                        <h3 className='sm:text-3xl text-2xl pt-4 text-gray-800'>
                            Software Engineer
                            <br />
                            Based in Melbourne
                        </h3>
                        <a
                            href={resumeFile}
                            target='_blank'
                            className='border-2 border-slate-900 px-4 py-2 w-full text-center mt-4 hover:border-slate-700 hover:bg-gray-400 hover:text-white'>
                            Check out my Resume Here
                        </a>
                    </div>
                    <div className='flex flex-col justify-around pl-4 gap-4'>
                        <a
                            href='https://github.com/dominicspinks'
                            target='_blank'>
                            <FaGithub
                                className='hover:scale-110 ease-in duration-300 cursor-pointer'
                                size={30}
                            />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/dominic-spinks/'
                            target='_blank'>
                            <FaLinkedinIn
                                className='hover:scale-110 ease-in duration-300 cursor-pointer'
                                size={30}
                            />
                        </a>
                        <a href='mailto:contact@dominicspinks.com'>
                            <HiMail
                                className='hover:scale-110 ease-in duration-300 cursor-pointer'
                                size={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

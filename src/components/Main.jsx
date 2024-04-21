import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import backgroundImg from '../assets/background.jpg';

export default function Main() {
    return (
        <div id='main'>
            <img
                src={backgroundImg}
                className='w-full h-screen object-cover object-left'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white opacity-60'>
                <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-3xl font-bold text-gray-800'>
                        I'm Dominic Spinks
                    </h1>
                    <h3 className='sm:text-3xl text-2xl pt-4 text-gray-800'>
                        Software Engineer
                    </h3>
                    <div className='flex justify-between pt-6 max-w-[100px] w-full'>
                        <FaGithub className='' size={20} />
                        <FaLinkedinIn className='' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}

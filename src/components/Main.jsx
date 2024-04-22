import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

import backgroundImg from '../assets/background.jpg';

export default function Main() {
	return (
		<div id='main'>
			<img
				src={backgroundImg}
				alt='background'
				className='w-full h-screen object-cover object-left'
			/>
			<div className='w-full h-screen absolute top-0 left-0 bg-white opacity-60'>
				<div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
					<h1 className='sm:text-5xl text-3xl font-bold text-slate-900'>
						I'm Dominic Spinks
					</h1>
					<h3 className='sm:text-3xl text-2xl pt-4 text-gray-800'>
						Software Engineer
					</h3>
					<div className='flex justify-between pt-6 max-w-[150px] w-full'>
						<a
							href='https://github.com/dominicspinks'
							target='_blank'>
							<FaGithub
								className='hover:scale-110 ease-in duration-300 cursor-pointer'
								size={25}
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/dominic-spinks/'
							target='_blank'>
							<FaLinkedinIn
								className='hover:scale-110 ease-in duration-300 cursor-pointer'
								size={25}
							/>
						</a>
						<a href='mailto:contact@dominicspinks.com'>
							<HiMail
								className='hover:scale-110 ease-in duration-300 cursor-pointer'
								size={25}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

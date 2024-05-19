import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function ProjectItem({ project }) {
	console.log(project.description);
	return (
		<div className='relative flex flex-col lg:flex-row items-center justify-center gap-4 rounded-xl p-4 px-16 lg:px-24 bg-gray-200 h-full w-full'>
			<div>
				<h3 className='text-2xl text-black tracking-wider font-bold text-center'>
					{project.title}
				</h3>
				<p className='pb-4 pt-2 text-black text-center'>
					{project.subtitle}
				</p>
				<p className='text-black text-start whitespace-pre-line text-sm lg:text-lg'>
					{project.description}
				</p>
			</div>

			<img
				src={project.img}
				alt={project.title}
				className='max-w-full max-h-1/2 md:max-w-1/2 md:max-h-full'
			/>
			<div className='absolute top-4 left-4 flex gap-4'>
				{project.demoLink !== '' && (
					<a href={project.demoLink} target='_blank'>
						<FaExternalLinkSquareAlt className='w-6 h-6 hover:text-gray-600 pointer' />
					</a>
				)}
				{project.githubLink !== '' && (
					<a href={project.githubLink} target='_blank'>
						<FaGithub className='w-6 h-6 hover:text-gray-600 pointer' />
					</a>
				)}
			</div>
		</div>
	);
}

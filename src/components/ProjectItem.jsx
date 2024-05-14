import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export default function ProjectItem({ project }) {
	console.log(project.description);
	return (
		<div className='relative flex items-center justify-center gap-4 shadow-lg shadow-gray-400 rounded-xl p-4 px-24 bg-gray-200 h-full w-full'>
			<div>
				<h3 className='text-2xl text-black tracking-wider font-bold text-center'>
					{project.title}
				</h3>
				<p className='pb-4 pt-2 text-black text-center'>
					{project.subtitle}
				</p>
				<p className='text-black text-start whitespace-pre-line'>
					{project.description}
				</p>
			</div>

			<img
				src={project.img}
				alt={project.title}
				className='max-w-1/2 max-h-full'
			/>
			<div className='absolute top-4 right-4 flex flex-end'>
				{project.demoLink !== '' && (
					<a
						href={project.demoLink}
						target='_blank'
						className='absolute top-4 right-4'>
						<FaExternalLinkSquareAlt />
					</a>
				)}
			</div>
		</div>
	);
}

export default function ProjectItem({ project }) {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
			<img src={project.img} alt={project.title} />
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-xl p-4'>
				<h3 className='text-2xl text-white tracking-wider font-bold text-center'>
					{project.title}
				</h3>
				<p className='pb-4 pt-2 text-white text-center'>
					{project.subtitle}
				</p>
				{project.demoLink !== '' && (
					<a href={project.demoLink} target='_blank'>
						<p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
							Demo
						</p>
					</a>
				)}
			</div>
		</div>
	);
}

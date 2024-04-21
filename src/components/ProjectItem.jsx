export default function ProjectItem({ img, title }) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <img src={img} alt={title} />
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

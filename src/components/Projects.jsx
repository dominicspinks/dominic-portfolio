import ProjectItem from './ProjectItem';
import ProjectPacerImg from '../assets/projectPacer.png';

export default function Projects() {
    return (
        <div id='projects' className='max-w-[1000px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-slate-700'>
                Projects
            </h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                ipsum eaque iure, fuga assumenda ad aspernatur! Quaerat atque
                distinctio quam fugiat ad animi provident, inventore commodi
                amet? Eos, maiores fuga!
            </p>
            <div className='grid sm:grid-cols-2 gap-8'>
                <ProjectItem img={ProjectPacerImg} title='' />
                <ProjectItem img={ProjectPacerImg} title='' />
                <ProjectItem img={ProjectPacerImg} title='' />
                <ProjectItem img={ProjectPacerImg} title='' />
            </div>
        </div>
    );
}

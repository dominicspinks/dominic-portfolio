export default function AboutMe() {
    return (
        <div
            id='aboutMe'
            className='flex flex-col items-center justify-center h-screen max-w-[1000px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-slate-700 py-4'>
                About Me
            </h1>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-start py-2 max-w-[700px]'>
                    I'm a software engineer with six years of experience in IT,
                    starting in tech support and moving through roles in testing,
                    documentation, design, and management.
                </p>
                <p className='text-start py-2 max-w-[700px]'>
                    Problem-solving and critical thinking are my strengths. I enjoy
                    tackling challenging issues with a focus on honesty and
                    accountability. Colleagues know me as patient, logical, and adaptable.
                </p>
                <p className='text-start py-2 max-w-[700px]'>
                    My goal is to lead projects from design to development, which inspired
                    me to complete General Assembly's Software Engineering Immersive. I'm
                    excited to use my skills and experience to make an impact in software
                    engineering.
                </p>
            </div>
        </div>
    );
}

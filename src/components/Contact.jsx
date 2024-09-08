import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaLocationDot } from 'react-icons/fa6';

export default function Contact() {
    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_9ninlqb', 'template_3i22kjj', form.current, {
                publicKey: '_vScShfGw_s20VTwu',
            })
            .then(
                () => {
                    setFormSubmitted(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div
            id='contact'
            className='flex flex-col items-center justify-center h-screen max-w-[1000px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-slate-700'>
                Contact
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-8 flex-wrap w-full'>
                <div className='min-w-[300px] flex flex-col items-start gap-2 lg:gap-6'>
                    <p className='text-lg'>
                        Feel free to reach out if you want to work together
                    </p>
                    <div className='flex gap-4 items-center'>
                        <FaLocationDot
                            className='hover:scale-110 ease-in duration-300'
                            size={20}
                        />
                        Melbourne
                    </div>
                    <a
                        href='mailto:contact@dominicspinks.com'
                        className='flex gap-4 items-center'>
                        <HiMail
                            className='hover:scale-110 ease-in duration-300 hover:opacity-50 cursor-pointer'
                            size={20}
                        />
                        <p>dominic.spinks@outlook.com</p>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/dominicspinks/'
                        className='flex gap-4 items-center'
                        target='_blank'>
                        <FaLinkedinIn
                            className='hover:scale-110 ease-in duration-300 hover:opacity-50 cursor-pointer'
                            size={20}
                        />
                        <p>linkedin.com/in/dominicspinks/</p>
                    </a>
                    <a
                        href='https://github.com/dominicspinks'
                        className='flex gap-4 items-center'
                        target='_blank'>
                        <FaGithub
                            className='hover:scale-110 ease-in duration-300 hover:opacity-50 cursor-pointer'
                            size={20}
                        />
                        <p>github.com/dominicspinks</p>
                    </a>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='w-full lg:w-1/2 min-w-[300px] flex flex-col gap-2'>
                    <div className='grid md:grid-cols-2 gap-4 w-full'>
                        <input
                            type='text'
                            id='from_name'
                            name='from_name'
                            placeholder='Name *'
                            className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300'
                            required
                        />
                        <input
                            type='text'
                            id='from_phone'
                            name='from_phone'
                            placeholder='Phone Number'
                            className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300'
                        />
                    </div>
                    <input
                        type='email'
                        id='from_email'
                        name='from_email'
                        placeholder='Email Address *'
                        className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300 w-full'
                        required
                    />
                    <textarea
                        rows='6'
                        id='message'
                        name='message'
                        placeholder='Enter your message'
                        className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300 w-full'
                        required></textarea>
                    <button
                        type='submit'
                        className='bg-slate-900 py-3 w-full px-8 rounded-lg text-white font-bold'>
                        Send Message
                    </button>
                    <p
                        className={`text-center ${
                            formSubmitted ? 'block' : 'hidden'
                        }`}>
                        Thanks for the message! I will be in touch soon.
                    </p>
                </form>
            </div>
        </div>
    );
}

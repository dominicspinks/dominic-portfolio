import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

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
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div
			id='contact'
			className='max-w-[1000px] h-full m-auto p-4 md:pl-20 p-4 py-16'>
			<h1 className='py-4 text-4xl font-bold text-center text-slate-700'>
				Contact
			</h1>
			<form ref={form} onSubmit={sendEmail} className=''>
				<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
					<div className='flex flex-col'>
						<label
							htmlFor='from_name'
							className='uppercase text-sm py-2'>
							Name *
						</label>
						<input
							type='text'
							id='from_name'
							name='from_name'
							className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300'
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label
							htmlFor='from_phone'
							className='uppercase text-sm py-2'>
							Phone Number
						</label>
						<input
							type='text'
							id='from_phone'
							name='from_phone'
							className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300'
						/>
					</div>
				</div>
				<div className='flex flex-col'>
					<label
						htmlFor='from_email'
						className='uppercase text-sm py-2'>
						Email *
					</label>
					<input
						type='email'
						id='from_email'
						name='from_email'
						className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300'
						required
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='message' className='uppercase text-sm py-2'>
						Message *
					</label>
					<textarea
						rows='6'
						id='message'
						name='message'
						className='border-2 border-gray-300 rounded-lg p-3 flex border-gray-300'
						required></textarea>
				</div>
				<button
					type='submit'
					className='bg-slate-900 py-3 w-full my-8 px-8 rounded-lg text-white font-bold'>
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
	);
}

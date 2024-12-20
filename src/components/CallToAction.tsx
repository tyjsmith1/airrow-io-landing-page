'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import coil from '../assets/images/coil.png';
import pyramid from '../assets/images/pyramid.png';

const INIT = 'INIT';
const SUBMITTING = 'SUBMITTING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';

type FormState =
	| typeof INIT
	| typeof SUBMITTING
	| typeof ERROR
	| typeof SUCCESS;

const formStyles = {
	id: 'clzjxovih00h78g8yt7x6iy8y',
	userGroup: 'Waitlist',
};

const domain = 'app.loops.so';

export const CallToAction = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [email, setEmail] = useState('');
	const [formState, setFormState] = useState<FormState>(INIT);
	const [errorMessage, setErrorMessage] = useState('');

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [400, -20]);

	const resetForm = () => {
		setEmail('');
		setFormState(INIT);
		setErrorMessage('');
	};

	const hasRecentSubmission = () => {
		const time = new Date();
		const timestamp = time.valueOf();
		const previousTimestamp = localStorage.getItem('loops-form-timestamp');

		if (
			previousTimestamp &&
			Number(previousTimestamp) + 60 * 1000 > timestamp
		) {
			setFormState(ERROR);
			setErrorMessage(
				'Too many signups, please try again in a little while'
			);
			return true;
		}

		localStorage.setItem('loops-form-timestamp', timestamp.toString());
		return false;
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (formState !== INIT) return;
		if (!/.+@.+/.test(email)) {
			setFormState(ERROR);
			setErrorMessage('Please enter a valid email');
			return;
		}
		if (hasRecentSubmission()) return;

		setFormState(SUBMITTING);

		const formBody = `userGroup=${encodeURIComponent(
			formStyles.userGroup
		)}&email=${encodeURIComponent(email)}&mailingLists=`;

		fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
			method: 'POST',
			body: formBody,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((res) => [res.ok, res.json(), res] as const)
			.then(([ok, dataPromise, res]) => {
				if (ok) {
					resetForm();
					setFormState(SUCCESS);
				} else {
					dataPromise.then((data) => {
						setFormState(ERROR);
						setErrorMessage(data.message || res.statusText);
						localStorage.setItem('loops-form-timestamp', '');
					});
				}
			})
			.catch((error) => {
				setFormState(ERROR);
				if (error.message === 'Failed to fetch') {
					setErrorMessage(
						'Too many signups, please try again in a little while'
					);
				} else if (error.message) {
					setErrorMessage(error.message);
				}
				localStorage.setItem('loops-form-timestamp', '');
			});
	};

	const renderForm = () => {
		switch (formState) {
			case SUCCESS:
				return (
					<div className='bg-[var(--color-lighter-blue)] p-5 rounded-lg shadow-md max-w-sm mx-auto'>
						<h2 className='text-xl font-bold mb-2'>🎉 Success!</h2>
						<p className='text-center'>
							Thanks! We'll be in touch!
						</p>
					</div>
				);
			case ERROR:
				return (
					<div className='max-w-sm mx-auto'>
						<form
							onSubmit={handleSubmit}
							className='flex flex-col gap-2.5 sm:flex-row'>
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='your@email.com'
								className='h-12 border border-[var(--color-slate-gray-70)] bg-white rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1'
							/>
							<button
								type='submit'
								className='bg-[var(--gradient-purple-2)] text-[var(--color-deep-blue)] h-12 rounded-lg px-5 whitespace-nowrap'>
								Get early access
							</button>
						</form>
						<p className='text-red-700 text-sm mt-2'>
							{errorMessage}
						</p>
						<button
							onClick={resetForm}
							className='text-gray-500 text-sm mt-2 hover:underline cursor-pointer'>
							← Back
						</button>
					</div>
				);
			default:
				return (
					<form
						onSubmit={handleSubmit}
						className='flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='your@email.com'
							className='h-12 border border-[var(--color-slate-gray-70)] bg-white rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1'
						/>
						<button
							type='submit'
							className='bg-[var(--gradient-purple-2)] text-[var(--color-deep-blue)] h-12 rounded-lg px-5 whitespace-nowrap'>
							{formState === SUBMITTING
								? 'Please wait...'
								: 'Get early access'}
						</button>
					</form>
				);
		}
	};

	return (
		<div
			className='bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] py-[72px] sm:py-24 text-center overflow-hidden'
			ref={containerRef}
			id='join-waitlist'>
			<div className='container max-w-xl mx-auto relative'>
				<motion.div
					style={{ translateY }}
					className='absolute -right-[140px] top-[100px] sm:-right-[320px]'>
					<Image
						src={coil}
						alt=''
						className='max-w-[70px] sm:max-w-[70%]'
					/>
				</motion.div>
				<motion.div
					style={{ translateY }}
					className='absolute -left-[140px] -top-[60px] sm:-left-[250px]'>
					<Image
						src={pyramid}
						alt=''
						className='max-w-[100px] sm:max-w-none'
					/>
				</motion.div>
				<h2 className='font-bold text-5xl tracking-tighter sm:text-6xl'>
					Ready to level up your job search?
				</h2>
				<p className='text-xl text-[var(--color-deep-blue-70)] mt-5'>
					Join other smart job seekers who are turning their job
					search from chaos into progress.
				</p>
				<div className='mt-10'>{renderForm()}</div>
			</div>
		</div>
	);
};

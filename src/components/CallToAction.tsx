'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import coil from '../assets/images/coil.png';
import pyramid from '../assets/images/pyramid.png';

export const CallToAction = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [400, -20]);

	return (
		<div
			className='bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] py-[72px] sm:py-24 text-center overflow-hidden'
			ref={containerRef}>
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
				<form className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
					<input
						type='email'
						placeholder='your@email.com'
						className='h-12 border border-[var(--color-slate-gray-70)] bg-white rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1'
					/>
					<button className='bg-[var(--gradient-purple-2)] text-[var(--color-deep-blue)] h-12 rounded-lg px-5 whitespace-nowrap'>
						Get early access
					</button>
				</form>
			</div>
		</div>
	);
};

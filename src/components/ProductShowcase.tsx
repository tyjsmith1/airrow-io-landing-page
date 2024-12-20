'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import applications from '../assets/images/applications.png';

export const ProductShowcase = () => {
	const appImage = useRef<HTMLImageElement>(null);
	const { scrollYProgress } = useScroll({
		target: appImage,
		offset: ['start end', 'end end'],
	});

	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const opcaity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<div className='bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] bg-gradient-to-b from-[var(--color-cloud-white)] to-[var(--color-sky-blue)] py-[72px] sm:py-24'>
			<div className='container overflow-hidden'>
				<h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>
					Simple by design
				</h2>
				<div className='max-w-xl mx-auto'>
					<p className='text-xl text-center text-[var(--color-deep-blue-70)] mt-5'>
						Focus on what matters - landing your next role. No
						complexity, no overwhelm, just the tools you need to
						make progress.
					</p>
				</div>
				<motion.div
					style={{
						opacity: opcaity,
						rotateX: rotateX,
						transformPerspective: '800px',
					}}>
					<Image
						src={applications}
						alt='The product screenshot'
						className='mt-14 mx-auto shadow-xl'
						ref={appImage}
					/>
				</motion.div>
			</div>
		</div>
	);
};

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import Helix from '../assets/images/helix.png';
import Tube from '../assets/images/tube2.png';

export const Hero = () => {
	return (
		<div>
			<div className='bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] bg-[linear-gradient(to_bottom,var(--color-cloud-white),var(--color-purple-very-light)_25%,var(--gradient-purple-1)_45%,var(--gradient-purple-2)_65%,var(--color-sky-blue)_90%)] py-[72px] sm:py-24 relative overflow-hidden'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,107,107,0.1),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(107,77,230,0.1),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(74,144,226,0.1),transparent_50%)]' />
				{/* horizon */}
				{/* <div className='absolute h-[50vh] w-[150vw] rounded-[100%] bg-[var(--color-cloud-white)] left-1/2 -translate-x-1/2 border-0 bg-[radial-gradient(closest-side,var(--color-cloud-white)_82%,var(--color-sky-blue))] top-[calc(100%-96px)]'></div> */}
				<div className='container relative'>
					<div className='flex items-center justify-center'>
						<a
							href='#'
							className='inline-flex gap-2 border py-1 px-2 rounded-lg border-[var(--color-deep-blue)]'>
							<span className='bg-[linear-gradient(to_right,var(--color-deep-blue),var(--color-success),var(--color-sky-blue),var(--color-success),var(--color-deep-blue))] text-transparent bg-clip-text [-webkit-background-clip:text]'>
								Job searching reimagined
							</span>
							<span className='inline-flex items-center gap-1'>
								<span>Read More</span>
								<ArrowWIcon />
							</span>
						</a>
					</div>
					<div className='flex justify-center mt-8'>
						<div className='inline-flex relative'>
							<h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>
								Your job search
								<br /> elevated
							</h1>
							<motion.div
								className='absolute lg:right-[600px] right-[475px] top-[85px] hidden sm:inline'
								animate={{
									y: [0, -20, 0],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}>
								<Image
									src={Tube}
									alt=''
									height='350'
									width='350'
									className='max-w-none'
									draggable='false'
								/>
							</motion.div>
							<motion.div
								className='absolute lg:left-[700px] left-[550px] top-[220px] hidden sm:inline'
								animate={{
									y: [0, -50, 0],
								}}
								transition={{
									duration: 10,
									repeat: Infinity,
									ease: 'easeInOut',
								}}>
								<Image
									src={Helix}
									alt=''
									height='250'
									width='250'
									className='max-w-none'
									draggable='false'
								/>
							</motion.div>
						</div>
					</div>
					<div className='flex justify-center'>
						<p className='text-center text-xl mt-8 max-w-md'>
							Track applications, celebrate wins, and turn your
							job search from chaos into progress with a simple,
							powerful tool built for modern job seekers.
						</p>
					</div>
					<div className='flex justify-center mt-8'>
						<button className='bg-white text-[var(--color-deep-blue)] py-3 px-5 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow'>
							Join the waitlist
						</button>
					</div>
				</div>
			</div>

			<div className='relative w-full'>
				<svg
					className='absolute bottom-0 w-full -mb-1'
					viewBox='0 0 1440 100'
					preserveAspectRatio='none'>
					<path
						fill='var(--color-cloud-white)'
						// fill='var(--color-coral)'
						d='M0,80 L1440,00 L1440,100 L0,100 Z'></path>
				</svg>
			</div>
		</div>
	);
};

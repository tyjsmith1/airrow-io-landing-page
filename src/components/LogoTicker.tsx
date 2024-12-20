'use client';

import { motion } from 'framer-motion';
import {
	ChartGantt,
	ChartNoAxesCombined,
	PencilRuler,
	RefreshCcw,
	Search,
	Trophy,
} from 'lucide-react';
import React from 'react';
import acmeLogo from '../assets/images/acme.png';
import apexLogo from '../assets/images/apex.png';
import celestialLogo from '../assets/images/celestial.png';
import echoLogo from '../assets/images/echo.png';
import pulseLogo from '../assets/images/pulse.png';
import quantumLogo from '../assets/images/quantum.png';

const images = [
	{ src: acmeLogo, alt: 'Acme Logo' },
	{ src: quantumLogo, alt: 'Quantum Logo' },
	{ src: echoLogo, alt: 'Echo Logo' },
	{ src: celestialLogo, alt: 'Celestial Logo' },
	{ src: pulseLogo, alt: 'Pulse Logo' },
	{ src: apexLogo, alt: 'Apex Logo' },
];

const features = [
	{ text: 'Track unlimited applications', icon: Search },
	{ text: 'Get data-driven insights', icon: ChartNoAxesCombined },
	{ text: 'Celebrate your wins', icon: Trophy },
	{ text: 'Customize your workflow', icon: PencilRuler },
	{ text: 'Auto-update your resume', icon: RefreshCcw },
	{ text: 'Track interview progress', icon: ChartGantt },
];

export const LogoTicker = () => {
	return (
		<div className='bg-[var(--color-cloud-white)] py-[72px] sm:py-24'>
			<div className='container'>
				<h2 className='text-xl text-center text-[var(--color-deep-blue-70)]'>
					Everything you need to land your dream job
				</h2>
				<div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,var(--color-cloud-white),rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,var(--color-cloud-white),rgb(0,0,0,0))]">
					<motion.div
						transition={{
							duration: 30,
							ease: 'linear',
							repeat: Infinity,
						}}
						initial={{ translateX: 0 }}
						animate={{ translateX: '-50%' }}
						className='flex gap-16 flex-none pr-16'>
						{features.map(({ text, icon }) => (
							<div
								key={text}
								className='flex items-center gap-2 flex-none'>
								<span className='text-2xl'>
									{React.createElement(icon)}
								</span>
								<span className='text-[var(--color-deep-blue-70)] whitespace-nowrap'>
									{text}
								</span>
							</div>
						))}
						{features.map(({ text, icon }) => (
							<div
								key={`${text}-duplicate`}
								className='flex items-center gap-2 flex-none'>
								<span className='text-2xl'>
									{React.createElement(icon)}
								</span>
								<span className='text-[var(--color-deep-blue-70)] whitespace-nowrap'>
									{text}
								</span>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const Feature = ({
	title,
	description,
	icon: Icon,
}: {
	title: string;
	description: string;
	icon: LucideIcon;
}) => {
	const border = useRef<HTMLDivElement>(null);
	const offsetX = useMotionValue(-100);
	const offsetY = useMotionValue(-100);
	const isHovered = useRef(false);

	const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, var(--color-deep-blue), transparent)`;

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			if (!border.current || !isHovered.current) return;
			const borderRect = border.current?.getBoundingClientRect();
			offsetX.set(e.x - borderRect.x);
			offsetY.set(e.y - borderRect.y);
		};

		const handleMouseEnter = () => {
			isHovered.current = true;
		};

		const handleMouseLeave = () => {
			isHovered.current = false;
			offsetX.set(-100);
			offsetY.set(-100);
		};

		window.addEventListener('mousemove', updateMousePosition);
		border.current?.addEventListener('mouseenter', handleMouseEnter);
		border.current?.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
			border.current?.removeEventListener('mouseenter', handleMouseEnter);
			border.current?.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);
	return (
		<div className='bg-[var(--color-coral-10)] border border-[var(--color-slate-gray-70)] px-5 py-10 text-center rounded-xl sm:flex-1 relative'>
			<motion.div
				className='absolute inset-0 border-4 border-[var(--color-coral)] rounded-xl'
				style={{
					WebkitMaskImage: maskImage,
					maskImage: maskImage,
				}}
				ref={border}></motion.div>
			<div className='inline-flex h-14 w-14 bg-white text-[var(--color-deep-blue)] justify-center items-center rounded-lg'>
				<Icon />
			</div>
			<h3 className='mt-6 font-bold'>{title}</h3>
			<p className='mt-2 text-[var(--color-deep-blue-70)]'>
				{description}
			</p>
		</div>
	);
};

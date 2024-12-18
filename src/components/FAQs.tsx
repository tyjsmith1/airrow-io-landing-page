'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import MinusIcon from '../assets/icons/minus.svg';
import PlusIcon from '../assets/icons/plus.svg';

const faqs = [
	{
		question: 'Is airrow.io free?',
		answer: `Yes! The core features are free forever. We'll offer premium features in the future for power users who want extra insights.`,
	},
	{
		question: 'How is this different from a spreadsheet?',
		answer: 'Unlike spreadsheets, airrow.io is built specifically for job searching with features like progress tracking, analytics, and achievement logging - all in a much cleaner interface.',
	},
	{
		question: 'Can I import my existing job applications?',
		answer: `We're working on import tools for common formats like CSV and Excel. For now, you can easily add applications manually.`,
	},
	{
		question: 'Is my data private?',
		answer: 'Absolutely. Your job search data is private and secure by default. We never share your information without permission.',
	},
];

const AccordianItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div
			className='py-7 border-b border-[var(--color-deep-blue-70)] cursor-pointer'
			onClick={() => setIsOpen(!isOpen)}>
			<div className='flex items-center'>
				<span className='flex-1 text-lg font-bold'>{question}</span>
				{isOpen ? <MinusIcon /> : <PlusIcon />}
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							opacity: 0,
							height: 0,
							marginTop: 0,
						}}
						animate={{
							opacity: 1,
							height: 'auto',
							marginTop: 16,
						}}
						exit={{
							opacity: 0,
							height: 0,
							marginTop: 0,
						}}>
						{answer}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export const FAQs = () => {
	return (
		<div className='bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] bg-gradient-to-b from-[var(--color-sky-blue)] to-[var(--color-cloud-white)] py-[72px] sm:py-24'>
			<div className='container'>
				<h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>
					Frequently asked questions
				</h2>
				<div className='mt-12 max-w-[648px] mx-auto'>
					{faqs.map(({ question, answer }) => (
						<AccordianItem
							key={question}
							question={question}
							answer={answer}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

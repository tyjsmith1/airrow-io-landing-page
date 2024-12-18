'use client';
import { ChartNoAxesCombined, Search, Trophy } from 'lucide-react';
import { Feature } from './Feature';

const features = [
	{
		title: 'Track Like a Pro',
		description:
			'Never lose track of an application again. Stay on top of every opportunity with our simple but powerful tracking system.',
		icon: Search,
	},
	{
		title: 'Data-Driven Insights',
		description: `Understand what's working in your job search with clear analytics and actionable feedback on your application strategy.`,
		icon: ChartNoAxesCombined,
	},
	{
		title: 'Document Your Wins',
		description:
			'Build your career story by logging achievements, skills, and wins. Perfect for updating resumes and prepping for interviews.',
		icon: Trophy,
	},
];

export const Features = () => {
	return (
		<div className='bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] py-[72px] sm:py-24'>
			<div className='container relative'>
				<h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
					Job searching doesn't have to suck
				</h2>
				<div className='max-w-xl mx-auto'>
					<p className='text-center mt-5 text-xl text-[var(--color-deep-blue-70)]'>
						Keep everything organized and get insights that actually
						help you land your next role.
					</p>
				</div>
				<div className='mt-16 flex flex-col sm:flex-row gap-4 sm:mx-auto lg:mx-40'>
					{features.map(({ title, description, icon }) => (
						<Feature
							title={title}
							description={description}
							key={title}
							icon={icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

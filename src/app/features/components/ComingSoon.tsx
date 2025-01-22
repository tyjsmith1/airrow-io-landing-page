import { Rocket, Star, Zap } from 'lucide-react';

const features = [
	{
		icon: Star,
		name: 'AI-Powered Resume Builder',
		description: 'Create tailored resumes with AI assistance.',
	},
	{
		icon: Zap,
		name: 'Interview Simulator',
		description: 'Practice with AI-generated interview questions.',
	},
	{
		icon: Rocket,
		name: 'Career Path Planner',
		description: 'Map out your long-term career goals and milestones.',
	},
];

export default function ComingSoon() {
	return (
		<section className='py-24 px-4 sm:px-6 lg:px-8 bg-cloud-white'>
			<div className='max-w-7xl mx-auto text-center'>
				<h2 className='text-3xl font-bold text-deep-blue mb-16 font-inter'>
					More Features Coming Soon
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200'>
							<feature.icon className='text-sky-blue w-12 h-12 mx-auto mb-6' />
							<h3 className='text-xl font-semibold text-deep-blue mb-4 font-inter'>
								{feature.name}
							</h3>
							<p className='text-slate-gray mb-6 font-sf-pro'>
								{feature.description}
							</p>
							<button className='text-sky-blue border-2 border-sky-blue hover:bg-sky-blue hover:text-white font-medium px-6 py-2 rounded-full transition-colors duration-200'>
								Vote
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

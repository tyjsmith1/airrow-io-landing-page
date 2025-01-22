import { CheckCircle } from 'lucide-react';

interface FeatureDeepDiveProps {
	title: string;
	description: string;
	capabilities: string[];
	imageSrc: string;
	imageAlt: string;
	reversed?: boolean;
}

export default function FeatureDeepDive({
	title,
	description,
	capabilities,
	imageSrc,
	imageAlt,
	reversed = false,
}: FeatureDeepDiveProps) {
	return (
		<section
			className={`py-24 px-4 sm:px-6 lg:px-8 ${
				reversed ? 'bg-cloud-white' : 'bg-white'
			}`}>
			<div
				className={`max-w-7xl mx-auto flex flex-col ${
					reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
				} items-center gap-16`}>
				<div className='lg:w-1/2'>
					<img
						src={imageSrc}
						alt={imageAlt}
						className='rounded-lg shadow-lg w-full'
					/>
				</div>
				<div className='lg:w-1/2'>
					<h3 className='text-3xl font-bold text-deep-blue mb-6 font-inter'>
						{title}
					</h3>
					<p className='text-lg text-slate-gray mb-8 font-sf-pro'>
						{description}
					</p>
					<ul className='space-y-4 mb-10'>
						{capabilities.map((capability, index) => (
							<li key={index} className='flex items-start'>
								<CheckCircle className='text-sky-blue mr-3 mt-1 flex-shrink-0 h-5 w-5' />
								<span className='text-slate-gray font-sf-pro'>
									{capability}
								</span>
							</li>
						))}
					</ul>
					<button className='text-sky-blue border-2 border-sky-blue hover:bg-sky-blue hover:text-white font-medium px-8 py-3 rounded-full transition-colors duration-200'>
						Learn more
					</button>
				</div>
			</div>
		</section>
	);
}

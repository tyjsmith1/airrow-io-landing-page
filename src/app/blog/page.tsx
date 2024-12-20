import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog | airrow.io - Career Insights & Job Search Tips',
	description:
		'Discover expert advice, industry insights, and practical tips to optimize your job search and advance your career. Stay updated with the latest trends in job hunting and professional development.',
};

export default function BlogPage() {
	return (
		<>
			<Navbar />
			<main className='min-h-screen'>
				<section className='bg-gradient-to-b from-cloud-white to-white py-24 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-4xl sm:text-5xl font-bold text-deep-blue mb-6 font-inter'>
							Blog coming soon
						</h1>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

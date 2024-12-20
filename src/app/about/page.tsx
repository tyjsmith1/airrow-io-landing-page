import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Us | airrow.io - Revolutionizing Job Search Management',
	description:
		"Meet the team behind airrow.io and learn about our mission to transform the job search experience. Discover how we're helping job seekers organize, track, and optimize their career journey.",
};

export default function AboutPage() {
	return (
		<>
			<Navbar />
			<main className='min-h-screen'>
				<section className='bg-gradient-to-b from-cloud-white to-white py-24 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-4xl sm:text-5xl font-bold text-deep-blue mb-6 font-inter'>
							About Us Page coming soon
						</h1>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Join the Waitlist | airrow.io - Smart Job Application Tracking',
	description:
		'Be among the first to experience airrow.io - the intelligent job application tracking platform that helps you organize applications, track progress, and land your dream job faster.',
};

export default function JoinWaitlistPage() {
	return (
		<>
			<Navbar />
			<main className='min-h-screen'>
				<section className='bg-gradient-to-b from-cloud-white to-white py-24 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-4xl sm:text-5xl font-bold text-deep-blue mb-6 font-inter'>
							Join Waitlist Page coming soon
						</h1>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

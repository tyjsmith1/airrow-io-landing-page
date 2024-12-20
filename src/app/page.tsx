import { Banner } from '@/components/Banner';
import { CallToAction } from '@/components/CallToAction';
import { FAQs } from '@/components/FAQs';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { Navbar } from '@/components/Navbar';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'airrow.io - Smart Job Application Tracking & Career Management',
	description:
		'Streamline your job search with airrow.io. Our AI-powered platform helps you track applications, manage deadlines, and gain insights to land your dream job faster. Get organized and stay ahead in your career journey.',
};

export default function Home() {
	return (
		<>
			<Banner />
			<Navbar />
			<Hero />
			<LogoTicker />
			<Features />
			<ProductShowcase />
			<FAQs />
			<CallToAction />
			<Footer />
		</>
	);
}

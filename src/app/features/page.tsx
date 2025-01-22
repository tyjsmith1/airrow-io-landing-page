// import Applications from '@/assets/images/applications.png';
// import InsightDemo from '@/assets/images/Insight-demo.png';
// import Logger from '@/assets/images/logger.png';
// import { Footer } from '@/components/Footer';
// import { Navbar } from '@/components/Navbar';
// import { Metadata } from 'next';
// import ComingSoon from './components/ComingSoon';
// import FeatureDeepDive from './components/FeatureDeepDive';
// import FinalCTA from './components/FinalCTA';
// import Hero from './components/Hero';

// export const metadata: Metadata = {
// 	title: 'Features | Job Application Tracker',
// 	description:
// 		'Discover the powerful features of our job application tracking app.',
// };

// export default function FeaturesPage() {
// 	return (
// 		<>
// 			<Navbar />
// 			<main className='min-h-screen'>
// 				<Hero />
// 				<FeatureDeepDive
// 					title='Track Applications Like a Pro'
// 					description='Say goodbye to messy spreadsheets. Our intuitive tracking system keeps all your applications organized and up-to-date.'
// 					capabilities={[
// 						'Real-time status updates',
// 						'Custom pipeline stages',
// 						'Deadline reminders',
// 					]}
// 					imageSrc={Applications.src}
// 					imageAlt='Application Tracking Screenshot'
// 				/>
// 				<FeatureDeepDive
// 					title='Data-Driven Insights'
// 					description='Understand your job search performance with powerful analytics that help you make better decisions.'
// 					capabilities={[
// 						'Response rate tracking',
// 						'Industry insights',
// 						'Salary benchmarking',
// 					]}
// 					imageSrc={InsightDemo.src}
// 					imageAlt='Analytics Dashboard Screenshot'
// 					reversed
// 				/>
// 				<FeatureDeepDive
// 					title='Document Your Wins'
// 					description='Never forget your accomplishments. Log achievements as they happen for better interview prep and resume updates.'
// 					capabilities={[
// 						'Achievement templates',
// 						'Tag system for easy filtering',
// 						'One-click resume export',
// 					]}
// 					imageSrc={Logger.src}
// 					imageAlt='Achievement Logger Screenshot'
// 				/>
// 				<ComingSoon />
// 				<FinalCTA />
// 			</main>
// 			<Footer />
// 		</>
// 	);
// }

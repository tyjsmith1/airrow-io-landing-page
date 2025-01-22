import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
// import { Inter } from "next/font/google";
import clsx from 'clsx';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'airrow.io - Smart Job Application Tracking & Career Management',
	description:
		'Streamline your job search with airrow.io. Our AI-powered platform helps you track applications, manage deadlines, and gain insights to land your dream job faster. Get organized and stay ahead in your career journey.',
	icons: {
		icon: [
			{
				url: '/favicon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
			},
			{
				url: '/favicon.svg',
				type: 'image/svg+xml',
			},
			{
				url: '/favicon.ico',
				type: 'image/x-icon',
			},
		],
		shortcut: '/favicon.ico',
		apple: [
			{
				url: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	},
	manifest: '/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={clsx(dmSans.className, 'antialiased')}>
				{children}
			</body>
		</html>
	);
}

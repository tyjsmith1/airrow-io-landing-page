// import { Footer } from '@/components/Footer';
// import { Navbar } from '@/components/Navbar';
// import { Metadata } from 'next';
// import { BlogCard } from '@/components/blog-card'
// import { Button } from '@/components/ui/button'

// export const metadata: Metadata = {
// 	title: 'Blog | airrow.io - Career Insights & Job Search Tips',
// 	description:
// 		'Discover expert advice, industry insights, and practical tips to optimize your job search and advance your career. Stay updated with the latest trends in job hunting and professional development.',
// };

// const SAMPLE_POSTS: BlogPost[] = [
// 	{
// 	  slug: 'how-to-track-your-job-applications',
// 	  title: 'How to Track Your Job Applications Like a Pro',
// 	  excerpt: 'Learn effective strategies to organize and monitor your job search process...',
// 	  author: {
// 		name: 'Jane Doe',
// 		avatar: '/avatars/jane-doe.jpg',
// 		bio: 'Jane Doe is a seasoned HR professional with over 10 years of experience in the tech industry. She is passionate about helping job seekers navigate the hiring process and find their dream roles.'
// 	  },
// 	  readingTime: '5 min read',
// 	  publishedAt: 'May 15, 2023',
// 	  featuredImage: '/featuredImage/fi1.jpg',
// 	},
// 	{
// 	  slug: 'data-behind-successful-job-searches',
// 	  title: 'The Data Behind Successful Job Searches',
// 	  excerpt: 'Discover the key metrics and insights that lead to landing your dream job...',
// 	  author: {
// 		name: 'John Smith',
// 		avatar: '/avatars/john-smith.jpg',
// 		bio: 'John Smith is a data scientist and career analytics expert with 8 years of experience in recruitment analytics. He specializes in using data-driven approaches to optimize job search strategies.'
// 	  },
// 	  readingTime: '7 min read',
// 	  publishedAt: 'May 10, 2023',
// 	  featuredImage: '/featuredImage/fi2.jpg',
// 	},
// 	{
// 	  slug: 'common-job-application-mistakes',
// 	  title: '5 Common Job Application Mistakes to Avoid',
// 	  excerpt: 'Don\'t let these errors cost you your dream job. Learn how to sidestep them...',
// 	  author: {
// 		name: 'Emily Johnson',
// 		avatar: '/avatars/emily-johnson.jpg',
// 		bio: 'Emily Johnson is a professional resume writer and career counselor with 8 years of experience helping job seekers perfect their applications. She has reviewed thousands of resumes across various industries.'
// 	  },
// 	  readingTime: '6 min read',
// 	  publishedAt: 'May 5, 2023',
// 	  featuredImage: '/featuredImage/fi3.jpg',
// 	},
// 	{
// 	  slug: 'organization-key-to-dream-role',
// 	  title: 'Why Organization is Key to Landing Your Dream Role',
// 	  excerpt: 'Discover how staying organized can significantly boost your job search success...',
// 	  author: {
// 		name: 'Michael Brown',
// 		avatar: '/avatars/michael-brown.jpg',
// 		bio: 'Michael Brown is an organizational development consultant who has helped hundreds of professionals streamline their job search process. He combines practical strategies with proven methodologies.'
// 	  },
// 	  readingTime: '4 min read',
// 	  publishedAt: 'April 30, 2023',
// 	  featuredImage: '/featuredImage/fi4.jpg',
// 	},
// 	{
// 	  slug: 'using-analytics-to-optimize-job-search',
// 	  title: 'Using Analytics to Optimize Your Job Search',
// 	  excerpt: 'Learn how to leverage data to improve your application strategy and success rate...',
// 	  author: {
// 		name: 'Sarah Lee',
// 		avatar: '/avatars/sarah-lee.jpg',
// 		bio: 'Sarah Lee is an analytics expert turned career advisor who brings a unique data-driven perspective to job searching. She helps candidates understand and leverage metrics for better results.'
// 	  },
// 	  readingTime: '8 min read',
// 	  publishedAt: 'April 25, 2023',
// 	  featuredImage: '/featuredImage/fi5.jpg',
// 	},
// 	{
// 	  slug: 'psychology-of-job-application-follow-ups',
// 	  title: 'The Psychology of Job Application Follow-ups',
// 	  excerpt: 'Understand the science behind effective follow-ups and how to use it to your advantage...',
// 	  author: {
// 		name: 'David Wilson',
// 		avatar: '/avatars/david-wilson.jpg',
// 		bio: 'David Wilson is a psychology professor and career coach who specializes in helping job seekers navigate the emotional aspects of the job application process. He uses psychological insights to improve communication and build stronger connections with potential employers.'
// 	  },
// 	  readingTime: '6 min read',
// 	  publishedAt: 'April 20, 2023',
// 	  featuredImage: '/featuredImage/fi6.jpg',
// 	},
//   ]

// export interface BlogPost {
// 	title: string
// 	slug: string
// 	excerpt: string
// 	author: {
// 	  name: string
// 	  avatar: string
// 	  bio: string
// 	}
// 	readingTime: string
// 	publishedAt: string
// 	featuredImage: string
// }

// export default function BlogPage() {
// 	return (
// 		<>
// 			<Navbar />
// 			<main className='min-h-screen'>
// 				<section className='bg-gradient-to-b from-cloud-white to-white py-24 px-4 sm:px-6 lg:px-8'>
// 					<div className='max-w-4xl mx-auto text-center'>
// 						<div className="container mx-auto px-4 py-8">
// 							<h1 className="text-4xl font-bold mb-8 text-primary">airrow.io Blog</h1>
// 							<div className="grid gap-8 md:grid-cols-2">
// 								{SAMPLE_POSTS.map((post) => (
// 								<BlogCard key={post.slug} post={post} />
// 								))}
// 							</div>
// 							<div className="mt-8 flex justify-center">
// 								<Button variant="outline">Load More</Button>
// 							</div>
// 							</div>
// 					</div>
// 				</section>
// 			</main>
// 			<Footer />
// 		</>
// 	);
// }

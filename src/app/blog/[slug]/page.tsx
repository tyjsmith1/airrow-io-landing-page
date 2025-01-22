// import Image from 'next/image'
// import { notFound } from 'next/navigation'
// import { AuthorBio } from '@/components/author-bio'
// import { TableOfContents } from '@/components/table-of-contents'
// import { NewsletterSignup } from '@/components/newsletter-signup'
// import { ShareButtons } from '@/components/share-buttons'
// // import { RelatedPosts } from '@/components/related-posts'
// import { Navbar } from '@/components/Navbar'
// import { Footer } from '@/components/Footer'
// import type { BlogPost } from '../page'

// interface BlogPostFull extends BlogPost {
//   content: string
//   tableOfContents: {
//     title: string
//     anchor: string
//   }[]
//   relatedPosts: BlogPost[]
// }

// // This would typically come from a CMS or API
// const SAMPLE_POST: BlogPostFull = {
//   slug: 'how-to-track-your-job-applications',
//   title: 'How to Track Your Job Applications Like a Pro',
//   excerpt: 'Learn effective strategies to organize and monitor your job search process for maximum success.',
//   author: {
//     name: 'Jane Doe',
//     avatar: '/avatars/jane-doe.jpg',
//     bio: 'Jane is a career coach with over 10 years of experience in helping job seekers land their dream roles.',
//   },
//   readingTime: '5 min read',
//   publishedAt: 'May 15, 2023',
//   featuredImage: '/featuredImage/fi1.jpg',
//   content: `
//     <h2 id="importance-of-tracking">The Importance of Tracking Your Job Applications</h2>
//     <p>In today's competitive job market, staying organized is crucial. Tracking your job applications helps you...</p>

//     <h2 id="tools-for-tracking">Tools for Tracking Your Job Search</h2>
//     <p>There are numerous tools available to help you track your job applications. Some popular options include...</p>

//     <h2 id="what-to-track">What Information to Track</h2>
//     <p>When tracking your job applications, be sure to include the following information...</p>

//     <h2 id="follow-up-strategies">Follow-up Strategies</h2>
//     <p>Following up on your applications is a crucial part of the job search process. Here are some effective strategies...</p>

//     <h2 id="analyzing-your-data">Analyzing Your Application Data</h2>
//     <p>Regularly reviewing your job application data can provide valuable insights. Look for patterns in...</p>
//   `,
//   tableOfContents: [
//     { title: 'The Importance of Tracking Your Job Applications', anchor: 'importance-of-tracking' },
//     { title: 'Tools for Tracking Your Job Search', anchor: 'tools-for-tracking' },
//     { title: 'What Information to Track', anchor: 'what-to-track' },
//     { title: 'Follow-up Strategies', anchor: 'follow-up-strategies' },
//     { title: 'Analyzing Your Application Data', anchor: 'analyzing-your-data' },
//   ],
//   relatedPosts: [
//     // Add 3 related posts here, using the BlogPost interface
//   ],
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   // In a real application, fetch the post data based on the slug
//   const post = SAMPLE_POST

//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     }
//   }

//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: [{ url: post.featuredImage }],
//     },
//   }
// }

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   const post = SAMPLE_POST
//   if (!post) notFound()

//   return (
//     <div>
//     <Navbar />
//     <main className='min-h-screen'>
//     <article className="container mx-auto px-4 py-12 max-w-7xl">
//       {/* Header Section */}
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{post.title}</h1>

//         {/* Author Info */}
//         <div className="flex items-center space-x-4 mb-10">
//           <Image
//             src={post.author.avatar}
//             alt={post.author.name}
//             width={48}
//             height={48}
//             className="rounded-full border-2 border-muted"
//           />
//           <div>
//             <p className="font-medium text-lg">{post.author.name}</p>
//             <p className="text-sm text-muted-foreground">
//               {post.publishedAt} • {post.readingTime}
//             </p>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="relative aspect-[2/1] mb-12">
//           <Image
//             src={post.featuredImage}
//             alt={post.title}
//             fill
//             className="rounded-xl object-cover"
//             priority
//           />
//         </div>

//         {/* Content Section */}
//         <div className="flex flex-col lg:flex-row lg:space-x-12">
//           {/* Sidebar */}
//           <aside className="lg:w-64 mb-8 lg:mb-0">
//             <div className="sticky top-8">
//               <TableOfContents toc={post.tableOfContents} />
//             </div>
//           </aside>

//           {/* Main Content */}
//           <div className="flex-1">
//             <div
//               className="prose prose-lg dark:prose-invert max-w-none mb-12
//                 prose-headings:font-bold prose-headings:tracking-tight
//                 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
//                 prose-p:leading-relaxed prose-p:mb-6
//                 prose-a:text-primary prose-a:no-underline hover:prose-a:underline
//                 prose-img:rounded-lg
//                 prose-ul:list-disc prose-ul:ml-6
//                 prose-ol:list-decimal prose-ol:ml-6
//                 border-gray-200 dark:border-gray-800"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             <ShareButtons url={`https://hireground.app/blog/${post.slug}`} title={post.title} />

//             <hr className="my-12 border-muted" />

//             {/* Author Bio Card */}
//             <div className="bg-card rounded-xl p-6 mb-12">
//               <AuthorBio author={post.author} />
//             </div>

//             {/* Newsletter & Related Posts */}
//             <div className="space-y-12">
//               <div className="bg-muted/50 rounded-xl p-8">
//                 <NewsletterSignup />
//               </div>
//               <RelatedPosts posts={post.relatedPosts} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//     <Footer />
//     </main>
//     </div>
//   )
// }

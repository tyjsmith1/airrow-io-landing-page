import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface BlogCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    author: {
      name: string
      avatar: string
    }
    readingTime: string
    publishedAt: string
    featuredImage: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="mb-2 text-xl font-bold text-primary">{post.title}</h3>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 bg-secondary/10">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}


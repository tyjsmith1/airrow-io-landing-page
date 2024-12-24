import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface AuthorBioProps {
  author: {
    name: string
    avatar: string
    bio: string
  }
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-lg">
      <Avatar className="h-16 w-16">
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold">{author.name}</h3>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  )
}


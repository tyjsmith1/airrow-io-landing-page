interface TableOfContentsProps {
    toc: {
      title: string
      anchor: string
    }[]
  }
  
  export function TableOfContents({ toc }: TableOfContentsProps) {
    return (
      <nav className="p-4 bg-secondary/10 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
        <ul className="space-y-2">
          {toc.map((item) => (
            <li key={item.anchor}>
              <a
                href={`#${item.anchor}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  
  
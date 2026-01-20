import { Github } from 'lucide-react'

type FooterProps = {
  translations: {
    sources: string
    disclaimer: string
    builtBy: string
  }
}

export function Footer({ translations }: FooterProps) {
  return (
    <footer className="border-t mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>{translations.sources}</p>
          <p>{translations.disclaimer}</p>
          <p className="flex items-center justify-center gap-2 pt-2">
            {translations.builtBy}{' '}
            <a
              href="https://instagram.com/typescriptheo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              @typescriptheo
            </a>
            <span className="mx-2">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

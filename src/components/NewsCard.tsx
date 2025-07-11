
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { NewsArticle } from '@/lib/newsData';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  if (!article || !article.slug) {
    return null; 
  }

  return (
    <Link href={`/news/${article.slug}`} className="group block h-full">
      <Card className="flex flex-col md:flex-row h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="md:w-1/3 w-full h-48 md:h-auto relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="news article image"
          />
        </div>
        <CardContent className="p-6 flex flex-col justify-between md:w-2/3">
          <div>
            <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{article.category}</Badge>
                <p className="text-xs text-muted-foreground font-body">
                    {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            </div>
            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm font-body line-clamp-3">
              {article.excerpt}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

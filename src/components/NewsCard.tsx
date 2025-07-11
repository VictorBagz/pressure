
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  article: {
    slug: string;
    title: string;
    category: string;
    imageUrl: string;
    excerpt: string;
    date: string; // Assuming date is a string in 'YYYY-MM-DD' format
  };
}

export default function NewsCard({ article }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col md:flex-row overflow-hidden h-full group transition-all duration-300 hover:shadow-xl hover:border-primary/30">
      <div className="md:w-1/3 w-full h-48 md:h-auto relative overflow-hidden">
        <Link href={`/news/${article.slug}`}>
          <Image
            src={article.imageUrl || 'https://placehold.co/600x400.png'}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="news article"
          />
        </Link>
      </div>
      <div className="md:w-2/3 p-6 flex flex-col">
        <CardHeader className="p-0 mb-4">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="secondary">{article.category}</Badge>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>
          <CardTitle className="text-xl font-bold text-primary">
            <Link href={`/news/${article.slug}`} className="hover:text-accent transition-colors">
              {article.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <p className="text-muted-foreground font-body leading-relaxed">{article.excerpt}</p>
        </CardContent>
        <div className="mt-6">
          <Link href={`/news/${article.slug}`} className="font-semibold text-primary inline-flex items-center group-hover:text-accent transition-colors">
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

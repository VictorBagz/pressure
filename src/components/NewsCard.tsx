
import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem } from '@/lib/newsData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  item: NewsItem;
  layout?: 'vertical' | 'horizontal';
}

export default function NewsCard({ item, layout = 'vertical' }: NewsCardProps) {
  if (layout === 'horizontal') {
    return (
      <Link href={item.link} className="group block">
        <Card className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 flex flex-col sm:flex-row">
          <div className="relative sm:aspect-square sm:w-1/3 md:w-1/4 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={item.aiHint}
              className="transition-transform duration-300 group-hover:scale-105 aspect-video sm:aspect-square"
            />
          </div>
          <CardContent className="p-6 flex-grow flex flex-col justify-between w-full">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <Badge>{item.category}</Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-tight">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  // Default vertical layout
  return (
    <Link href={item.link} className="group block h-full">
      <Card className="flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
        <div className="relative aspect-video">
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={item.aiHint}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3">{item.category}</Badge>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-tight">{item.title}</h3>
            <p className="text-muted-foreground font-body mb-4 text-sm">{item.excerpt}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t">
            <Calendar className="h-4 w-4" />
            <span>{item.date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

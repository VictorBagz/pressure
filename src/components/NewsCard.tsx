
import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem } from '@/lib/newsData';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <AnimateOnScroll className="h-full" initialClass="opacity-0 scale-95" finalClass="opacity-100 scale-100">
      <Link href={item.link} className="group block h-full">
        <Card className="flex flex-row h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
          <div className="relative w-1/3 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={item.aiHint}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-tight">{item.title}</h3>
              <p className="text-muted-foreground font-body mb-3 text-sm">{item.excerpt}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Calendar className="h-4 w-4" />
              <span>{item.date}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </AnimateOnScroll>
  );
}

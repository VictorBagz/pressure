'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

const newsData = [
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'rugby team huddle',
    category: 'Tournament',
    title: 'Pirates Clinch National Sevens Title in Thrilling Final',
    excerpt: 'The Pirates defeated the Heathens in a nail-biting final to be crowned champions of the National Sevens Series.',
    date: 'October 28, 2024',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'charity event handshake',
    category: 'Community',
    title: 'Foundation Partners with Local Schools for Youth Clinic',
    excerpt: 'We successfully hosted a rugby clinic for over 200 children, promoting the sport and its values of teamwork and discipline.',
    date: 'October 15, 2024',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'player signing autograph',
    category: 'Player Spotlight',
    title: 'Rising Star: A Conversation with Adrian Kasito',
    excerpt: 'We sat down with the Kobs scrum-half to discuss his journey, ambitions, and the importance of player welfare.',
    date: 'September 29, 2024',
    link: '#',
  },
];

export default function News() {
  const [showAll, setShowAll] = useState(false);
  const displayedNews = showAll ? newsData : newsData.slice(0, 3);

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll initialClass="opacity-0 -translate-y-8" finalClass="opacity-100 translate-y-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 font-body max-w-3xl mx-auto">
            Stay informed about our impact, community events, and the stories of the players you support.
            </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item, index) => (
            <AnimateOnScroll
              key={index}
              initialClass="opacity-0 scale-95"
              finalClass="opacity-100 scale-100"
              className="transition-all duration-500"
              threshold={0.2}
            >
              <Link href={item.link} className="group block">
                <Card className="flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="relative h-56 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={item.aiHint}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                     <Badge variant="secondary" className="absolute top-3 right-3 text-sm">{item.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground font-body">{item.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {!showAll && newsData.length > 3 && (
          <div className="text-center mt-12">
            <Button onClick={() => setShowAll(true)} size="lg" className="bg-primary hover:bg-primary/90">
              <ArrowRight className="mr-2 h-5 w-5" />
              View More News
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

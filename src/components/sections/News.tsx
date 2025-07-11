
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

const newsData = [
  {
    image: '/photos/pirates.jpeg',
    aiHint: 'rugby team huddle',
    category: 'Tournament',
    title: 'Pirates Clinch National Sevens Title in Thrilling Final',
    excerpt: 'The Pirates defeated the Heathens in a nail-biting final to be crowned champions of the National Sevens Series.',
    date: 'October 28, 2024',
    link: '#',
  },
  {
    image: '/photos/community.jpeg',
    aiHint: 'charity event handshake',
    category: 'Community',
    title: 'Foundation Partners with Local Schools for Youth Clinic',
    excerpt: 'We successfully hosted a rugby clinic for over 200 children, promoting the sport and its values.',
    date: 'October 15, 2024',
    link: '#',
  },
  {
    image: '/photos/player-spotlight.jpeg',
    aiHint: 'player signing autograph',
    category: 'Player Spotlight',
    title: 'Rising Star: A Conversation with Adrian Kasito',
    excerpt: 'We sat down with the Kobs scrum-half to discuss his journey, ambitions, and player welfare.',
    date: 'September 29, 2024',
    link: '#',
  },
   {
    image: '/photos/jjuko.jpeg',
    aiHint: 'rugby player action',
    category: 'Fundraiser',
    title: 'Annual Fundraising Gala Exceeds Expectations',
    excerpt: 'Thanks to our generous donors, we raised a record amount to support player insurance for the next season.',
    date: 'September 10, 2024',
    link: '#',
  },
];

const NewsCard = ({ item }: { item: typeof newsData[0] }) => (
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


export default function News() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedArticles = showAll ? newsData : newsData.slice(0, 2);

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

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedArticles.map((item, index) => (
                <NewsCard key={index} item={item} />
            ))}
        </div>

        {!showAll && newsData.length > 2 && (
          <div className="text-center mt-12">
            <AnimateOnScroll>
                <Button onClick={() => setShowAll(true)} size="lg" className="bg-primary hover:bg-primary/90">
                View More News
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </AnimateOnScroll>
          </div>
        )}
      </div>
    </section>
  );
}

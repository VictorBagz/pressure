import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

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
          {newsData.map((item, index) => (
            <AnimateOnScroll
              key={index}
              initialClass="opacity-0 scale-95"
              finalClass="opacity-100 scale-100"
              className="transition-all duration-500"
              threshold={0.2}
            >
              <Card className="flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={item.aiHint}
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="text-xl leading-snug text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground font-body">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <a href={item.link} className="text-primary font-semibold hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

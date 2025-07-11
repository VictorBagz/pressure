
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '../AnimateOnScroll';
import { getNewsArticles } from '@/lib/news';
import { Newspaper } from 'lucide-react';

export default async function News() {
  const allArticles = await getNewsArticles();
  const articles = allArticles.slice(0, 4); // Show only the latest 4 on the homepage

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Newspaper className="h-10 w-10 mx-auto text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              The latest stories, announcements, and updates from our foundation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          initialClass="opacity-0 translate-y-8"
          finalClass="opacity-100 translate-y-0"
          className="transition-all duration-700 delay-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/news">View More News</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

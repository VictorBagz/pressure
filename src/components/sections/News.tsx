
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';
import { newsData } from '@/lib/newsData';
import NewsCard from '@/components/NewsCard';

export default function News() {
  const displayedArticles = newsData.slice(0, 2);

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll initialClass="opacity-0 -translate-y-8" finalClass="opacity-100 translate-y-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-heading">
            Latest News & Updates
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {displayedArticles.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>

        {newsData.length > 2 && (
          <div className="text-center mt-12">
            <AnimateOnScroll>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/news">
                  View More News
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimateOnScroll>
          </div>
        )}
      </div>
    </section>
  );
}

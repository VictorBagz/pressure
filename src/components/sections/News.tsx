
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '../AnimateOnScroll';
import { getNewsArticles } from '@/lib/news';
import { Newspaper } from 'lucide-react';

export default async function News() {
  const allArticles = await getNewsArticles();
  const recentArticles = allArticles.slice(0, 2); // Show the 2 most recent articles

  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-12">
          <Newspaper className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Stay informed with the latest developments from the foundation and the Ugandan rugby community.
          </p>
        </AnimateOnScroll>
        
        {recentArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {recentArticles.map((article) => (
              <AnimateOnScroll key={article.id} className="h-full">
                <NewsCard article={article} />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-card rounded-lg">
             <p className="text-muted-foreground">No news articles found. Check back later!</p>
          </div>
        )}
        
        {allArticles.length > 2 && (
             <AnimateOnScroll className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base">
                    <Link href="/news">View More Articles</Link>
                </Button>
            </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}

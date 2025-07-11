
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/NewsCard';
import { getNewsArticles } from '@/lib/news';
import { Newspaper } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'News & Updates | RugbyCare UG',
  description: 'The latest stories, announcements, and updates from the Kayondo Ronnie Jr Foundation and the Athletes Medical Fund.',
};

export default async function NewsPage() {
  const articles = await getNewsArticles();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl mx-auto text-center mb-16">
            <Newspaper className="h-12 w-12 mx-auto text-primary mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              News & Updates
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              The latest stories, announcements, and updates from our foundation.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll
            initialClass="opacity-0 translate-y-8"
            finalClass="opacity-100 translate-y-0"
            className="transition-all duration-700 delay-200"
          >
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))
              ) : (
                <div className="text-center col-span-full py-16">
                    <p className="text-muted-foreground">No news articles found. Please check back later or add some in the admin dashboard.</p>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </div>
  );
}

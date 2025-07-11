
import type { Metadata } from 'next';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getNewsArticles } from '@/lib/news';
import { Newspaper } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: "News & Updates | RugbyCare UG",
    description: "The latest news, stories, and updates from the Kayondo Ronnie Jr Foundation and the Ugandan rugby community.",
};

export default async function NewsListPage() {
  const allArticles = await getNewsArticles();

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
        <Header />
        <main className="flex-grow py-20">
            <div className="container mx-auto px-6">
                <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-12">
                    <Newspaper className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        News & Updates
                    </h1>
                    <p className="text-lg text-muted-foreground font-body">
                        Stay informed with the latest developments from the foundation and the Ugandan rugby community.
                    </p>
                </AnimateOnScroll>
                
                {allArticles.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {allArticles.map((article) => (
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
            </div>
        </main>
        <Footer />
    </div>
  );
}

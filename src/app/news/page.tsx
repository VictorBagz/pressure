
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/NewsCard';
import { Newspaper } from 'lucide-react';
import { firestore } from '@/lib/firebase';
import { unstable_noStore as noStore } from 'next/cache';
import type { NewsItem } from '@/lib/newsData';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: "News & Updates | RugbyCare UG",
  description: "Stay up to date with the latest news, events, and stories from the Kayondo Ronnie Jr Foundation and the Athletes Medical Fund.",
};

async function getNews(): Promise<NewsItem[]> {
  noStore();
  const snapshot = await firestore.collection('news').orderBy('createdAt', 'desc').get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      image: data.imageUrl,
      aiHint: data.aiHint,
      category: data.category,
      date: format(data.createdAt.toDate(), 'PPP'), // 'PPP' -> Jun 30, 2025
      content: data.content,
      link: `/news/${data.slug}`,
    };
  });
}


export default async function NewsPage() {
  const newsData = await getNews();

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-grow py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Newspaper className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">
              News & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The latest stories, announcements, and updates from our foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {newsData.map((item) => (
              <NewsCard key={item.slug} item={item} layout="horizontal" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

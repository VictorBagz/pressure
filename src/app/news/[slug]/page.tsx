
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { firestore } from '@/lib/firebase';
import type { NewsItem } from '@/lib/newsData';
import { format } from 'date-fns';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

async function getArticle(slug: string): Promise<NewsItem | null> {
  const snapshot = await firestore.collection('news').where('slug', '==', slug).limit(1).get();

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  const data = doc.data();
  
  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    image: data.imageUrl,
    aiHint: data.aiHint,
    category: data.category,
    date: format(data.createdAt.toDate(), 'PPP'),
    content: data.content,
    link: `/news/${data.slug}`,
  };
}

// Generate dynamic metadata for each article
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | RugbyCare UG News`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <article>
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <Badge>{article.category}</Badge>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-heading leading-tight">
                {article.title}
              </h1>
            </header>

            <div className="relative aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                data-ai-hint={article.aiHint}
              />
            </div>

            <div className="prose prose-lg max-w-none font-body text-foreground/90 leading-relaxed whitespace-pre-wrap">
              <p>{article.content}</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}


import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

import { getNewsArticleBySlug, getNewsArticles } from '@/lib/news';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | RugbyCare UG News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({ params }: Props) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <article className="container max-w-4xl mx-auto px-6">
          {/* Header section with Title, Category, and Date */}
          <header className="mb-8 border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              {article.title}
            </h1>
          </header>

          {/* Main Image */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              data-ai-hint="news article image"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none font-body text-foreground/90 prose-h2:text-primary prose-h3:text-primary prose-a:text-primary hover:prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}


import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { newsData } from '@/lib/newsData';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Function to find the article by slug
const getArticle = (slug: string) => {
  return newsData.find((item) => item.slug === slug);
};

// Generate dynamic metadata for each article
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticle(params.slug);

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

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);

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

            <div className="prose prose-lg max-w-none font-body text-foreground/90 leading-relaxed">
              <p>{article.content}</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

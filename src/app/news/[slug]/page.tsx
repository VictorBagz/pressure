
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug, getNewsArticles } from '@/lib/news';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CalendarDays, Tag } from 'lucide-react';

// This function generates the static paths for all news articles at build time.
export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// This function generates the metadata for a specific article page.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

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
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}


export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-background">
        <Header />
        <main className="py-12 md:py-20">
            <div className="container mx-auto px-6">
                <article className="max-w-3xl mx-auto">
                    <header className="mb-8">
                        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
                            <Image
                                src={article.imageUrl || 'https://placehold.co/1200x630.png'}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                                data-ai-hint="article hero"
                            />
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="h-4 w-4" />
                                <Badge variant="secondary">{article.category}</Badge>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary">{article.title}</h1>
                    </header>

                    {/* Use prose for nice typography defaults */}
                    <div 
                        className="prose prose-lg max-w-none font-body text-foreground/90 prose-headings:text-primary prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: article.content }} 
                    />
                </article>
            </div>
        </main>
        <Footer />
    </div>
  );
}

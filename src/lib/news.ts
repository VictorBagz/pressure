
'use server';

import { firestore } from '@/lib/firebase';
import { unstable_noStore as noStore } from 'next/cache';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  date: string; // Stored as ISO string
  createdAt: any; // Firestore timestamp
}

/**
 * Fetches all news articles from Firestore, ordered by most recent.
 * @returns {Promise<NewsArticle[]>} A promise that resolves to an array of news articles.
 */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  noStore(); // Opt out of caching for this dynamic data
  try {
    const newsSnapshot = await firestore.collection('news').orderBy('createdAt', 'desc').get();
    if (newsSnapshot.empty) {
      return [];
    }
    return newsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug,
        title: data.title,
        category: data.category,
        imageUrl: data.imageUrl,
        excerpt: data.excerpt,
        content: data.content,
        // Ensure date is a string, default to empty string if not present
        date: data.date || '', 
        createdAt: data.createdAt,
      } as NewsArticle;
    });
  } catch (error) {
    console.error("Error fetching news articles:", error);
    // In case of an error, return an empty array to prevent the app from crashing.
    return [];
  }
}

/**
 * Fetches a single news article by its slug from Firestore.
 * @param {string} slug The slug of the article to fetch.
 * @returns {Promise<NewsArticle | null>} A promise that resolves to the article or null if not found.
 */
export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
  noStore();
  try {
    const articlesRef = firestore.collection('news');
    const snapshot = await articlesRef.where('slug', '==', slug).limit(1).get();

    if (snapshot.empty) {
      console.log(`No article found with slug: ${slug}`);
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      category: data.category,
      imageUrl: data.imageUrl,
      excerpt: data.excerpt,
      content: data.content,
      date: data.date || '',
      createdAt: data.createdAt,
    } as NewsArticle;
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}":`, error);
    return null;
  }
}

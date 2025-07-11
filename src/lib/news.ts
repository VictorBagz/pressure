
'use server';

import { firestore } from '@/lib/firebase';
import { unstable_noStore as noStore } from 'next/cache';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string; // Storing date as ISO string
  excerpt: string;
  content: string;
}

// Function to fetch all news articles, ordered by date
export async function getNewsArticles(): Promise<NewsArticle[]> {
  noStore(); // Ensures fresh data on each request
  try {
    const articlesSnapshot = await firestore.collection('news').orderBy('date', 'desc').get();
    if (articlesSnapshot.empty) {
      return [];
    }
    return articlesSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug,
        title: data.title,
        category: data.category,
        image: data.image,
        // Convert Firestore Timestamp to ISO string if it's a Timestamp object
        date: data.date?.toDate ? data.date.toDate().toISOString() : data.date,
        excerpt: data.excerpt,
        content: data.content,
      };
    });
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return []; // Return empty array on error
  }
}

// Function to fetch a single article by its slug
export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  noStore();
  try {
    const articlesRef = firestore.collection('news');
    const snapshot = await articlesRef.where('slug', '==', slug).limit(1).get();
    
    if (snapshot.empty) {
      return null;
    }
    
    const doc = snapshot.docs[0];
    const data = doc.data();
    
    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      category: data.category,
      image: data.image,
      date: data.date?.toDate ? data.date.toDate().toISOString() : data.date,
      excerpt: data.excerpt,
      content: data.content,
    };
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}":`, error);
    return null;
  }
}

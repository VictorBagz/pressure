
'use server';

import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { FieldValue } from 'firebase-admin/firestore';

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  category: z.string().min(3, "Category is required."),
  imageUrl: z.string().url("Please enter a valid image URL."),
  aiHint: z.string().optional(),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters.").max(200, "Excerpt must be 200 characters or less."),
  content: z.string().min(50, "Content must be at least 50 characters."),
});

// Utility to create a URL-friendly slug
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export interface FormState {
    status: 'idle' | 'success' | 'error';
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

export async function saveNewsArticle(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const articleId = formData.get('articleId') as string | null;

  const validatedFields = formSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { title, ...data } = validatedFields.data;
  const slug = createSlug(title);

  try {
    if (articleId) {
      // Update existing article
      await firestore.collection('news').doc(articleId).update({
        title,
        slug,
        ...data,
        updatedAt: FieldValue.serverTimestamp(),
      });
    } else {
      // Create new article
      await firestore.collection('news').add({
        title,
        slug,
        ...data,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error saving document: ", error);
    return {
      status: 'error',
      message: 'Failed to save article. Please try again.',
    };
  }

  // Revalidate paths to show updated content
  revalidatePath('/admin');
  revalidatePath('/news');
  revalidatePath(`/news/${slug}`);
  
  redirect('/admin');
}

export async function deleteNewsArticle(articleId: string) {
    if (!articleId) {
        throw new Error('Article ID is required for deletion.');
    }

    try {
        await firestore.collection('news').doc(articleId).delete();
    } catch(error) {
        console.error("Error deleting document:", error);
        throw new Error('Failed to delete article.');
    }

    revalidatePath('/admin');
    revalidatePath('/news');
    redirect('/admin');
}

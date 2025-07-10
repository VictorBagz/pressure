
'use server';

import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contact: z.string().min(10, { message: "Please enter a valid contact number." }),
  rugbyClub: z.string({ required_error: "Please select a rugby club." }),
  nextOfKinContact: z.string().min(10, { message: "Please enter a valid contact number for next of kin." }),
  terms: z.preprocess((val) => val === 'on' || val === true, z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to register.",
  })),
});

export interface RegisterPlayerState {
    status: 'idle' | 'success' | 'error';
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

export async function registerPlayer(
  prevState: RegisterPlayerState,
  formData: FormData
): Promise<RegisterPlayerState> {
  const rawFormData = Object.fromEntries(formData.entries());
  
  const validatedFields = formSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { contact } = validatedFields.data;

    // Check for existing player with the same contact number
    const playersRef = firestore.collection('players');
    const snapshot = await playersRef.where('contact', '==', contact).get();

    if (!snapshot.empty) {
      return {
        status: 'error',
        message: 'A player with this contact number is already registered.',
      };
    }

    // If no player exists, proceed with registration
    const { terms, ...playerData } = validatedFields.data;
    const docRef = await firestore.collection('players').add({
        ...playerData,
        registeredAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    
    // Revalidate the admin page to show the new player
    revalidatePath('/admin');

    return {
      status: 'success'
    };
  } catch (error) {
    console.error("Error adding document: ", error);
    return {
      status: 'error',
      message: 'Failed to register player. Please try again.',
    };
  }
}

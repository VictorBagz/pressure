'use server';

/**
 * @fileOverview Generates personalized content for an email newsletter.
 *
 * - generatePersonalizedNewsletter - A function that generates personalized content for an email newsletter.
 * - PersonalizedNewsletterInput - The input type for the generatePersonalizedNewsletter function.
 * - PersonalizedNewsletterOutput - The return type for the generatePersonalizedNewsletter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedNewsletterInputSchema = z.object({
  donorName: z.string().describe('The name of the potential donor.'),
  donationHistory: z.string().describe('The donation history of the potential donor.'),
  rugbyInterest: z.string().describe('The potential donor interest in Rugby e.g. favorite team'),
});
export type PersonalizedNewsletterInput = z.infer<typeof PersonalizedNewsletterInputSchema>;

const PersonalizedNewsletterOutputSchema = z.object({
  newsletterContent: z.string().describe('The personalized content for the email newsletter.'),
});
export type PersonalizedNewsletterOutput = z.infer<typeof PersonalizedNewsletterOutputSchema>;

export async function generatePersonalizedNewsletter(input: PersonalizedNewsletterInput): Promise<PersonalizedNewsletterOutput> {
  return personalizedNewsletterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedNewsletterPrompt',
  input: {schema: PersonalizedNewsletterInputSchema},
  output: {schema: PersonalizedNewsletterOutputSchema},
  prompt: `You are an expert marketing manager specializing in creating personalized email newsletters to increase engagement with potential donors.

You will use the following information to create personalized content for the email newsletter.

Donor Name: {{{donorName}}}
Donation History: {{{donationHistory}}}
Donor interest in Rugby: {{{rugbyInterest}}}

Create a personalized email newsletter content that is likely to increase engagement with the potential donor.
`,
});

const personalizedNewsletterFlow = ai.defineFlow(
  {
    name: 'personalizedNewsletterFlow',
    inputSchema: PersonalizedNewsletterInputSchema,
    outputSchema: PersonalizedNewsletterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

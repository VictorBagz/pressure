'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generatePersonalizedNewsletter, PersonalizedNewsletterOutput } from '@/ai/flows/personalized-newsletter';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  donorName: z.string().min(2, {
    message: 'Donor name must be at least 2 characters.',
  }),
  donationHistory: z.string().min(10, {
    message: 'Please provide some details about donation history.',
  }),
  rugbyInterest: z.string().min(5, {
    message: 'Please provide some details about their rugby interest.',
  }),
});

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedNewsletterOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donorName: '',
      donationHistory: '',
      rugbyInterest: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await generatePersonalizedNewsletter(values);
      setResult(output);
       toast({
        title: "Success!",
        description: "Personalized newsletter content generated.",
      })
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message || 'An unexpected error occurred.',
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <Card className="max-w-6xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-primary">Engage Your Donors</CardTitle>
            <CardDescription className="font-body text-lg">
              Use our AI-powered tool to generate personalized newsletter content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-headline text-xl text-primary mb-4">Enter Donor Details</h3>
                 <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="donorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Donor Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="donationHistory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Donation History</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g. Donated $50 last year, attended fundraising gala." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="rugbyInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rugby Interest</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g. Fan of the Heathens, played in university." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
                      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {loading ? 'Generating...' : 'Generate Newsletter Content'}
                    </Button>
                  </form>
                </Form>
              </div>
              <div>
                 <h3 className="font-headline text-xl text-primary mb-4">Generated Content</h3>
                  <div className="min-h-[350px] bg-muted rounded-md p-6 border border-border">
                    {loading && (
                      <div className="flex items-center justify-center h-full">
                         <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    )}
                    
                    {result ? (
                      <div className="whitespace-pre-wrap font-body text-sm text-foreground/90">
                        {result.newsletterContent}
                      </div>
                    ) : !loading && (
                       <p className="text-muted-foreground text-center pt-20 font-body">The AI-generated content will appear here.</p>
                    )}
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

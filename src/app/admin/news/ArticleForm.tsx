
'use client';

import { useActionState, useEffect, useRef } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { FormState } from './actions';
import { saveNewsArticle } from './actions';
import { Newspaper, ArrowLeft } from "lucide-react";
import type { DocumentData } from "firebase-admin/firestore";

interface ArticleFormProps {
    article?: DocumentData | null;
    articleId?: string;
}

export default function ArticleForm({ article, articleId }: ArticleFormProps) {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const initialState: FormState = { status: 'idle' };
    const [state, formAction] = useActionState<FormState, FormData>(saveNewsArticle, initialState);

    useEffect(() => {
        if (state.status === 'error' && state.message && !state.errors) {
            toast({
                title: "Operation Failed",
                description: state.message,
                variant: "destructive",
            });
        }
    }, [state, toast]);

    const categories = ["Tournament", "Community", "Player Spotlight", "Fundraiser", "Announcement"];

    return (
        <Card className="w-full max-w-4xl shadow-2xl">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Link href="/admin">
                       <Button variant="outline" size="icon">
                           <ArrowLeft className="h-4 w-4" />
                       </Button>
                    </Link>
                    <div>
                        <CardTitle className="text-3xl font-bold text-primary flex items-center gap-3">
                            <Newspaper className="h-8 w-8" />
                            {articleId ? 'Edit Article' : 'Create New Article'}
                        </CardTitle>
                        <CardDescription>
                            Fill in the details below to publish a new story.
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <form ref={formRef} action={formAction} className="space-y-8">
                    {articleId && <input type="hidden" name="articleId" value={articleId} />}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" placeholder="Article Title" defaultValue={article?.title} required />
                            {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                             <select id="category" name="category" defaultValue={article?.category || ""} required className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option value="" disabled>Select a category</option>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                            {state.errors?.category && <p className="text-sm font-medium text-destructive">{state.errors.category[0]}</p>}
                        </div>
                    </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input id="imageUrl" name="imageUrl" placeholder="https://placehold.co/800x400.png" defaultValue={article?.imageUrl} required />
                            {state.errors?.imageUrl && <p className="text-sm font-medium text-destructive">{state.errors.imageUrl[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="aiHint">Image AI Hint</Label>
                            <Input id="aiHint" name="aiHint" placeholder="e.g. 'rugby action'" defaultValue={article?.aiHint} />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea id="excerpt" name="excerpt" placeholder="A short summary of the article for previews." defaultValue={article?.excerpt} required />
                        {state.errors?.excerpt && <p className="text-sm font-medium text-destructive">{state.errors.excerpt[0]}</p>}
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="content">Full Content</Label>
                        <Textarea id="content" name="content" placeholder="The main content of the article." rows={10} defaultValue={article?.content} required />
                        {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                        {articleId ? 'Update Article' : 'Publish Article'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

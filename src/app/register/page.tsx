
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Shield, Users, HeartHandshake } from 'lucide-react';
import { registerPlayer, type RegisterPlayerState } from "./actions";
import { useActionState, useEffect } from "react";


const rugbyClubs = [
    "Black Pirates",
    "Heathens",
    "Kobs",
    "Buffaloes",
    "Warriors",
    "Hippos",
    "Mongers",
    "Rhinos",
    "Impis",
    "Rams",
    "Eagles",
    "Jinja Hippos"
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contact: z.string().min(10, { message: "Please enter a valid contact number." }),
  rugbyClub: z.string({ required_error: "Please select a rugby club." }),
  nextOfKinContact: z.string().min(10, { message: "Please enter a valid contact number for next of kin." }),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to register.",
  }),
});

export default function RegisterPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            contact: "",
            nextOfKinContact: "",
            terms: false,
        },
    });

    const [state, formAction] = useActionState<RegisterPlayerState, FormData>(registerPlayer, {
        status: 'idle',
    });

    useEffect(() => {
        if (state.status === 'success') {
            toast({
                title: "Registration Successful!",
                description: "Thank you for registering. We will be in touch shortly.",
            });
            form.reset();
        } else if (state.status === 'error') {
            toast({
                title: "Registration Failed",
                description: state.message || "An unexpected error occurred.",
                variant: "destructive",
            });
        }
    }, [state, toast, form]);


    return (
    <div className="flex flex-col min-h-screen bg-secondary">
        <Header />
        <main className="flex-grow flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <HeartHandshake className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle className="text-3xl font-bold text-primary mt-4">Player Registration</CardTitle>
                    <CardDescription className="text-muted-foreground pt-2">
                        Secure your spot and play with peace of mind.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form action={formAction} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                    <Input placeholder="Your Full Name" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Contact Number</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                    <Input placeholder="Your Tel Number" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="rugbyClub"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Rugby Club</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                        <SelectTrigger className="pl-10">
                                                            <SelectValue placeholder="Select your club" />
                                                        </SelectTrigger>
                                                    </div>
                                                </FormControl>
                                                <SelectContent>
                                                    {rugbyClubs.map(club => (
                                                        <SelectItem key={club} value={club}>{club}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="nextOfKinContact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Next of Kin Contact</FormLabel>
                                            <FormControl>
                                                 <div className="relative">
                                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                    <Input placeholder="Next of Kin Contact" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            
                            <FormField
                                control={form.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                name={field.name}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Accept terms and conditions
                                            </FormLabel>
                                            <FormDescription>
                                                You agree to our <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                                            </FormDescription>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Registering...' : 'Register Now'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>
        <Footer />
    </div>
  );
}

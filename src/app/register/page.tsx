
'use client';

import Link from 'next/link';
import { useActionState, useEffect, useRef } from "react";

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

export default function RegisterPage() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    
    const [state, formAction] = useActionState<RegisterPlayerState, FormData>(registerPlayer, {
        status: 'idle',
    });

    useEffect(() => {
        if (state.status === 'success') {
            toast({
                title: "Registration Successful!",
                description: "Thank you for registering. We will be in touch shortly.",
            });
            formRef.current?.reset();
        } else if (state.status === 'error' && state.message) {
             toast({
                title: "Registration Failed",
                description: state.message || "An unexpected error occurred.",
                variant: "destructive",
            });
        }
    }, [state, toast]);

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
                    <form ref={formRef} action={formAction} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="name" name="name" placeholder="Your Full Name" className="pl-10" required />
                                </div>
                                {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact">Your Contact Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="contact" name="contact" placeholder="Your Tel Number" className="pl-10" required />
                                </div>
                                {state.errors?.contact && <p className="text-sm font-medium text-destructive">{state.errors.contact[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="rugbyClub">Rugby Club</Label>
                                <div className="relative">
                                     <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                                    <Select name="rugbyClub">
                                        <SelectTrigger className="pl-10" id="rugbyClub">
                                            <SelectValue placeholder="Select your club" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {rugbyClubs.map(club => (
                                                <SelectItem key={club} value={club}>{club}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                {state.errors?.rugbyClub && <p className="text-sm font-medium text-destructive">{state.errors.rugbyClub[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="nextOfKinContact">Next of Kin Contact</Label>
                                 <div className="relative">
                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="nextOfKinContact" name="nextOfKinContact" placeholder="Next of Kin Contact" className="pl-10" required />
                                </div>
                                {state.errors?.nextOfKinContact && <p className="text-sm font-medium text-destructive">{state.errors.nextOfKinContact[0]}</p>}
                            </div>
                        </div>
                        
                        <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                            <Checkbox id="terms" name="terms" />
                            <div className="space-y-1 leading-none">
                                <Label htmlFor="terms">
                                    Accept terms and conditions
                                </Label>
                                <FormDescription>
                                    You agree to our <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                                </FormDescription>
                                {state.errors?.terms && <p className="text-sm font-medium text-destructive">{state.errors.terms[0]}</p>}
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                            Register Now
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
        <Footer />
    </div>
  );
}

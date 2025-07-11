
'use client';

import Link from 'next/link';
import { useActionState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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

const clubs = [
    "Avengers",
    "Black Arrows",
    "Black Pearls",
    "Black Pirates",
    "Blue Phoenix",
    "Buffaloes",
    "Eagles",
    "Elgon Wolves",
    "Ewes",
    "Golden Badgers",
    "Gulu City Falcons",
    "Heathens",
    "Hippos",
    "Impis",
    "Jaguars",
    "Jinja Hippos",
    "Kakira Simbas",
    "Kigezi Queens",
    "Kigezi Silverbacks",
    "Kisubi Pacers",
    "Kitgum Lions",
    "Kitgum Queens",
    "Kiu Crows",
    "Kobs",
    "Kyambogo",
    "Lady Pacers",
    "Lira Big Boys",
    "Mbarara Titans",
    "Mbale Eagles",
    "Mbale Elephants",
    "Mongers",
    "Mukono Hawks",
    "Nile Leopards",
    "Nile Rapids",
    "Njeru Hurricanes",
    "Omoro King",
    "Panthers",
    "Rams",
    "Rhinos",
    "She Wolves",
    "Soroti Rangers",
    "Swans",
    "Thunderbirds",
    "Tooro Lions",
    "Tororo Crest",
    "Uganda Rugby Vets",
    "Victoria Sharks",
    "Walukuba",
    "Walukuba Titans",
    "Warriors",
].sort();

const schools = [
    "Butiki College",
    "Dr.Obote College",
    "Entebbe Airforce",
    "Entebbe Parents",
    "Greenhill Academy",
    "Hana International",
    "Hana Mixed School",
    "Jinja ss",
    "King's College Budo",
    "Kololo High",
    "Lango College",
    "London College of St. Lawrence",
    "Luigi Guissani",
    "Makerere College School",
    "Mbarara High",
    "Merryland High School",
    "Mwiri College",
    "Namilyango College",
    "Nkoma",
    "Ntare High",
    "Sir Samuel Baker",
    "Spena",
    "St. Joseph's Layibi",
    "St. Mary's College Kisubi",
    "Vienna College",
].sort();

export default function RegisterPage() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    
    const initialState: RegisterPlayerState = { status: 'idle' };
    const [state, formAction] = useActionState<RegisterPlayerState, FormData>(registerPlayer, initialState);

    useEffect(() => {
        if (state.status === 'success') {
            toast({
                title: "Registration Successful!",
                description: "Thank you for registering. We will be in touch shortly.",
            });
            formRef.current?.reset();
        } else if (state.status === 'error' && state.message && !state.errors) {
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
                                <Label htmlFor="rugbyClub">Rugby Club / School</Label>
                                <div className="relative">
                                     <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                                    <Select name="rugbyClub" required>
                                        <SelectTrigger className="pl-10" id="rugbyClub">
                                            <SelectValue placeholder="Select your club or school" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Clubs</SelectLabel>
                                                {clubs.map(item => (
                                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel className="bg-primary text-primary-foreground -mx-1 px-2.5">Schools</SelectLabel>
                                                {schools.map(item => (
                                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                            <SelectItem value="Other">Other</SelectItem>
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
                            <Checkbox id="terms" name="terms" required />
                            <div className="space-y-1 leading-none">
                                <Label htmlFor="terms">
                                    Accept terms and conditions
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                    You agree to our <Link href="/TermsConditions.pdf" download className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                                </p>
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

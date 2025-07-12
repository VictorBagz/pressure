import { Button } from '@/components/ui/button';
import { CreditCard, Ticket, Award, CheckCircle2, Heart } from 'lucide-react';
import Image from 'next/image';

const benefits = [
    {
        icon: CreditCard,
        text: "Get a gift card that has 10% discount to all purchases made with our partner businesses/companies.",
    },
    {
        icon: Ticket,
        text: "Get 10% discount on all rugby events.",
    },
    {
        icon: Award,
        text: "Receive a golden badge upon completing 3 years of consistent support.",
    },
    {
        icon: CheckCircle2,
        text: "Receive a \"friend of the foundation\" digital certificate.",
    },
];

export default function DonateSection() {
    return (
        <section id="donate-section" className="pt-12 pb-12 bg-accent">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    
                    <Heart className="h-12 w-12 text-white mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                        Make a Difference Today
                    </h2>
                    <p className="text-accent-foreground/90 font-body mb-12 max-w-2xl">
                        Your donation directly funds insurance coverage for rugby players across Uganda. Every contribution helps protect dreams and secure futures.
                    </p>

                    <div className="bg-white/20 border border-white/30 rounded-2xl p-8 md:p-12 mb-10 backdrop-blur-sm w-full shadow-lg">
                        <h2 className="text-2xl font-bold text-accent-foreground text-center mb-8">
                            Benefits for Donations up to UGX 120,000
                        </h2>
                        <ul className="space-y-5 text-left">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <benefit.icon className="h-6 w-6 mr-4 text-accent-foreground/80 mt-1 shrink-0" />
                                    <span className="text-accent-foreground/90 font-body leading-relaxed">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="mb-10 w-full max-w-md">
                        <Image 
                            src="/photos/giftcard.jpeg"
                            alt="RugbyCare UG Gift Card"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="gift card"
                        />
                    </div>

                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 rounded-full transform transition hover:scale-105 shadow-lg">
                        <a href="https://tip.vanvaa.com/?q=MTcxMg==" target="_blank" rel="noopener noreferrer">Donate Now</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DonateSection() {
    return (
        <section id="donate-section" className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-600 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
                    <p className="text-xl mb-10 opacity-90 font-body">Your donation helps us provide medical insurance to more rugby players across Uganda, ensuring they receive proper care when injured and can continue pursuing their passion.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 transform transition hover:scale-105">
                        <Link href="/donate">Choose a Donation Plan</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

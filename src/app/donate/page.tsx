import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Donate to Support Ugandan Rugby Players | RugbyCare UG',
  description: 'Your donation provides vital medical insurance for rugby players in Uganda. Help the Kayondo Ronnie Jr Foundation protect athletes from sports injuries through the Athletes Medical Fund.',
  keywords: 'Rugby Uganda, Ugandan rugby players, rugby medical insurance, sports injury insurance Uganda, player safety Uganda, Kayondo Ronnie Jr Foundation, Athletes Medical Fund Uganda, RugbyCare UG, donate rugby Uganda, support Ugandan athletes, uganda rugby, insurance, medical cover, rugby insurance, athletes medical fund, medical fund, kayondo ronnie foundation',
};

const donationTiers = [
    { title: "Basic Coverage", price: "UGX 150,000", description: "Covers one player for essential medical needs", popular: false },
    { title: "Team Package", price: "UGX 1,000,000", description: "Covers an entire team (15 players)", popular: true },
    { title: "Club Sponsor", price: "UGX 5,000,000", description: "Full support for an entire rugby club", popular: false }
]

export default function DonatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section id="donate" className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-600 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
                            <p className="text-xl mb-10 opacity-90 font-body">Your donation helps us provide medical insurance to more rugby players across Uganda, ensuring they receive proper care when injured and can continue pursuing their passion.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {donationTiers.map((tier) => (
                                    <div key={tier.title} className={`bg-primary/50 rounded-lg p-6 text-center transition-all duration-300 ${tier.popular ? 'border-2 border-accent scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-xl'} relative flex flex-col`}>
                                        {tier.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">Most Popular</Badge>}
                                        <h3 className="text-xl font-semibold mb-3">{tier.title}</h3>
                                        <p className="text-3xl font-bold mb-4 text-accent">{tier.price}</p>
                                        <p className="text-sm mb-4 opacity-80 flex-grow font-body">{tier.description}</p>
                                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition">Donate Now</Button>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-sm opacity-80 font-body">All donations are tax deductible. We accept mobile money payments and bank transfers.</p>
                        </div>
                    </div>
                </section>
                <NewsletterForm />
            </main>
            <Footer />
        </div>
    );
}

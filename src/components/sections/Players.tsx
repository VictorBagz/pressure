import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const features = [
    "Full Medical & Rehab Coverage",
    "Income Protection While Injured",
    "Access to Top Sports Doctors"
];

export default function Players() {
  return (
    <section id="players" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="font-semibold text-primary uppercase tracking-wider mb-2">For Players</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Secure Your Future on the Field</h2>
                    <p className="text-foreground/80 mb-8 font-body">
                        Don't let an injury sideline your passion. The Kayondo Ronnie Jr Foundation offers comprehensive insurance coverage tailored for rugby players in Uganda. Register today to get the peace of mind you deserve.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                <span className="font-body text-foreground/90">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                        <a href="#">
                            Register for Coverage
                        </a>
                    </Button>
                </div>
                
                <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
                    <Image 
                        src="/photos/jjuko.jpeg" 
                        alt="Rugby player celebrating" 
                        width={600}
                        height={750}
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        data-ai-hint="rugby player action"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

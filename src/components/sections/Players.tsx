import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export default function Players() {
  return (
    <section id="players" className="py-20 bg-card">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-primary mb-4">Players Speak: Real Stories</h2>
                    <div className="flex items-center mb-6">
                        <div className="h-1 w-12 bg-accent"></div>
                        <div className="h-1 w-4 bg-primary ml-1"></div>
                    </div>
                    <blockquote className="text-foreground/80 mb-6 italic font-body relative pl-5 border-l-2 border-muted">
                        <span className="absolute -left-3 -top-2 text-6xl text-primary/10 font-serif">&ldquo;</span>
                        Before RugbyCare, I suffered a knee injury that nearly ended my career. With their coverage, I received proper treatment and was back on the field in record time. This program is changing lives.
                    </blockquote>
                    <h4 className="text-xl font-semibold text-primary mb-1">James Kato</h4>
                    <p className="text-muted-foreground mb-8 font-body">National Team Player, Kampala RFC</p>
                    
                    <div className="bg-secondary border-l-4 border-primary p-4 mb-6">
                        <blockquote className="text-foreground/80 font-body italic">
                          "As women rugby players, we often struggle to get proper medical attention. RugbyCare changed that for me and my teammates."
                        </blockquote>
                        <p className="text-muted-foreground mt-2 text-right font-body">&mdash; Sarah Nabirye, Lady Rugby Cranes</p>
                    </div>
                    
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href="#players">
                            <UserPlus className="mr-2 h-5 w-5" />
                            Register Your Team
                        </a>
                    </Button>
                </div>
                
                <div className="order-1 lg:order-2">
                    <Image 
                        src="/photos/jjuko.jpeg" 
                        alt="Rugby player celebrating" 
                        width={600}
                        height={750}
                        className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                        data-ai-hint="rugby stadium"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

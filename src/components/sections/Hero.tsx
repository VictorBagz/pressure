import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserPlus, HeartHandshake, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-start text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/arnold.jpeg"
          alt="Rugby players in action"
          fill
          style={{objectFit: 'cover'}}
          priority
          data-ai-hint="rugby africa"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
      
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Protecting Uganda's <span className="text-accent">Rugby Heroes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-body">
            Providing comprehensive medical insurance coverage for rugby players across Uganda. We ensure no athlete is left behind due to injuries.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition hover:scale-105">
              <a href="#players">
                <UserPlus className="mr-2 h-5 w-5" />
                Register Player
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground transform transition hover:scale-105">
              <Link href="/donate">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <a href="#impact" className="animate-bounce bg-white/20 rounded-full p-2">
          <ChevronDown className="text-white h-6 w-6" />
        </a>
      </div>
    </section>
  );
}

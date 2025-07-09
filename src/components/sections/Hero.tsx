import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserPlus, HeartHandshake, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    // The section is a container for the content and sets up the height.
    // It's crucial that other sections have a solid background to cover the fixed image.
    <section id="home" className="relative h-screen flex items-center justify-start text-white">
      {/* The background image is fixed to the viewport. It will not scroll.
          z-[-1] places it behind all other content on the page. */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Image
          src="/photos/arnold.jpeg"
          alt="Rugby players in action"
          fill
          style={{ objectFit: 'cover' }}
          priority
          data-ai-hint="rugby africa"
        />
        {/* The overlay is part of the fixed background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
      </div>

      {/* The content is relative and will scroll normally over the fixed background. */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A safety Net for Uganda's <span className="text-accent">Rugby Atheletes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-body">
          Every tackle, every scrum, every match puts our players at risk. Your support provides critical insurance, ensuring they are protected on and off the field.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <a href="#players">
                <UserPlus className="mr-2 h-5 w-5" />
                 Become a partner
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground transform transition-all hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--accent))]">
              <Link href="/donate">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a href="#impact" className="animate-bounce bg-white/20 rounded-full p-2">
          <ChevronDown className="text-white h-6 w-6" />
        </a>
      </div>
    </section>
  );
}

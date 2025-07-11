'use client';

import * as React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';
import { HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const sponsorsList = [
  { name: 'Case Hospital', src: '/photos/caseH.jpg', hint: 'Case Hospital logo' },
  { name: 'Norvik Hospital', src: '/photos/norvik.jpeg', hint: 'Norvik Hospital logo' },
  { name: 'Marie Stopes', src: '/photos/marie.jpeg', hint: 'Marie Stopes logo' },
  { name: 'Minet', src: '/photos/minet.jpeg', hint: 'Minet logo' },
  { name: 'Bethany', src: '/photos/bethany.jpeg', hint: 'Bethany logo' },
  { name: 'Lifelink', src: '/photos/lifelink.jpg', hint: 'Lifelink logo' },
];

export default function Sponsors() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="sponsors" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-12">
          <HeartHandshake className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">
            Our Proud Sponsors
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            We are incredibly grateful for the support of our sponsors who make our mission possible.
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll 
            initialClass="opacity-0"
            finalClass="opacity-100"
            className="transition-opacity duration-1000"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {sponsorsList.map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/3 lg:basis-1/4 p-4">
                  <div className="bg-card p-8 rounded-xl shadow-lg flex items-center justify-center h-40 transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                     <Image
                      src={sponsor.src}
                      alt={`${sponsor.name} logo`}
                      width={150}
                      height={75}
                      className="h-24 w-auto object-contain opacity-90"
                      data-ai-hint={sponsor.hint}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

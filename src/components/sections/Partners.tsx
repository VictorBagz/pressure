
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AnimateOnScroll from '../AnimateOnScroll';

const partnersList = [
  { name: 'Heathens', src: '/photos/heathens.jpg', hint: 'heathens logo' },
  { name: 'Buffaloes', src: '/photos/buffaloes.jpg', hint: 'buffaloes logo' },
  { name: 'Eagles', src: '/photos/EAGLES.jpeg', hint: 'eagles logo' },
  { name: 'Hippos', src: '/photos/hippos.jpg', hint: 'hospital logo' },
  { name: 'AAR Healthcare', src: '/photos/kyambogo.jpg', hint: 'clinic logo' },
  { name: 'IMG', src: '/photos/kobs.jpg', hint: 'medical group' },
  { name: 'Prudential', src: '/photos/impis.jpg', hint: 'insurance logo' },
  { name: 'Minet', src: '/photos/rhinos.jpg', hint: 'insurance broker logo' },
  { name: 'ICEA Lion', src: '/photos/thunderbirds.jpg', hint: 'insurance logo' },
  { name: 'TMR International Hospital', src: '/photos/toorolions.jpg', hint: 'hospital logo' },
  { name: 'Kampala Hospital', src: '/photos/mongers.jpg', hint: 'hospital logo' },
  { name: 'Resolution Insurance', src: '/photos/pirates.jpg', hint: 'insurance logo' },
  { name: 'Sanlam', src: '/photos/blackpearls.jpg', hint: 'insurance logo' },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Proud Partners
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            We are grateful for the support of our partners who make our work possible.
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll 
            initialClass="opacity-0 scale-95"
            finalClass="opacity-100 scale-100"
            className="transition-all duration-500"
        >
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {partnersList.map((partner, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                        <div className="bg-card p-6 rounded-lg shadow-sm flex items-center justify-center h-28 transition hover:shadow-md">
                           <Image
                            src={partner.src}
                            alt={`${partner.name} logo`}
                            width={120}
                            height={60}
                            className="h-16 w-auto object-contain opacity-80"
                            data-ai-hint={partner.hint}
                          />
                        </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

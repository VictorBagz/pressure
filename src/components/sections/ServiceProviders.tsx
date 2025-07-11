
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

const serviceProvidersList = [
  { name: 'Bethany', src: '/photos/bethany.jpeg', hint: 'Bethany logo' },
  { name: 'Case Hospital', src: '/photos/caseH.jpg', hint: 'Case Hospital' },
  { name: 'Doctors Hospital', src: '/photos/doctorsH.png', hint: 'Doctors Hospital logo' },
  { name: 'Kampala Hospital', src: '/photos/kampalaH.png', hint: 'Kampala Hospital logo' },
  { name: 'Kisubi Hospital', src: '/photos/kisubiH.jpg', hint: 'Kisubi Hospital logo' },
  { name: 'Lifelink', src: '/photos/lifelink.jpg', hint: 'Lifelink logo' },
  { name: 'Marie Stopes', src: '/photos/marie.jpeg', hint: 'Marie Stopes logo' },
  { name: 'Medipal Medical center', src: '/photos/medipal.jpeg', hint: 'Medipal Medical center logo' },
  { name: 'Mengo Hospital', src: '/photos/mengo.jpeg', hint: 'Mengo Hospital logo' },
  { name: 'Mildmay', src: '/photos/mildmay.jpg', hint: 'Mildmay logo' },
  { name: 'Norvik Hospital', src: '/photos/norvik.jpeg', hint: 'Norvik Hospital logo' },
  { name: 'Ruby Hospital', src: '/photos/ruby.jpeg', hint: 'Ruby Hospital logo' },
  { name: 'Sameday Hospital', src: '/photos/samedayH.png', hint: 'Sameday Hospital logo' },
  { name: 'Savannah Hospital', src: '/photos/savannah.png', hint: 'Savannah Hospital logo' },
  { name: 'Sebbi Hospital', src: '/photos/sebbi.jpeg', hint: 'Sebbi Hospital logo' },
  { name: 'Mulago Hospital', src: '/photos/ugandaCTA.png', hint: 'Mulago Hospital logo' },
  { name: 'UMC Hospital', src: '/photos/umc.jpeg', hint: 'Umc logo' },
  { name: 'Lifelink', src: '/photos/lifelink.jpg', hint: 'Lifelink logo' },
];

export default function ServiceProviders() {
  return (
    <section id="service-providers" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Our Service Providers
          </h2>
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
              className="w-full max-w-4xl mx-auto relative pb-16"
            >
              <CarouselContent className="-ml-4">
                {serviceProvidersList.map((provider, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                        <div className="bg-secondary/50 p-6 rounded-lg shadow-sm flex items-center justify-center h-28 transition hover:shadow-md">
                           <Image
                            src={provider.src}
                            alt={`${provider.name} logo`}
                            width={120}
                            height={60}
                            className="h-16 w-auto object-contain opacity-80"
                            data-ai-hint={provider.hint}
                          />
                        </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
                  <CarouselPrevious className="relative -left-2 transform-none static animate-float bg-card/80 backdrop-blur-sm text-primary hover:bg-card hover:text-accent border-primary/20 shadow-lg" />
                  <CarouselNext className="relative -right-2 transform-none static animate-float bg-card/80 backdrop-blur-sm text-primary hover:bg-card hover:text-accent border-primary/20 shadow-lg" />
              </div>
            </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

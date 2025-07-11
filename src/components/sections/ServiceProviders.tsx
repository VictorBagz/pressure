
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
  { name: 'AAR Healthcare', src: '/photos/kyambogo.jpg', hint: 'clinic logo' },
  { name: 'IMG', src: '/photos/kobs.jpg', hint: 'medical group' },
  { name: 'Prudential', src: '/photos/impis.jpg', hint: 'insurance logo' },
  { name: 'Minet', src: '/photos/rhinos.jpg', hint: 'insurance broker logo' },
  { name: 'Rugby In Kitchen', src: '/photos/rugbyinkitchen.png', hint: 'Rugby In Kitchen logo' },
  { name: 'Uganda Rugby Union', src: '/photos/uru.jpeg', hint: 'URU logo' },
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

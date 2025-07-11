
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
  { name: 'Hippos', src: '/photos/hippos.jpg', hint: 'Hippos logo' },
  { name: 'Kyambogo', src: '/photos/kyambogo.jpg', hint: 'Kyambogo logo' },
  { name: 'Ewes RFC', src: '/photos/ewes.jpg', hint: 'medical group' },
  { name: 'Impis', src: '/photos/impis.jpg', hint: 'Impis logo' },
  { name: 'Rhinos', src: '/photos/rhinos.jpg', hint: 'insurance broker logo' },
  { name: 'Thunderbirds', src: '/photos/thundersbirds.jpg', hint: 'insurance logo' },
  { name: 'Tooro Lions', src: '/photos/toorolions.jpg', hint: 'hospital logo' },
  { name: 'Mongers', src: '/photos/mongers.jpg', hint: 'hospital logo' },
  { name: 'Pirates', src: '/photos/pirates.jpg', hint: 'insurance logo' },
  { name: 'BlackPearls', src: '/photos/blackpearls.jpg', hint: 'blackpearls logo' },
  { name: 'Avengers', src: '/photos/avengers.jpg', hint: 'avengers' },
  { name: 'BluePhoenix', src: '/photos/bluephoenix.jpg', hint: 'bluephoenix logo' },
  { name: 'ElgonWolves', src: '/photos/elgonwolves.jpg', hint: 'elgon wolves logo' },
  { name: 'Kobs', src: '/photos/kobs.jpg', hint: 'kobs logo' },
  { name: 'Gulu Falcons', src: '/photos/gulufalcons.jpg', hint: 'gulufalcons logo' },
  { name: 'Kakira', src: '/photos/kakira.jpg', hint: 'kakira logo' },
  { name: 'Kigezi Silverbacks', src: '/photos/kigezisilverbacks.jpg', hint: 'Kigezi Silverbacks' },
  { name: 'Kisubi Pacers', src: '/photos/kisubipacers.jpg', hint: 'kisubipacers logo' },
  { name: 'Kitgum Lions', src: '/photos/kitgumlions.jpg', hint: 'kitgum lions logo' },
  { name: 'Kitgum Queens', src: '/photos/kitgumqueens.jpg', hint: 'Kitgum Queens logo' },
  { name: 'KIU Crows', src: '/photos/kiucrows.jpg', hint: 'Kiu crows' },
  { name: 'Mbale Eagles', src: '/photos/mbaleeagles.jpg', hint: 'Mbale Eagles logo' },
  { name: 'Mbale Elephants', src: '/photos/mbaleelephants.jpg', hint: 'Mbale Elephants logo' },
  { name: 'Mbarara Titans', src: '/photos/mbararatitans.jpg', hint: 'Mbarara Titans logo' },
  { name: 'Nile Rapids', src: '/photos/nilerapids.jpg', hint: 'Nile Rapids logo' },
  { name: 'Panthers', src: '/photos/panthers.jpg', hint: 'Panthers logo' },
  { name: 'Rugby Kitchen', src: '/photos/rugbyinkitchen.png', hint: 'Rugby In Kitchen logo' },
  { name: 'SheWolves', src: '/photos/shewolves.jpg', hint: 'She Wolves logo' },
  { name: 'Tororo Crest', src: '/photos/tororocrest.jpg', hint: 'Tororo Crest logo' },
  { name: 'Walukuba', src: '/photos/walukuba.jpg', hint: 'walukuba logo' },
  { name: 'Warriors', src: '/photos/warriors.jpg', hint: 'warriors logo' },
  { name: 'Buddo', src: '/photos/buddo.jpg', hint: 'Kings College Buddo logo' },
  { name: 'Golden Badgers', src: '/photos/goldenbadgers.jpg', hint: 'Golden Badgers logo' },
  { name: 'Green Hill', src: '/photos/greenhill.jpg', hint: 'Green Hill logo' },
  { name: 'Hana International', src: '/photos/hana.jpg', hint: 'Hana logo' },
  { name: 'Jinja ss', src: '/photos/jinjass.jpg', hint: 'Jinja ss logo' },
  { name: 'Kiira College Butiki', src: '/photos/kcb.jpg', hint: 'Butiki logo' },
  { name: 'Kigezi Queens', src: '/photos/kigeziqueens.jpg', hint: 'Kigezi Queens logo' },
  { name: 'Mwiri College', src: '/photos/mwiri.jpg', hint: 'Mwiri logo' },
  { name: 'Makerere College', src: '/photos/macos.jpg', hint: 'macos logo' },
  { name: 'Namilyango College', src: '/photos/ngo.jpg', hint: 'Namilyango logo' },
  { name: 'SMACK', src: '/photos/smack.jpg', hint: 'SMACK logo' },
  { name: 'Spena', src: '/photos/spena.jpg', hint: 'SPENA logo' },
  { name: 'St. Lawrence', src: '/photos/stlaw.jpg', hint: 'St. Law logo' },
  { name: 'Vienna College', src: '/photos/vienna.jpg', hint: 'Vienna logo' },
  { name: 'Victoria Sharks', src: '/photos/victoriasharks.jpg', hint: 'Victoria Sharks logo' },
  { name: 'Swans Sports Club', src: '/photos/swans.jpg', hint: 'Entebbe Swans logo' },
];

export default function Partners() {
  return (
    <section id="partners" className="pt-0.5 pb-1 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Our Affiliates
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
              className="w-full max-w-6xl mx-auto relative pb-16" // Added relative and padding-bottom
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

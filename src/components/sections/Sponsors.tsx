
'use client';

import * as React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';
import { HeartHandshake } from 'lucide-react';

const sponsorsList = [
  { name: 'Ministry of Health', src: '/photos/health.jpg', hint: 'Case Hospital logo' },
  { name: 'Norvik Hospital', src: '/photos/NCS1.png', hint: 'Norvik Hospital logo' },
  { name: 'Marie Stopes', src: '/photos/uru.jpeg', hint: 'Marie Stopes logo' },
];

const topSponsors = sponsorsList.slice(0, 2);
const prominentSponsor = sponsorsList[2];

export default function Sponsors() {

  return (
    <section id="sponsors" className="pt-2.5 pb-16 bg-card">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-12">
          <HeartHandshake className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">
            Our Proud Partners
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll 
            initialClass="opacity-0"
            finalClass="opacity-100"
            className="transition-opacity duration-1000"
        >
          <div className="max-w-4xl mx-auto">
            {/* Top Row with 2 sponsors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {topSponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex items-center justify-center h-48 transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                   <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} logo`}
                    width={180}
                    height={90}
                    className="h-28 w-auto object-contain opacity-90"
                    data-ai-hint={sponsor.hint}
                  />
                </div>
              ))}
            </div>

            {/* Prominent Sponsor */}
            {prominentSponsor && (
              <div className="mt-8 flex justify-center">
                <div className="w-full md:w-2/3 bg-white p-10 rounded-xl shadow-xl flex items-center justify-center h-56 transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                   <Image
                    src={prominentSponsor.src}
                    alt={`${prominentSponsor.name} logo`}
                    width={220}
                    height={110}
                    className="h-32 w-auto object-contain opacity-90"
                    data-ai-hint={prominentSponsor.hint}
                  />
                </div>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

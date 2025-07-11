'use client';

import * as React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

// Show only the first 6 on the homepage
const previewProviders = serviceProvidersList.slice(0, 6);

export default function ServiceProviders() {
  return (
    <section id="service-providers" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">
              Our Service Providers
            </h2>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/service-providers">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll 
            initialClass="opacity-0 scale-95"
            finalClass="opacity-100 scale-100"
            className="transition-all duration-500"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {previewProviders.map((provider, index) => (
              <div key={index} className="p-1">
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
            ))}
          </div>
        </AnimateOnScroll>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/service-providers">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

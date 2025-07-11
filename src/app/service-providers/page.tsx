
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Handshake } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: "Service Providers | RugbyCare UG",
  description: "Our network of trusted medical service providers ensuring the best care for Ugandan rugby players.",
};

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

export default function ServiceProvidersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-grow py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-12">
            <Handshake className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Service Providers
            </h1>
            <p className="text-lg text-muted-foreground">
              We've partnered with a wide network of trusted hospitals and clinics to provide the best possible care for our athletes across the country.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll
            initialClass="opacity-0 scale-95"
            finalClass="opacity-100 scale-100"
            className="transition-all duration-500"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {serviceProvidersList.map((provider, index) => (
                <div key={index} className="p-1">
                  <div className="bg-card p-6 rounded-lg shadow-sm flex items-center justify-center h-32 transition duration-300 hover:shadow-xl hover:-translate-y-1">
                     <Image
                      src={provider.src}
                      alt={`${provider.name} logo`}
                      width={130}
                      height={65}
                      className="h-20 w-auto object-contain opacity-90"
                      data-ai-hint={provider.hint}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </div>
  );
}

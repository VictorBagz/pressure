
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';
import { HeartHandshake } from 'lucide-react';

const sponsorsList = [
  { name: 'Case Hospital', src: '/photos/caseH.jpg', hint: 'Case Hospital logo' },
  { name: 'Norvik Hospital', src: '/photos/norvik.jpeg', hint: 'Norvik Hospital logo' },
  { name: 'Marie Stopes', src: '/photos/marie.jpeg', hint: 'Marie Stopes logo' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-secondary">
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
            initialClass="opacity-0 scale-95"
            finalClass="opacity-100 scale-100"
            className="transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sponsorsList.map((sponsor, index) => (
              <div key={index} className="p-4">
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
        </AnimateOnScroll>
      </div>
    </section>
  );
}

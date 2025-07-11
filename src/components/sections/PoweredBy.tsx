
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PoweredBy() {
  return (
    <section id="powered-by" className="py-12 bg-card">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Powered by
          </h2>
          <div className="flex justify-center">
            <Link href="https://www.minet.com/uganda/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="/photos/minet.jpeg"
                  alt="Minet Logo"
                  width={250}
                  height={100}
                  className="h-24 w-auto object-contain"
                  data-ai-hint="Minet logo"
                />
              </div>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

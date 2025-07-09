'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const providers = [
    { name: "UAP Old Mutual", src: "/photos/mulago.jpeg", width: 120, height: 60, hint: "insurance logo" },
    { name: "Jubilee Insurance", src: "/photos/kisubiH.jpg", width: 120, height: 60, hint: "insurance logo" },
    { name: "Case Hospital", src: "/photos/marie.jpeg", width: 120, height: 60, hint: "hospital logo" },
    { name: "Nakasero Hospital", src: "/photos/mengo.jpeg", width: 120, height: 60, hint: "hospital logo" },
    { name: "AAR Healthcare", src: "/photos/norvik.jpeg", width: 120, height: 60, hint: "clinic logo" },
    { name: "IMG", src: "/photos/mildmay.jpg", width: 120, height: 60, hint: "medical group" },
    { name: "Prudential", src: "/photos/ruby.jpeg", width: 120, height: 60, hint: "insurance logo" },
    { name: "ICEA Lion", src: "/photos/savannah.png", width: 120, height: 60, hint: "insurance logo" },
    { name: "TMR International Hospital", src: "/photos/medipal.jpeg", width: 120, height: 60, hint: "hospital logo" },
    { name: "Kampala Hospital", src: "/photos/umc.jpeg", width: 120, height: 60, hint: "hospital logo" },
    { name: "Resolution Insurance", src: "/photos/lifelink.jpg", width: 120, height: 60, hint: "insurance logo" },
    { name: "Sanlam", src: "/photos/paragon.jpeg", width: 120, height: 60, hint: "insurance logo" },
];

export default function Partners() {
    const [showAll, setShowAll] = useState(false);
    const displayedProviders = showAll ? providers : providers.slice(0, 6);

    return (
        <>
            <section className="py-16 bg-card">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center text-muted-foreground mb-12">Powered By</h2>
                    <div className="max-w-xs mx-auto">
                        <Image src={`/photos/minet.jpeg`} alt="Medical Partners UG" width={300} height={100} className="w-full opacity-70" data-ai-hint="medical partner" />
                    </div>
                </div>
            </section>
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center text-primary/80 mb-12">Our Service Providers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {displayedProviders.map((provider) => (
                             <div key={provider.name} className="bg-card p-4 rounded-lg shadow-sm flex items-center justify-center h-24 transition hover:shadow-md">
                                <Image 
                                    src={provider.src} 
                                    alt={provider.name} 
                                    width={provider.width} 
                                    height={provider.height} 
                                    className="h-12 w-auto object-contain opacity-70"
                                    data-ai-hint={provider.hint}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button onClick={() => setShowAll(!showAll)} variant="outline" className="text-primary hover:bg-primary/10 border-primary">
                            {showAll ? 'Show Less Providers' : 'View All Service Providers'}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
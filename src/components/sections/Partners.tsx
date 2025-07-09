import Image from 'next/image';

const providers = [
    { name: "Hospital A", width: 120, height: 60, hint: "hospital logo" },
    { name: "Clinic B", width: 120, height: 60, hint: "clinic logo" },
    { name: "Pharmacy X", width: 120, height: 60, hint: "pharmacy logo" },
    { name: "Lab Care", width: 120, height: 60, hint: "laboratory logo" },
    { name: "Physio UG", width: 120, height: 60, hint: "physiotherapy logo" },
    { name: "Medi Group", width: 120, height: 60, hint: "medical group" },
];

export default function Partners() {
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
                        {providers.map((provider) => (
                             <div key={provider.name} className="bg-card p-4 rounded-lg shadow-sm flex items-center justify-center h-24 transition hover:shadow-md">
                                <Image 
                                    src={`https://placehold.co/${provider.width}x${provider.height}.png`} 
                                    alt={provider.name} 
                                    width={provider.width} 
                                    height={provider.height} 
                                    className="h-12 w-auto opacity-70"
                                    data-ai-hint={provider.hint}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

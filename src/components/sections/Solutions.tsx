import { Shield, BedSingle, Stethoscope, Ambulance } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutions = [
    { icon: Shield, title: "Injury Coverage", text: "Full coverage for rugby-related injuries including diagnostics, treatment, and rehabilitation.", color: "blue" },
    { icon: BedSingle, title: "Hospitalization", text: "Inpatient and outpatient care at our network of partner hospitals and clinics.", color: "red" },
    { icon: Stethoscope, title: "Preventive Care", text: "Regular health screenings and preventive measures to keep players at peak performance.", color: "yellow" },
    { icon: Ambulance, title: "Emergency Support", text: "24/7 emergency response and medical evacuation when needed.", color: "green" }
];

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700' },
    red: { bg: 'bg-red-100', text: 'text-red-700' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
    green: { bg: 'bg-green-100', text: 'text-green-700' },
}

export default function Solutions() {
    return (
        <section id="solutions" className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-primary mb-4">Our Comprehensive Solutions</h2>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 font-body">We provide more than just insurance - offering a complete support system for Uganda's rugby community.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, index) => {
                        const Icon = item.icon;
                        const colors = colorClasses[item.color as keyof typeof colorClasses];
                        return (
                            <div key={index} className="bg-card rounded-lg shadow-lg p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className={cn('rounded-full w-16 h-16 flex items-center justify-center mb-4', colors.bg)}>
                                    <Icon className={cn('text-3xl', colors.text)} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-muted-foreground font-body">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

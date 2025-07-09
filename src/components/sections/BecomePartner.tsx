import { Flag, ShieldCheck, Award, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partnershipBenefits = [
  {
    icon: Flag,
    title: 'Brand Visibility',
    description: 'Logo placement on jerseys, event materials, and digital platforms.',
  },
  {
    icon: ShieldCheck,
    title: 'Community Impact',
    description: 'Direct involvement in grassroots sports development.',
  },
  {
    icon: Award,
    title: 'Award Recognition',
    description: 'Annual partner appreciation events and community service awards.',
  },
  {
    icon: BarChart3,
    title: 'Impact Reports',
    description: 'Quarterly updates on how your partnership is making a difference.',
  },
];

export default function BecomePartner() {
  return (
    <section id="become-partner" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Become a Partner
          </h2>
          <p className="text-lg text-muted-foreground mb-12 font-body">
            Join leading organizations in supporting Uganda's rugby community.
            <br />
            Partnership benefits include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnershipBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-secondary/60 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <benefit.icon className="h-10 w-10 text-primary mx-auto mb-5" />
                <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-7 text-lg transform transition hover:scale-105 shadow-lg">
            <a href="#">Partner With Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

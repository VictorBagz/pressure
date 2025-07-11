import { Building2, Handshake, Download, Send, Flag, ShieldCheck, Award, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
          <Building2 className="h-12 w-12 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Become a Partner
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-body">
            We offer a range of partnership packages to suit your organization's goals. Let's discuss how we can work together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnershipBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-secondary/60 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-md font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-7 text-lg transform transition hover:scale-105 shadow-lg">
                      <Handshake className="mr-2 h-5 w-5" />
                      Get Involved
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                      <Link href="/TermsConditions.pdf" target="_blank" download>
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download Proposal</span>
                      </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                      <Link href="mailto:kayondoronniejrfoundation@gmail.com">
                          <Send className="mr-2 h-4 w-4" />
                          <span>Contact Our Team</span>
                      </Link>
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </section>
  );
}

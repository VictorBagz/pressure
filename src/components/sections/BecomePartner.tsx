import { Building2, Handshake, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function BecomePartner() {
  return (
    <section id="become-partner" className="pt-0.5 pb-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Building2 className="h-12 w-12 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Become a Sponsor
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-body">
            We offer a range of sponsorship packages to suit your organization's goals. Let's discuss how we can work together.
          </p>

          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-7 text-lg transform transition hover:scale-105 shadow-lg">
                      <Handshake className="mr-2 h-5 w-5" />
                      Get Involved
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                      <Link href="/Proposal.pdf" target="_blank" download>
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

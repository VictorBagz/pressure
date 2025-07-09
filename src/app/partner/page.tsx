import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Building2, Handshake, Download, Send } from 'lucide-react';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function PartnerPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow flex items-center justify-center p-6">
                <div className="max-w-2xl mx-auto text-center">
                    <Building2 className="h-12 w-12 mx-auto text-primary mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Ready to Make a Difference?
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 font-body">
                        We offer a range of partnership packages to suit your organization's goals. Let's discuss how we can work together.
                    </p>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8">
                                <Handshake className="mr-2 h-5 w-5" />
                                Get Involved
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuItem asChild>
                                <Link href="/RugbyCare-Partnership-Proposal.pdf" target="_blank" download>
                                    <Download className="mr-2 h-4 w-4" />
                                    <span>Download Proposal</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="mailto:info@rugbycare.ug">
                                    <Send className="mr-2 h-4 w-4" />
                                    <span>Contact Our Team</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </main>
            <Footer />
        </div>
    );
}

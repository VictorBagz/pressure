import Link from 'next/link';
import { MapPin, Phone, Mail, Twitter, } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                    {/* About */}
                    <div>
                        <Link href="/">
                          <Image
                            src="/photos/medicalfund.jpeg"
                            alt="RugbyCare UG Logo"
                            width={180}
                            height={40}
                            className="mb-4"
                            data-ai-hint="logo"
                          />
                        </Link>
                        <p className="text-primary-foreground/80 mb-4 font-body">Providing comprehensive medical insurance coverage for rugby players across Uganda since 2025.</p>
                        <div className="flex space-x-4">
                            <a href="https://x.com/jr_kayondo?t=7pUAd7zeXuNdfNI5uLsm5A&s=09" className="text-primary-foreground/80 hover:text-accent transition"><Twitter /></a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 font-body">
                            <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition">Home</a></li>
                            <li><a href="#story" className="text-primary-foreground/80 hover:text-accent transition">Our Story</a></li>
                            <li><a href="#players" className="text-primary-foreground/80 hover:text-accent transition">Players</a></li>
                            <li><a href="#donate-section" className="text-primary-foreground/80 hover:text-accent transition">Donate</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-primary-foreground/80 font-body">
                            <p className="flex items-start"><MapPin className="mr-3 text-accent mt-1 h-5 w-5 shrink-0" /> Kampala, Uganda</p>
                            <p className="flex items-start"><MapPin className="mr-3 text-accent mt-1 h-5 w-5 shrink-0" /> Room1-Lugogo Tennis Court</p>
                            <a href="tel:+256773207919" className="flex items-center hover:text-accent transition">
                                <Phone className="mr-3 text-accent h-5 w-5 shrink-0" />
                                <span>+256 773 207 919</span>
                            </a>
                            <a href="tel:+256767001907" className="flex items-center hover:text-accent transition">
                                <Phone className="mr-3 text-accent h-5 w-5 shrink-0" />
                                <span>+256 767 001 907</span>
                            </a>
                            <a href="mailto:kayondoronniejrfoundation@gmail.com" className="flex items-center hover:text-accent transition">
                                <Mail className="mr-3 text-accent h-5 w-5 shrink-0" />
                                <span>kayondoronniejrfoundation@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-primary/50 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center font-body">
                        <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Athletes Medical Fund Uganda. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link href="/TermsConditions.pdf" download className="text-primary-foreground/70 hover:text-accent text-sm transition">Terms of Service</Link>
                            <Link href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

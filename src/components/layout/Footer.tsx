import Link from 'next/link';
import { Goal, Send, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center mr-2">
                                <Goal className="text-primary" />
                            </div>
                            RugbyCare UG
                        </h3>
                        <p className="text-primary-foreground/80 mb-4 font-body">Providing comprehensive medical insurance coverage for rugby players across Uganda since 2019.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition"><Facebook /></a>
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition"><Twitter /></a>
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition"><Instagram /></a>
                            <a href="#" className="text-primary-foreground/80 hover:text-accent transition"><Linkedin /></a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 font-body">
                            <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition">Home</a></li>
                            <li><a href="#story" className="text-primary-foreground/80 hover:text-accent transition">Our Story</a></li>
                            <li><a href="#solutions" className="text-primary-foreground/80 hover:text-accent transition">Solutions</a></li>
                            <li><a href="#players" className="text-primary-foreground/80 hover:text-accent transition">Players</a></li>
                            <li><Link href="/donate" className="text-primary-foreground/80 hover:text-accent transition">Donate</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-primary-foreground/80 font-body">
                            <p className="flex items-start"><MapPin className="mr-3 text-accent mt-1 h-5 w-5 shrink-0" /> Plot 12, Rugby House, Kampala</p>
                            <p className="flex items-center"><Phone className="mr-3 text-accent h-5 w-5 shrink-0" /> +256 772 123 456</p>
                            <p className="flex items-center"><Mail className="mr-3 text-accent h-5 w-5 shrink-0" /> info@rugbycare.ug</p>
                        </div>
                    </div>
                    
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-primary-foreground/80 mb-4 font-body">Subscribe to receive updates on our programs and impact.</p>
                        <form className="flex">
                            <Input type="email" placeholder="Your email" className="bg-primary-foreground text-primary rounded-r-none focus:ring-accent focus:ring-offset-0 focus:ring-2" />
                            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-l-none">
                                <Send className="h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </div>
                
                <div className="border-t border-primary/50 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center font-body">
                        <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} RugbyCare Foundation Uganda. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition">Privacy Policy</Link>
                            <Link href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition">Terms of Service</Link>
                            <Link href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

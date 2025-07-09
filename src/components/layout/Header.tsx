'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#story-impact', label: 'Impact' },
  { href: '#story', label: 'Our Story' },
  { href: '#players', label: 'Players' },
  { href: '/donate', label: 'Donate' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop - 70, // Adjust for header height
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      'sticky top-0 z-50 transition-shadow duration-300 bg-white text-primary',
      isScrolled && 'shadow-lg'
    )}>
      <div className="container mx-auto pl-[5px] pr-1 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/photos/medicalfund.jpeg"
              alt="RugbyCare UG Logo"
              width={180}
              height={40}
              priority
              data-ai-hint="logo"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-accent transition font-body"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/photos/kayondologo.jpeg"
                  alt="KayondoRonniejr UG Logo"
                  width={180}
                  height={40}
                  priority
                  data-ai-hint="logo"
                />
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block py-2 text-center rounded-md hover:bg-secondary hover:text-accent transition font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

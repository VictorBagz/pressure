'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Goal, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#impact', label: 'Impact' },
  { href: '#story', label: 'Our Story' },
  { href: '#solutions', label: 'Solutions' },
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
      'sticky top-0 z-50 transition-shadow duration-300 bg-card text-primary',
      isScrolled && 'shadow-lg'
    )}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
            <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center">
              <Goal className="text-primary" />
            </div>
            <h1 className="text-xl font-bold font-headline">RugbyCare<span className="text-accent">UG</span></h1>
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

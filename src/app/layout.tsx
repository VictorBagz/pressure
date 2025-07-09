import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from '@/components/WhatsappButton';

export const metadata: Metadata = {
  title: 'RugbyCare UG - Medical Insurance for Ugandan Rugby Players',
  description: 'Providing comprehensive medical insurance coverage for rugby players across Uganda. We ensure no athlete is left behind due to injuries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}

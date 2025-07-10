import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from '@/components/WhatsappButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://studio--rugbycare-ug.us-central1.hosted.app'),
  title: 'Athletes Medical Fund Uganda | Medical Insurance for Ugandan Rugby Players',
  description: 'Support the Kayondo Ronnie Jr Foundation in providing essential medical insurance and sports injury coverage for over 5,400 rugby players across Uganda. Your donation to the Athletes Medical Fund ensures their safety and future in the sport.',
  keywords: 'Rugby Uganda, Ugandan rugby players, rugby medical insurance, sports injury insurance Uganda, player safety Uganda, Kayondo Ronnie Jr Foundation, Athletes Medical Fund Uganda, RugbyCare UG, donate rugby Uganda, support Ugandan athletes, uganda rugby, insurance, medical cover, rugby insurance, athletes medical fund, medical fund, kayondo ronnie foundation',
  icons: {
    icon: '/photos/medicalfundLogo.jpeg',
    shortcut: '/photos/medicalfundLogo.jpeg',
    apple: '/photos/medicalfundLogo.jpeg',
  },
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

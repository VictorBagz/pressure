'use client';

import Link from 'next/link';
import Image from 'next/image';

const WhatsappIcon = () => (
    <Image 
        src="/photos/whatsapp.jpeg" 
        alt="Chat on WhatsApp with RugbyCare UG"
        width={56}
        height={56}
        className="rounded-full"
    />
);


export default function WhatsappButton() {
    return (
        <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Chat with RugbyCare UG on WhatsApp"
        >
            <WhatsappIcon />
        </Link>
    );
}

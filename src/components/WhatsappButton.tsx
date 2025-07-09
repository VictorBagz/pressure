'use client';

import Link from 'next/link';
import Image from 'next/image';

const WhatsappIcon = () => (
    <Image 
        src="/photos/whatsapp.jpeg" 
        alt="Whatsapp Icon"
        width={30}
        height={30}
    />
);


export default function WhatsappButton() {
    return (
        <Link
            href="https://wa.me/256772123456"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Chat with us on WhatsApp"
        >
            <WhatsappIcon />
        </Link>
    );
}

'use client';

import Link from 'next/link';

const WhatsappIcon = () => (
    <svg
        height="32"
        width="32"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <path
            d="M16.75,13.96C17,14.26 17.06,14.81 16.5,15.37C15.94,15.93 14.8,16.03 14.17,15.8C13.54,15.57 11.66,14.88 9.91,13.13C8.16,11.38 7.47,9.5 7.24,8.87C7,8.24 7.07,7.66 7.63,7.1C8.19,6.54 8.74,6.48 9.04,6.78C9.34,7.08 9.6,7.74 9.7,7.94C9.8,8.14 9.76,8.39 9.53,8.62C9.3,8.85 9.08,9.07 8.93,9.22C8.78,9.37 8.63,9.54 8.83,9.74C9.03,9.94 9.48,10.39 10.3,11.21C11.35,12.26 12.06,12.51 12.26,12.71C12.46,12.91 12.63,12.76 12.78,12.61C12.93,12.46 13.15,12.24 13.38,12.01C13.61,11.78 13.86,11.74 14.06,11.84C14.26,11.94 14.92,12.22 15.22,12.52C15.52,12.82 15.72,12.92 15.82,13.02C15.92,13.12 16.45,13.66 16.75,13.96M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.66,22 15.25,21.56 16.63,20.77L22,22L20.77,16.63C21.56,15.25 22,13.66 22,12A10,10 0 0,0 12,2Z"
        />
    </svg>
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

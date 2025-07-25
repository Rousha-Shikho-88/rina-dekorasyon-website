// src/components/Navbar.tsx
import { useState } from 'react';
import Logo from '../assets/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    

    const navLinks = [
        { name: 'AnaSayfa', href: '#hero' },
        { name: 'Hakkımızda', href: '#about' },
        { name: 'Hizmetler', href: '#servises' },
        
    ];

    const actionButtonText = 'WhatsApp';
    const actionButtonHref = 'https://wa.me/905321510336';

    return (
        <nav className="w-full p-4 bg-[#FFFDFA] text-black shadow-md relative z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="RINA Logo" className="h-10 mr-3" />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>

                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="hover:text-orange-400 transition-colors duration-200">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={actionButtonHref} className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full transition-colors duration-200">
                            {actionButtonText}
                        </a>
                    </li>
                </ul>
            </div>

            <div
                className={`md:hidden ${isOpen ? 'block' : 'hidden'
                    } bg-[#FFFDFA] py-4 shadow-lg`}
            >
                <ul className="flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-black hover:text-orange-400 transition-colors duration-200 text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={actionButtonHref}
                            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-white transition-colors duration-200 text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {actionButtonText}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
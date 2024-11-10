// Navbar Component (Navbar.js)
"use client"
import React, { useState } from 'react';
import '../css/navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import logosvg from '../../../public/assets/logos/logo.svg';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
        setIsOpen(false); // Close menu after scrolling
    };

    return (
        <nav className="navbar">
            <div className="logo" onClick={toggleMenu}>
                <Image src={logosvg} alt="dn-black-logo" width={50} height={50} />
                <p>EHAL</p>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`tabs ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</Link></li>
                    <li><Link href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</Link></li>
                    <li><Link href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</Link></li>
                    <li><Link href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/birkabo_logo_no_bg.png';
import { IoClose, IoMenu } from 'react-icons/io5';

export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [scrolledPastHeader, setScrolledPastHeader] = useState(0);

    useEffect(() => {
        const updateScrolledPastHeader = () => {
            setScrolledPastHeader(window.scrollY > 0);
        };

        updateScrolledPastHeader();

        window.addEventListener('scroll', updateScrolledPastHeader);

        return () =>
            window.removeEventListener('scroll', updateScrolledPastHeader);
    }, []);

    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function to prevent side effects
        return () => {
            document.body.style.overflow = '';
        };
    }, [openNav]);

    const links = [
        { href: '/', label: 'Hem' },
        { href: '/fastigheter', label: 'Våra fastigheter' },
        { href: '/ansokan', label: 'Ansökan' },
        { href: '/blanketter', label: 'Blanketter' },
        { href: '/kontakt', label: 'Kontakta oss' },
        { href: '/om', label: 'Om Birkabo' },
    ];

    const navList = (
        <ul className="flex w-full flex-col items-start lg:flex-row lg:gap-6 lg:p-0">
            {links.map((link) => (
                <Link
                    key={link.href}
                    className="lg:animated-underline flex flex-col text-2xl font-semibold tracking-wide max-lg:w-full lg:text-lg lg:font-medium lg:tracking-normal lg:after:bg-black"
                    href={link.href}
                    onClick={() => setOpenNav(false)}
                >
                    <span className="max-lg:my-3">{link.label}</span>
                </Link>
            ))}
        </ul>
    );

    return (
        <div
            className={`fixed z-10 flex w-full flex-col items-center transition-all duration-300 ease-in-out ${
                scrolledPastHeader || openNav
                    ? 'bg-white/50 shadow-xl backdrop-blur-lg lg:shadow-md lg:backdrop-blur-lg'
                    : ''
            }`}
        >
            <div className="container flex h-24 items-center justify-between px-8 lg:h-20">
                <Link
                    href="/"
                    aria-label="Gå till startsidan"
                    onClick={() => setOpenNav(false)}
                    className="relative h-full w-52"
                >
                    <Image
                        src={logo}
                        fill
                        className="object-contain"
                        alt="Birkabos logotyp"
                    />
                </Link>
                <div className="max-lg:hidden">{navList}</div>
                {openNav ? (
                    <IoClose
                        className="ml-auto h-10 w-10 lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    />
                ) : (
                    <IoMenu
                        className="ml-auto h-10 w-10 lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    />
                )}
            </div>
            <div
                className={`flex h-[calc(100vh-5rem)] w-full p-8 ${
                    !openNav ? 'hidden' : ''
                }`}
            >
                {navList}
            </div>
        </div>
    );
}

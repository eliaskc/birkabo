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

    const links = [
        { href: '/', label: 'Hem' },
        { href: '/fastigheter', label: 'Våra fastigheter' },
        { href: '/ansokan', label: 'Ansökan' },
        { href: '/blanketter', label: 'Blanketter' },
        { href: '/kontakt', label: 'Kontakta oss' },
        { href: '/om', label: 'Om Birkabo' },
    ];

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="flex w-full flex-col items-start gap-6 lg:flex-row lg:gap-6 lg:p-0">
            {links.map((link) => (
                <div key={link.href} className="max-lg:w-full">
                    <Link
                        className="lg:animated-underline text-center text-xl font-bold after:bg-white lg:text-lg lg:font-medium lg:after:bg-black"
                        href={link.href}
                        onClick={() => setOpenNav(false)}
                    >
                        {link.label}
                    </Link>
                    <hr className="mt-4 border-[1px] border-black/25 lg:hidden" />
                </div>
            ))}
        </ul>
    );

    return (
        <div
            className={`fixed z-10 flex w-full flex-col items-center px-8 transition-all duration-100 ease-in-out lg:p-0 ${
                scrolledPastHeader || openNav
                    ? 'bg-white/25 shadow-xl backdrop-blur-2xl lg:shadow-md lg:backdrop-blur-lg'
                    : ''
            }`}
        >
            <div className="container flex h-20 items-center justify-between">
                <Link
                    href="/"
                    onClick={() => setOpenNav(false)}
                    className="relative h-full w-52"
                >
                    <Image src={logo} fill className="object-contain" />
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
                className={`flex w-full justify-start py-8 ${
                    !openNav ? 'hidden' : ''
                }`}
            >
                {navList}
            </div>
        </div>
    );
}

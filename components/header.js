import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/birkabo_logo_no_bg.png';
import { Navbar, MobileNav } from '@material-tailwind/react';
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
        <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-6 lg:p-0">
            {links.map((link) => (
                <Link
                    key={link.href}
                    className="animated-underline text-center text-3xl font-medium lg:text-lg"
                    href={link.href}
                    onClick={() => setOpenNav(false)}
                >
                    {link.label}
                </Link>
            ))}
        </ul>
    );

    return (
        <div
            className={`sticky top-0 z-10 flex h-20 w-full justify-center px-8 transition-all duration-100 ease-in-out lg:p-0 ${
                scrolledPastHeader
                    ? 'bg-white/25 shadow-md backdrop-blur-lg'
                    : ''
            }`}
        >
            <Navbar
                className="container border-none bg-transparent p-0 text-black shadow-none"
                fullWidth
            >
                <div className="flex h-full items-center justify-between">
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
                <MobileNav
                    open={openNav}
                    className="absolute left-0 h-auto bg-white/25 shadow-md backdrop-blur-lg"
                >
                    {openNav ? (
                        <div className="container z-10 mx-auto flex justify-center py-8">
                            {navList}
                        </div>
                    ) : null}
                </MobileNav>
            </Navbar>
        </div>
    );
}

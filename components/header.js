import { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/birkabo_logo_no_bg.png'
import {
    Navbar,
    MobileNav,
} from "@material-tailwind/react";
import { IoClose, IoMenu } from 'react-icons/io5'


export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [scrolledPastHeader, setScrolledPastHeader] = useState(0);

    useEffect(() => {
        const updateScrolledPastHeader = () => {
            setScrolledPastHeader(window.scrollY > 0);
        }

        updateScrolledPastHeader();

        window.addEventListener("scroll", updateScrolledPastHeader);

        return () => window.removeEventListener("scroll", updateScrolledPastHeader);
    }, []);

    const links = [
        { href: '/', label: 'Hem' },
        { href: '/fastigheter', label: 'Våra fastigheter' },
        { href: '/ansokan', label: 'Ansökan' },
        { href: '/blanketter', label: 'Blanketter' },
        { href: '/kontakt', label: 'Kontakta oss' },
        { href: '/om', label: 'Om Birkabo' },
    ]

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="flex flex-col gap-6 lg:p-0 lg:flex-row lg:items-center lg:gap-6">
            {links.map((link) => (
                <Link key={link.href} className='text-2xl text-center underline decoration-2 font-medium lg:no-underline lg:text-lg lg:transition-colors lg:duration-250 lg:hover:underline' href={link.href} onClick={() => setOpenNav(false)}>{link.label}</Link>
            ))}
        </ul>
    );

    return (
        <div className={`sticky z-10 h-20 top-0 flex justify-center w-full px-8 transition-all duration-250 ease-in-out lg:p-0 ${(scrolledPastHeader ? 'backdrop-blur-lg bg-white/25 shadow-md' : '')} ${(openNav ? 'mb-[24rem] ' : '')}`}>
            <Navbar className="container text-black border-none p-0 shadow-none" fullWidth>
                <div className="h-full flex items-center justify-between">
                    <Link href="/" onClick={() => setOpenNav(false)} className='relative h-full w-52'>
                        <Image src={logo} fill className="object-contain" />
                    </Link>
                    <div className="max-lg:hidden">
                        {navList}
                    </div>
                    {openNav ? (
                        <IoClose
                            className="ml-auto h-10 w-10 lg:hidden"
                            onClick={() => setOpenNav(!openNav)} />
                    ) : (
                        <IoMenu
                            className="ml-auto h-10 w-10 lg:hidden"
                            onClick={() => setOpenNav(!openNav)} />
                    )
                    }
                </div>
                <MobileNav open={openNav} className='h-auto opacity-100'>
                    {openNav ? (
                        <div className="container mx-auto z-10 pt-8 flex justify-center">
                            {navList}
                        </div>
                    ) : null}
                </MobileNav>
            </Navbar >
        </div >
    );
}
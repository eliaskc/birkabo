import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/birkabo_logo.svg'
import {
    Navbar,
    MobileNav,
} from "@material-tailwind/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose, IoMenu } from 'react-icons/io5'


export default function Example() {
    const [openNav, setOpenNav] = useState(false);

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
        <ul className="flex flex-col gap-6 pb-6 lg:p-0 lg:flex-row lg:items-center lg:gap-6">
            {links.map((link) => (
                <Link key={link.href} className='text-xl lg:transition-colors lg:duration-250 lg:hover:text-white' href={link.href} onClick={() => setOpenNav(false)}>{link.label}</Link>
            ))}
        </ul>
    );

    return (
        <div className="flex justify-center w-full bg-birkabo px-8 lg:p-0">
            <Navbar className="container text-black border-none p-0" fullWidth>
                <div className="h-28 flex items-center justify-between">
                    <Link href="/" onClick={() => setOpenNav(false)}>
                        <Image src={logo} width={200} height={75} />
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
                        <div className="container mx-auto z-10">
                            {navList}
                        </div>
                    ) : null}
                </MobileNav>
            </Navbar >
        </div>
    );
}
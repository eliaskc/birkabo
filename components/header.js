import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/birkabo_logo.svg'
import { useState } from 'react'
// import styles from '../styles/modules/components/Header.module.sass'
import { Squash as Hamburger } from 'hamburger-react'
import { Menu, Popover } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Navbar, MobileNav } from '@material-tailwind/react'

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const toggleOpen = () => setOpen((h) => !h);

    const links = [
        { href: '/', label: 'Hem' },
        { href: '/fastigheter', label: 'Våra fastigheter' },
        { href: '/info', label: 'Hyresgästinformation' },
        { href: '/kontakt', label: 'Kontakta oss' },
        { href: '/om', label: 'Om Birkabo' },
    ]

    return (
        <header className='flex justify-between h-24 items-center p-4 bg-birkabo'>
            <Link href="/">
                <Image onClick={handleClose} src={logo} width="150px" height="75px" />
            </Link>

            <Hamburger toggled={open} onToggle={toggleOpen}></Hamburger>


            <menu className={open ? '' : 'max-lg:hidden font-medium'}>
                {links.map((link) => (
                    <Link className='text-xl mx-2 transition-colors duration-250 hover:text-white' href={link.href}>{link.label}</Link>
                ))}
            </menu>
        </header >
    )
}
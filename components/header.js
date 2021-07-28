import Image from 'next/Image'
import Link from 'next/Link'
import logo from '../public/birkabo_logo.svg'
import { useState } from 'react'
import styles from '../styles/modules/components/Header.module.sass'
import { Squash as Hamburger } from 'hamburger-react'

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <header className={styles.header}>
            <Link href="/">
                <Image onClick={handleClose} className={styles.logo} src={logo} width="150px" height="75px" />
            </Link>
            {/* <span class="material-icons md-36" onClick={toggleShow} style={{ cursor: "pointer" }}>menu</span> */}
            <Hamburger toggled={show} onToggle={toggleShow}></Hamburger>

            <menu className={styles.menu} id={show ? styles.visible : styles.hidden}>
                <Link href="/fastigheter">
                    <h4 onClick={handleClose}>Våra fastigheter</h4>
                </Link>
                <Link href="/info">
                    <h4 onClick={handleClose}>Hyresgästinformation</h4>
                </Link>
                <Link href="/kontakt">
                    <h4 onClick={handleClose}>Kontakta oss</h4>
                </Link>
                <Link href="/om">
                    <h4 onClick={handleClose} style={{ border: "none" }}>Om Birkabo</h4>
                </Link>
            </menu>
        </header >
    )
}
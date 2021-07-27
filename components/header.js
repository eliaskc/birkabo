import Image from 'next/Image'
import Link from 'next/Link'
import logo from '../public/birkabo_logo.svg'
import { useState } from 'react'
import SideMenu from './sideMenu'

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <header>
            <Link href="/">
                <Image src={logo} width="150px" height="75px" />
            </Link>
            <span class="material-icons md-36" onClick={toggleShow} style={{cursor: "pointer"}}>menu</span>
            {/* <div className="menuButton">
          <h4 style={{margin: "0 1rem 0 0"}}>Meny</h4>
          <span class="material-icons md-36">menu</span>
        </div> */}

            <SideMenu isOpen={show}></SideMenu>
        </header >
    )
}
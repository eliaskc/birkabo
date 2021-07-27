import styles from '../styles/modules/components/SideMenu.module.sass'
import Link from 'next/Link'

export default function sideMenu(props) {
    return (
        <menu className={styles.menu} style={!props.isOpen ? { display: "none"} : {}}>
            <Link href="/fastigheter">
                <h3>Våra fastigheter</h3>
            </Link>
            <Link href="/info">
                <h3>Hyresgästinformation</h3>
            </Link>
            <Link href="/kontakt">
                <h3>Kontakta oss</h3>
            </Link>
            <Link href="/om">
                <h3>Om Birkabo</h3>
            </Link>
        </menu>
    )
}
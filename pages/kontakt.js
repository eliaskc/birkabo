import styles from "../styles/modules/Kontakt.module.sass"
import Image from 'next/image'

import headerImg from "./../public/img/headers/kontakt.jpg"

export default function Kontakt() {

    return (
        <div className={styles.container}>
            <div className={styles.headerImg}>
                <Image src={headerImg} layout="fill" objectFit="cover"></Image>
            </div>
            <div className={styles.textContainer}>
                <div>
                    <h1 className="xlarge">Serviceanmälan</h1>
                    <p>**Hänvisning till AK fast och jour här**</p>
                </div>
                <div>
                    <h1 className="xlarge">Kontakta oss</h1>
                    <p>För övriga frågor eller funderingar kan ni kontakta oss på Birkabo direkt via telefon eller mejl.</p>
                    <p><b>Telefon:</b> <a href="tel:+46712456789">0712-456 789</a></p>
                    <p><b>Epost:</b> <a href="mailto:info@birkabo.se">info@birkabo.se</a></p>

                    <p>Birkagatan 55A</p>
                    <p>416 56, Göteborg</p>
                </div>
            </div>
        </div>
    )
}
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
                <div className={styles.textBox}>
                    <div className={styles.jour}>
                        <h1 className="xlarge">Journummer</h1>
                        <p>Vid akut vattenläcka ring Göteborgs El-, & Rörjour på:  <a href="tel:+4631403440">031 - 40 35 40</a></p>
                    </div>
                    <h1 className="xlarge">Fastighetsskötsel</h1>
                    <p>AK Fastighetsskötsel AB anvsvarar för fastighetsskötseln i samtliga fastigheter. Ni kontakta dem via mejl eller telefon enligt nedan vid eventuellt behov. </p>
                    <p>Måndag - fredag: 07.00 - 11.00</p>
                    <p><b>Epost:</b> <a href="mailto:info@akfast.se">info@akfast.se</a></p>
                    <p><b>Telefon:</b> <a href="tel:+46730849200">0730 - 849 200</a></p>
                    <p>Vänligen inkludera information om vilken fastighet och lägenhet det gäller, vad felet är samt telefonnummer ni kan kontaktas på. </p>
                </div>
                <div className={styles.textBox}>
                    <h1 className="xlarge">Kontoret</h1>
                    <p>För övriga frågor eller funderingar kan ni kontakta oss på Birkabo direkt via mejl eller telefon enligt nedan.</p>
                    <p><b>Telefon:</b> <a href="tel:+46712456789">0712 - 456 789</a></p>
                    <p><b>Epost:</b> <a href="mailto:info@birkabo.se">info@birkabo.se</a></p>

                    <p>Birkagatan 55A</p>
                    <p>416 56, Göteborg</p>
                </div>
            </div>
        </div>
    )
}
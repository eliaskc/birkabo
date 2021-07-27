import styles from "../styles/modules/Kontakt.module.sass"

export default function Kontakt() {
    return (
        <div className={styles.container}>
            <div>
                <h3>Serviceanmälan</h3>
                <p>**Formulär för serviceanmälan ska vara här**</p>
            </div>
            <div>
                <h3>Kontaktuppgifter</h3>
                <p>För övriga frågor eller funderingar kan ni kontakta oss direkt via telefon eller mejl.</p>
                <p><b>Telefon:</b> <a href="tel:+46712456789">0712-456 789</a></p>
                <p><b>Epost:</b> <a href="mailto:info@birkabo.se">info@birkabo.se</a></p>

                <h3>Kontor</h3>
                <p><b>Adress: </b>Birkagatan 55A, våning 1</p>
                <p><b>Postnummer: </b>416 56</p>
            </div>
        </div>
    )
}
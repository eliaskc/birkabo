import styles from "../styles/modules/components/Footer.module.sass"

export default function Footer() {
    var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.7151654728164!2d12.020634615910245!3d57.70430888112006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff38b78c4bd83%3A0x749445e38ca99e08!2sBirkagatan%2055%2C%20416%2056%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1626706289688!5m2!1ssv!2sse"

    return (
        <footer className={styles.footer}>
            <div className={styles.menu}>
                <h1>Meny</h1>
                <a href="/fastigheter">
                    Våra fastigheter
                </a>
                <a href="/info">
                    Hyregästinformation
                </a>
                <a href="/kontakt">
                    Kontakta oss
                </a>
                <a href="/om">
                    Om Birkabo
                </a>
            </div>

            <div className={styles.contact}>
                <h1>Kontakt</h1>

                <a href="tel:+46712345567">0712-345 567</a>
                <p><a href="mailto:info@birkabo.se">info@birkabo.se</a></p>

                <span>Birkagatan 55A</span>
                <p>416 56 Göteborg</p>
            </div>

            <div className={styles.mapContainer}>
                <iframe className={styles.embedMap} src={mapUrl} width="300" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </footer>
    )
}
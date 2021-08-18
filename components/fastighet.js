import styles from "../styles/modules/components/Fastighet.module.sass"
import EmblaCarousel from "./EmblaCarousel"

export default function Fastighet(props) {
    var galleryPath = "/img/" + props.estateShort + "_gallery"

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <EmblaCarousel galleryPath={galleryPath}></EmblaCarousel>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.textBox}>
                    <h1 className="large">{props.estateName}</h1>
                    <p>{props.estateDescription}</p>
                    <p><b>Byggnadsår: </b>{props.year}</p>
                    <p><b>Område: </b>{props.area}</p>
                </div>

                <iframe className={styles.embedMap} src={props.mapUrl} width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}
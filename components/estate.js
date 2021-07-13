import styles from "../styles/modules/Estate.module.sass"
import Image from "next/Image"
import Carousel from "react-bootstrap/Carousel"

export default function Estate(props) {
    var imgSrc = "/../public/img/previews/" + props.estateShort + ".jpg"

    return (
        <div className={styles.container}>
            <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>

            <h1>{props.estateName}</h1>
            <p>{props.estateDescription}</p>
            <p><b>Byggnadsår: </b>{props.year}</p>
            <p><b>Område: </b>{props.area}</p>

            <Carousel className={styles.carousel}>
                <Carousel.Item>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                </Carousel.Item>

                <Carousel.Item>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                </Carousel.Item>

                <Carousel.Item>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
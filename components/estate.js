import styles from "../styles/modules/Estate.module.sass"
import Image from "next/Image"
import Carousel from "react-bootstrap/Carousel"
// import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Estate(props) {
    var imgSrc = "/../public/img/previews/" + props.estateShort + ".jpg"

    return (
        <div className={styles.container}>
            {/* <Breadcrumb>
                <Breadcrumb.Item href="/">Hem</Breadcrumb.Item>
                <Breadcrumb.Item href="/fastigheter">Våra Fastigheter</Breadcrumb.Item>
                <Breadcrumb.Item active>{props.estateName}</Breadcrumb.Item>
            </Breadcrumb> */}
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

            <iframe src={props.mapUrl} width="300" height="200" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}
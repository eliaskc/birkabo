import styles from "../styles/modules/components/Fastighet.module.sass"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Fastighet(props) {
    var imgSrc = "/img/previews/" + props.estateShort + ".jpg"

    return (
        <div className={styles.container}>

            <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>

            <h1>{props.estateName}</h1>
            <p>{props.estateDescription}</p>
            <p><b>Byggnadsår: </b>{props.year}</p>
            <p><b>Område: </b>{props.area}</p>

            <Carousel showIndicators={true} showArrows={true} showStatus={false} dynamicHeight={true} thumbWidth="200px">
                {/*<Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>

                <Image src={"/img/VR/20210528-IMG_6990.jpg"} width={1200 / 2} height={800 / 2}></Image>

                <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image> */}
                <div>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <img alt="" src={"/img/VR/20210528-IMG_6990.jpg"} />
                </div>
                <div>
                    <img alt="" src={imgSrc} />
                </div>
            </Carousel>

            <iframe className={styles.embedMap} src={props.mapUrl} width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}
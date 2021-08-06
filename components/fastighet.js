import styles from "../styles/modules/components/Fastighet.module.sass"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Fastighet(props) {
    var imgSrc = "/img/previews/" + props.estateShort + ".jpg"

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 18px)',
        cursor: 'pointer',
    };

    return (
        <div className={styles.container}>



            <Carousel
                showIndicators={true} showArrows={true} showStatus={false} dynamicHeight={true} thumbWidth="100px"
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <span class="material-icons" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                            navigate_before
                        </span>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <span class="material-icons large" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                            navigate_next
                        </span>
                    )
                }>

                <div>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200 / 2} height={800 / 2}></Image>
                    <img alt="" src={imgSrc} />
                </div>
            </Carousel>

            <h1>{props.estateName}</h1>
            <p>{props.estateDescription}</p>
            <p><b>Byggnadsår: </b>{props.year}</p>
            <p><b>Område: </b>{props.area}</p>



            <iframe className={styles.embedMap} src={props.mapUrl} width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}
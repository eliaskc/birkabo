import styles from "../styles/modules/components/Fastighet.module.sass"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Fastighet(props) {
    var galleryPath = "/img/" + props.estateShort + "_gallery"

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 18px)',
        cursor: 'pointer',
    };

    function createImages() {
        let images = []
        for (let i = 1; i < 6; i++) {
            images.push(
                <div style={{height: "500px", position: "relative"}}>
                    {/* <Image src={galleryPath + "/" + i + ".jpg"} layout="fill" objectFit="scale-down"></Image> */}
                    <img src={galleryPath + "/" + i + ".jpg"} style={{height: "100%", "object-fit": "cover"}} />
                </div>
            )
        }
        return images
    }


    return (
        <div className={styles.container}>
            <Carousel className={styles.carousel}
                showIndicators={true} showArrows={true} showStatus={false} dynamicHeight={true} thumbWidth="100px"
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <span className="material-icons" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                            navigate_before
                        </span>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <span className="material-icons large" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                            navigate_next
                        </span>
                    )
                }>

                {createImages()}

                {/* <div>
                    <Image src={imgSrc} width={1200} height={800}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200} height={800}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200} height={800}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200} height={800}></Image>
                    <img alt="" src={imgSrc} />
                </div>
                <div>
                    <Image src={imgSrc} width={1200} height={800}></Image>
                    <img alt="" src={imgSrc} />
                </div> */}
            </Carousel>

            <div className={styles.textBox}>
                <h1>{props.estateName}</h1>
                <p>{props.estateDescription}</p>
                <p><b>Byggnadsår: </b>{props.year}</p>
                <p><b>Område: </b>{props.area}</p>
            </div>

            <iframe className={styles.embedMap} src={props.mapUrl} width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}
import styles from "../styles/Properties.module.sass"
import { Card, CardGroup } from 'react-bootstrap'
import Image from 'next/Image'
import Link from 'next/Link'

import VRimg from "../public/img/VR/20190521-IMG_9076.jpg";
import B51img from "../public/img/Birkagatan/birkagatan51.jpg";
import B55img from "../public/img/Birkagatan/birkagatan55.jpg";

export default function Properties() {
    return (
        <div class={styles.container}>
            <CardGroup>
                <Link href="fastigheter/VR">
                    <Card className={styles.card}>
                        <Image src={VRimg} alt="Bild av uteplats på Birkagatan 55"></Image>

                        <Card.ImgOverlay className={styles.cardOverlay}>
                            <Card.Title className={styles.cardTitle}>Viktor Rydbergsgatan 30</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>

                <Link href="fastigheter/VR">
                    <Card className={styles.card}>
                        <Image src={B51img} alt="Bild av uteplats på Birkagatan 55"></Image>
                        <Card.ImgOverlay className={styles.cardOverlay}>
                            <Card.Title className={styles.cardTitle}>Birkagatan 51</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>

                <Link href="fastigheter/VR">
                    <Card className={styles.card}>
                        <Image src={B55img} alt="Bild av uteplats på Birkagatan 55"></Image>
                        <Card.ImgOverlay className={styles.cardOverlay}>
                            <Card.Title className={styles.cardTitle}>Birkagatan 55</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
            </CardGroup>

        </div >
    )
}
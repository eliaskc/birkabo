import { Card } from 'react-bootstrap'
import Link from 'next/Link'
import Image from 'next/Image'

import styles from "../styles/modules/FastighetCard.module.sass"

export default function FastighetCard(props) {
    var imgSrc = "/../public/img/previews/" + props.estateShort + ".jpg"

    return (
        <Link href={"fastigheter/" + props.estateShort}>
            <Card className={styles.card}>
                <Image src={imgSrc} width={1200} height={800}></Image>

                <Card.ImgOverlay className={styles.cardOverlay}>
                    <Card.Title className={styles.cardTitle}>{props.estateName}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Link>
    )
}
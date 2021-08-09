import styles from "../styles/modules/Fastigheter.module.sass"
import CardGroup from 'react-bootstrap/CardGroup'
import FastighetCard from "../components/fastighetCard"

export default function Fastigheter() {
    return (
        <div className={styles.container}>
            <div className={styles.cardGroup}>
                <FastighetCard estateShort="VR" estateName="Viktor Rydbergsgatan 30"></FastighetCard>
                <FastighetCard estateShort="B51" estateName="Birkagatan 51"></FastighetCard>
                <FastighetCard estateShort="B55" estateName="Birkagatan 55"></FastighetCard>
            </div>
        </div>
    )
}
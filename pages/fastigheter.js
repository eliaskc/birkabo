import styles from "../styles/modules/Estates.module.sass"
import CardGroup from 'react-bootstrap/CardGroup'

import EstateCard from "../components/estateCard"

export default function Estates() {
    return (
        <div class={styles.container}>
            <CardGroup>
                <EstateCard estateShort="VR" estateName="Viktor Rydbergsgatan 30"></EstateCard>
                <EstateCard estateShort="B51" estateName="Birkagatan 51"></EstateCard>
                <EstateCard estateShort="B55" estateName="Birkagatan 55"></EstateCard>
            </CardGroup>
        </div>
    )
}
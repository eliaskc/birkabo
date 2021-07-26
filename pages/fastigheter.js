import styles from "../styles/modules/Fastigheter.module.sass"
import CardGroup from 'react-bootstrap/CardGroup'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
import EstateCard from "../components/fastighetCard"

export default function Fastigheter() {
    return (
        <div class={styles.container}>
            {/* <Breadcrumb>
                <Breadcrumb.Item href="/">Hem</Breadcrumb.Item>
                <Breadcrumb.Item active>Våra Fastigheter</Breadcrumb.Item>
            </Breadcrumb> */}
            <CardGroup>
                <EstateCard estateShort="VR" estateName="Viktor Rydbergsgatan 30"></EstateCard>
                <EstateCard estateShort="B51" estateName="Birkagatan 51"></EstateCard>
                <EstateCard estateShort="B55" estateName="Birkagatan 55"></EstateCard>
            </CardGroup>
        </div>
    )
}
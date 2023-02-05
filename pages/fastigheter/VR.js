import Estate from "../../components/estate"

export default function VR() {
    var estateShort = "VR"
    var estateName = "Viktor Rydbergsgatan 30"
    var estateDescription = "Funkisbyggnad som är typ hur fin som helst eller nåt sånt."
    var year = "1936"
    var area = "Johanneberg"
    var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.363042945358!2d11.97755051590981!3d57.69330168111665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff374f56f2f93%3A0x8a9a1a9ef251834f!2sViktor%20Rydbergsgatan%2030%2C%20412%2057%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1626706002360!5m2!1ssv!2sse"
    return (
        <Estate estateShort={estateShort} estateName={estateName} estateDescription={estateDescription} year={year} area={area} mapUrl={mapUrl}></Estate>
    )
}
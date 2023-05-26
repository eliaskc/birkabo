import Estate from "../../components/estate"

export default function VR() {
    var estateShort = "B55"
    var estateName = "Birkagatan 55"
    var estateDescription =
        <p>
            <span className="font-medium">Byggår:</span> 1947 <br />
            <span className="font-medium">Antal lägenheter:</span> 26 <br />
            <span className="font-medium">Lägenhetsstorlekar:</span> 3 rok på 60 m<sup>2</sup> <br />
            <span className="font-medium">Parkeringsplatser & Garage:</span> Finns
        </p>
    var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.7151654728164!2d12.020634615910245!3d57.70430888112006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff38b78c4bd83%3A0x749445e38ca99e08!2sBirkagatan%2055%2C%20416%2056%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1626706289688!5m2!1ssv!2sse"
    return (
        <Estate estateShort={estateShort} estateName={estateName} estateDescription={estateDescription} mapUrl={mapUrl}></Estate>
    )
}
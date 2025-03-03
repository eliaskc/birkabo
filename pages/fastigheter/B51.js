import Estate from "../../components/estate"

export default function VR() {
    var estateShort = "B51"
    var estateName = "Birkagatan 51"
    var estateDescription =
        <p>
            <span className="font-medium">Byggår:</span> 1947 <br />
            <span className="font-medium">Antal lägenheter:</span> 19 <br />
            <span className="font-medium">Lägenhetsstorlekar:</span> 1 rok på 38 m<sup>2</sup>, 2 rok på 55 m<sup>2</sup> & 3 rok på 70 m<sup>2</sup> <br />
            <span className="font-medium">Parkeringsplatser:</span> Finns
        </p>
    var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.6825847028267!2d12.020797915910288!3d57.70486238112016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff38b75764c29%3A0x2a79be7a9d824e4a!2sBirkagatan%2051%2C%20416%2056%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1626706212265!5m2!1ssv!2sse"
    return (
        <Estate estateShort={estateShort} estateName={estateName} estateDescription={estateDescription} mapUrl={mapUrl}></Estate>
    )
}
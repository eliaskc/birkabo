import Estate from "../../components/estate"

export default function VR () {
    var estateShort = "VR"
    var estateName = "Viktor Rydbergsgatan 30"
    var estateDescription = "Funkisbyggnad som är typ hur fin som helst eller nåt sånt"
    var year = "1936"
    var area = "Johanneberg"
    return (
        <Estate estateShort={estateShort} estateName={estateName} estateDescription={estateDescription} year={year} area={area}></Estate>
    )
}
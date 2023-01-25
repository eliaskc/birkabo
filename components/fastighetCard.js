import Link from 'next/link'

export default function FastighetCard(props) {
    let bgImg = ''
    if (props.estateShort === "VR") {
        bgImg = "bg-VR"
    } else if (props.estateShort === "B51") {
        bgImg = "bg-B51"
    } else if (props.estateShort === "B55") {
        bgImg = "bg-B55"
    }

    return (
        <Link href={"fastigheter/" + props.estateShort}>
            <div className={bgImg + " flex items-center justify-center bg-cover bg-black/40 bg-blend-darken lg:hover:bg-black/20 lg:cursor-pointer 2xl:h-96 2xl:rounded-[1.5rem] 2xl:drop-shadow-2xl"}> 
                <h1 className='text-white'>{props.estateName}</h1>
            </div>
        </Link>
    )
}
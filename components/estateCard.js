import Link from 'next/link'

export default function EstateCard(props) {
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
            <div className={bgImg + " h-full flex items-center justify-center bg-cover bg-black/40 bg-blend-darken lg:hover:bg-black/20 lg:cursor-pointer 2xl:h-96 2xl:rounded-[1.5rem] 2xl:drop-shadow-2xl"}>
                <p className='text-white text-3xl font-semibold'>{props.estateName}</p>
            </div>
        </Link>
    )
}
import Link from 'next/link';

export default function EstateCard(props) {
    let animatedUnderline = false;

    let bgImg = '';
    if (props.estateShort === 'VR') {
        bgImg = 'bg-VR';
    } else if (props.estateShort === 'B51') {
        bgImg = 'bg-B51';
    } else if (props.estateShort === 'B55') {
        bgImg = 'bg-B55';
    }

    return (
        <Link href={'fastigheter/' + props.estateShort}>
            <div
                className={
                    bgImg +
                    ' group flex h-full items-center justify-center bg-black/50 bg-cover bg-blend-darken duration-500 lg:cursor-pointer lg:hover:bg-black/20 2xl:h-96 2xl:rounded-[1.5rem] 2xl:drop-shadow-2xl'
                }
            >
                <p className="animated-underline text-3xl font-semibold text-white after:h-1 after:bg-white lg:group-hover:after:scale-x-100">
                    {props.estateName}
                </p>
            </div>
        </Link>
    );
}

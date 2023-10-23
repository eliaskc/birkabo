import Link from 'next/link';

export default function EstateCard(props) {
    let bgImg = '';
    if (props.estateShort === 'VR') {
        bgImg = 'bg-VR';
    } else if (props.estateShort === 'B51') {
        bgImg = 'bg-B51';
    } else if (props.estateShort === 'B55') {
        bgImg = 'bg-B55';
    }

    return (
        <Link
            href={'fastigheter/' + props.estateShort}
            alt={'Länk till ' + props.estateName}
            className={
                bgImg +
                ' group flex h-full w-full items-center justify-center rounded-3xl bg-black/50 bg-cover p-8 bg-blend-darken duration-500 lg:cursor-pointer lg:drop-shadow-2xl lg:hover:bg-black/20 2xl:w-3/6'
            }
        >
            <p className="lg:animated-underline text-3xl font-bold text-white after:bg-white lg:group-hover:after:scale-x-100">
                {props.estateName}
            </p>
        </Link>
    );
}

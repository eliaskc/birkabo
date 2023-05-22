import Image from 'next/image';
import Link from 'next/link';

import welcomeImg from '../public/img/Birkagatan/20190521-IMG_9013.jpg';

export default function Hem() {
    const links = [
        { href: '/fastigheter', label: 'Våra fastigheter' },
        { href: '/ansokan', label: 'Ansökan' },
        { href: '/blanketter', label: 'Blanketter' },
        { href: '/kontakt', label: 'Kontakta oss' },
    ];

    return (
        <div className="container mb-16 grid grid-cols-1 justify-items-center gap-y-8 px-8 lg:mb-16 lg:grid-cols-4 lg:grid-rows-[2.5fr,1fr] lg:gap-8 lg:gap-y-16 lg:p-0 lg:py-8">
            <div className="relative h-72 w-screen lg:col-span-2 lg:col-start-3 lg:h-full lg:w-full">
                <Image
                    className="object-cover lg:rounded-2xl"
                    src={welcomeImg}
                    alt="Bild av uteplats på Birkagatan 55"
                    fill
                ></Image>
            </div>

            <div className="place-self-start self-center lg:col-span-2 lg:col-start-1 lg:row-start-1">
                <h1 className="m-0 text-4xl font-light">Välkommen till</h1>
                <h1 className="m-0 text-5xl font-bold">Birkabo Förvaltning</h1>
            </div>

            {links.map((link) => (
                <Link key={link.href} href={link.href} className="w-full">
                    <button
                        type="button"
                        className="group h-24 w-full break-all rounded-2xl bg-white px-4 text-xl font-bold shadow-md duration-300 hover:shadow-xl lg:row-start-2 lg:h-32 lg:shadow-lgw lg:hover:scale-105"
                    >
                        {link.label}
                    </button>
                </Link>
            ))}
        </div>
    );
}

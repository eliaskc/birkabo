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
        <div className="container mb-16 grid grid-cols-1 justify-items-center gap-y-8 px-8 lg:mb-16 lg:grid-cols-4 lg:grid-rows-[2.5fr,1fr] lg:gap-8 lg:gap-y-16 lg:py-8">
            <div className="w-screen lg:col-span-2 lg:w-full lg:self-center">
                <Image
                    className="object-cover lg:rounded-2xl"
                    src={welcomeImg}
                    alt="Uteplats på Birkagatan 55"
                ></Image>
            </div>

            <div className="place-self-start self-center lg:col-span-2 lg:col-start-1 lg:row-start-1">
                <h2 className="m-0 text-4xl font-light">Välkommen till</h2>
                <h1 className="m-0 text-5xl font-bold">Birkabo Förvaltning</h1>
            </div>

            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="button flex h-28 w-full items-center justify-center break-all text-xl font-bold lg:row-start-2 lg:h-32"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

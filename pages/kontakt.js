import Image from 'next/image';
import Link from 'next/link';

import headerImg from './../public/img/headers/kontakt.jpg';

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            {/* https://codepen.io/michaelfangman/pen/kWqbeb
            https://www.solodev.com/blog/web-design/how-to-create-a-parallax-hero-image.stml */}
            <div className="relative h-80 w-screen bg-[url('/img/headers/kontakt.jpg')] bg-cover bg-fixed"></div>
            <div className="container grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 lg:px-0">
                <div>
                    <div className="mb-8 rounded-lg bg-red-600 p-4 text-white">
                        <p className="mb-4 text-4xl font-semibold">
                            Journummer
                        </p>
                        <p>
                            Vid akut vattenläcka när AK Fastighetsskötsel (se
                            nedan) ej kan nås, ring Göteborgs El & Rörjour på:{' '}
                            <Link
                                className="animated-underline text-xl font-bold text-link"
                                href="tel:031500120"
                            >
                                031&#8209;50&nbsp;01&nbsp;20
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="mb-4 text-4xl font-semibold">
                            Fastighetsskötsel
                        </p>
                        <p>
                            AK Fastighetsskötsel AB anvsvarar för
                            fastighetsskötseln i samtliga fastigheter. Ni
                            kontaktar dem via mejl eller telefon enligt nedan
                            vid eventuellt behov.{' '}
                        </p>
                        <div className="my-4">
                            <p>
                                <span className="font-bold">Telefon: </span>
                                <Link
                                    className="thin-animated-underline text-link-darker after:bg-link-darker"
                                    href="tel:0730849200"
                                >
                                    0730&#8209;84&nbsp;92&nbsp;00
                                </Link>
                            </p>
                            <p>
                                <span className="font-bold">E-post: </span>
                                <Link
                                    className="thin-animated-underline text-link-darker after:bg-link-darker"
                                    href="mailto:info@akfast.se"
                                >
                                    info@akfast.se
                                </Link>
                            </p>
                            <p>
                                <span className="font-bold">
                                    Måndag - fredag:
                                </span>{' '}
                                07.00 - 11.00
                            </p>
                        </div>
                        <p>
                            Vänligen inkludera information om vilken fastighet
                            och lägenhet det gäller, vad felet är samt
                            telefonnummer ni kan kontaktas på.{' '}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="mb-4 text-4xl font-semibold">Birkabo</p>
                    <p>
                        För övriga frågor eller funderingar kan ni kontakta oss
                        på Birkabo direkt via mejl eller telefon enligt nedan.
                    </p>
                    <div className="mt-4">
                        <p>
                            <span className="font-bold">Telefon: </span>
                            <Link
                                className="thin-animated-underline text-link-darker after:bg-link-darker"
                                href={'tel:0706566726'}
                            >
                                0706&#8209;56&nbsp;67&nbsp;26
                            </Link>
                        </p>
                        <p>
                            <span className="font-bold">E-post: </span>
                            <Link
                                className="thin-animated-underline text-link-darker after:bg-link-darker"
                                href="mailto:info@birkabo.se"
                            >
                                info@birkabo.se
                            </Link>
                        </p>
                    </div>

                    <p className="mb-4 mt-8 text-2xl font-semibold">
                        Fakturerings- och besöksadress
                    </p>
                    <p>
                        Birkabo Förvaltning <br /> Birkagatan 55A <br /> 416 56
                        Göteborg
                    </p>
                </div>
            </div>
        </div>
    );
}

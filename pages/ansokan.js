import Image from 'next/image';
import headerImg from './../public/img/headers/info.jpg';

export default function Application() {
    return (
        <div className="container flex flex-col items-center px-8 2xl:py-8">
            <div className="relative h-80 w-screen 2xl:h-[35rem] 2xl:w-full">
                <Image
                    className="object-cover 2xl:rounded-xl"
                    src={headerImg}
                    alt="Bild på Birkagatan 55"
                    fill
                ></Image>
            </div>
            <div className="self-start py-8">
                <h2 className="mb-4 text-4xl font-semibold">Ansökan</h2>
                <p className="mb-4">
                    Om ni är intresserade av att bo hos oss ber vi er skicka en
                    intresseanmälan till{' '}
                    <a
                        className="thin-animated-underline text-link-darker after:bg-link-darker"
                        href="mailto:info@birkabo.se"
                    >
                        info@birkabo.se
                    </a>
                </p>
                <p className="mb-4">Vänligen inkludera följande:</p>
                <ul className="list-disc pl-8">
                    <li>
                        Personlig introduktion inkl. nuvarande boendesituation
                    </li>
                    <li>
                        Önskad storlek på lägenhet och vilken/vilka fastigheter
                        ni är intresserade av
                    </li>
                    <li>Intervall för möjlig månatlig hyra</li>
                    <li>
                        Sysselsättning inkl. anställningsintyg och er senaste
                        lönespecifikation
                    </li>
                    <li>
                        Era kontaktuppgifter inkl. E-post, telefonnummer och
                        nuvarande adress
                    </li>
                </ul>
            </div>
        </div>
    );
}

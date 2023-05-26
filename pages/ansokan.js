import Image from 'next/image';
import headerImg from './../public/img/headers/info.jpg';
import { useParallax } from 'react-scroll-parallax';

export default function Application() {
    const { ref } = useParallax({ speed: -100 });

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-80 w-screen overflow-hidden 2xl:w-full">
                <Image
                    className="w-full object-cover 2xl:rounded-xl"
                    src={headerImg}
                    ref={ref}
                ></Image>
            </div>
            <div className="container p-8 lg:px-0 ">
                <p className="mb-4 text-4xl font-semibold">Ansökan</p>
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

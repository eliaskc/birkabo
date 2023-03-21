import Image from "next/image"
import headerImg from "./../public/img/headers/info.jpg"

export default function Application() {

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-screen h-80">
                <Image className="object-cover" src={headerImg} fill></Image>
            </div>
            <div className="container p-8 lg:px-0 ">
                <p className="text-4xl font-semibold mb-4">Ansökan</p>
                <p className="mb-4">Om ni är intresserade av att bo hos oss ber vi er skicka en intresseanmälan till <a className="text-link-darker" href="mailto:info@birkabo.se">info@birkabo.se</a>. </p>
                <p className="mb-4">Vänligen inkludera följande:</p>
                <ul className="list-disc pl-8">
                    <li>Personlig introduktion inkl. nuvarande boendesituation</li>
                    <li>Önskad storlek på lägenhet och vilken/vilka fastigheter ni är intresserade av</li>
                    <li>Intervall för möjlig månatlig hyra</li>
                    <li>Sysselsättning inkl. anställningsintyg och er senaste lönespecifikation</li>
                    <li>Era kontaktuppgifter inkl. E-post, telefonnummer och nuvarande adress</li>
                </ul>
            </div>
        </div>
    )
}
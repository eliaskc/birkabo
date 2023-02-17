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
                <p className="mb-4">Om ni önskar ansöka om lägenhet kan ni kontakta oss på <a href="mailto:info@birkabo.se">info@birkabo.se</a>. </p>
                <p className="mb-4">Vänligen inkludera följande information:</p>
                <ul className="list-disc pl-8">
                    <li>Personlig introduktion</li>
                    <li>Önskad storlek på lägenhet</li>
                    <li>Intervall för möjlig månatlig hyra</li>
                    <li>Sysselsättning</li>
                    <li>Era kontaktuppgifter</li>
                </ul>
            </div>
        </div>
    )
}
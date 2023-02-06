import styles from "../styles/modules/Kontakt.module.sass"
import Image from 'next/image'
import Link from 'next/link'

import headerImg from "./../public/img/headers/kontakt.jpg"

export default function Kontakt() {

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-screen h-80 lg:h-96">
                <Image className="object-cover" src={headerImg} fill></Image>
            </div>
            <div className="container grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 lg:px-0">
                <div>
                    <div className="bg-red-600 text-white p-4 rounded-lg mb-8">
                        <h1 className="text-4xl font-semibold mb-4">Journummer</h1>
                        <p>Vid akut vattenläcka när AK Fastighetsskötsel (se nedan) ej kan nås, ring Göteborgs El-, & Rörjour på: <Link className="text-xl text-link underline font-bold" href="tel:031500120">031 - 50 01 20</Link></p>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-4xl font-semibold mb-4">Fastighetsskötsel</h1>
                        <p>AK Fastighetsskötsel AB anvsvarar för fastighetsskötseln i samtliga fastigheter. Ni kontakta dem via mejl eller telefon enligt nedan vid eventuellt behov. </p>
                        <div className="my-4">
                            <p><span className="font-bold">Telefon:</span> <Link className="text-link-darker underline" href="tel:0730849200">0730 - 84 92 00</Link></p>
                            <p><span className="font-bold">E-post:</span> <Link className="text-link-darker underline" href="mailto:info@akfast.se">info@akfast.se</Link></p>
                            <p><span className="font-bold">Måndag - fredag:</span> 07.00 - 11.00</p>
                        </div>
                        <p>Vänligen inkludera information om vilken fastighet och lägenhet det gäller, vad felet är samt telefonnummer ni kan kontaktas på. </p>
                    </div>
                </div>
                <div>
                    <div className="mb-8">
                        <h1 className="text-4xl font-semibold mb-4">Kontoret</h1>
                        <p>För övriga frågor eller funderingar kan ni kontakta oss på Birkabo direkt via mejl eller telefon enligt nedan.</p>
                        <div className="mt-4">
                            <p><span className="font-bold">Telefon:</span> <Link className="text-link-darker underline" href="tel:0706566726">0706 - 56 67 26</Link></p>
                            <p><span className="font-bold">E-post:</span> <Link className="text-link-darker underline" href="mailto:info@birkabo.se">info@birkabo.se</Link></p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Fakturering och besöksadress</h2>
                        <p>Birkabo Förvaltning</p>
                        <p>Birkagatan 55A</p>
                        <p>416 56 Göteborg</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
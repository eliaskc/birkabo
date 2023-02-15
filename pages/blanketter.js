import Image from "next/image"
import Link from "next/link"
import headerImg from "./../public/img/headers/info.jpg"
import { FiDownload } from "react-icons/fi"

export default function Forms() {

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-screen h-80">
                <Image className="object-cover" src={headerImg} fill></Image>
            </div>
            <div className="container p-8">
                <p className="text-4xl font-semibold mb-4">Blanketter</p>
                <div className="lg:grid lg:grid-cols-[1.5fr,1fr] gap-8">
                    <div className="flex flex-col gap-4">
                        <p>
                            Här hittar ni blanketter för att ansöka om autogiro eller andrahandsuthyrning. <br />
                            Ni kan skicka ifyllda blanketter via e-post eller brev.
                        </p>
                        <p><span className="font-semibold"> E-post: </span><Link className="text-link-darker underline" href="mailto:info@birkabo.se">info@birkabo.se</Link></p>

                        <p className="font-semibold">Postadress:</p>
                        <p>Birkabo Förvaltning <br /> Birkagatan 55A <br /> 416 56 Göteborg</p>
                    </div>

                    <div className="mt-8 lg:m-0">
                        <button className="bg-birkabo p-4 rounded-xl text-xl font-semibold mb-4 flex flex-row gap-4 items-center">Autogiro <FiDownload /></button>
                        <button className="bg-birkabo p-4 rounded-xl text-xl font-semibold mb-4 flex flex-row gap-4 items-center">Andrahandsuthyrning <FiDownload /></button>
                    </div>
                </div >
            </div >
        </div >
    )
}
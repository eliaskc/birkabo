import Image from 'next/image';
import Link from 'next/link';
import headerImg from './../public/img/headers/info.jpg';
import { FiDownload } from 'react-icons/fi';

export default function Forms() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative h-80 w-screen">
                <Image className="object-cover" src={headerImg} fill></Image>
            </div>
            <div className="container p-8">
                <p className="mb-4 text-4xl font-semibold">Blanketter</p>
                <div className="gap-8 lg:grid lg:grid-cols-[1.5fr,1fr]">
                    <div className="flex flex-col gap-4">
                        <p>
                            Här hittar ni blanketter för att ansöka om autogiro
                            eller andrahandsuthyrning. <br />
                            Ni kan skicka ifyllda blanketter via e-post eller
                            brev.
                        </p>
                        <p>
                            <span className="font-semibold"> E-post: </span>
                            <Link
                                className="text-link-darker underline"
                                href="mailto:info@birkabo.se"
                            >
                                info@birkabo.se
                            </Link>
                        </p>

                        <p className="font-semibold">Postadress:</p>
                        <p>
                            Birkabo Förvaltning <br /> Birkagatan 55A <br /> 416
                            56 Göteborg
                        </p>
                    </div>

                    <div className="mt-8 lg:m-0">
                        <button className="mb-4 flex w-full flex-row items-center justify-between gap-4 rounded-xl border-4 border-black bg-white/75 p-4 text-xl font-semibold lg:w-auto lg:duration-100 lg:hover:scale-105">
                            Autogiro <FiDownload />
                        </button>
                        <button className="mb-4 flex w-full flex-row items-center justify-between gap-4 rounded-xl border-4 border-black bg-white/75 p-4 text-xl font-semibold lg:w-auto lg:duration-100 lg:hover:scale-105">
                            Andrahandsuthyrning <FiDownload />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

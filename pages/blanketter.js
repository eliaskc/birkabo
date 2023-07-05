import Image from 'next/image';
import Link from 'next/link';
import headerImg from './../public/img/headers/info.jpg';
import { FiDownload } from 'react-icons/fi';

export default function Forms() {
    return (
        <div className="container flex flex-col items-center">
            <div className="relative h-80 w-screen 2xl:w-[calc(100%-4rem)] 2xl:h-[40rem]">
                <Image
                    className="object-cover 2xl:rounded-xl"
                    src={headerImg}
                    fill
                ></Image>
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
                                className="thin-animated-underline text-link-darker after:bg-link-darker"
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
                        <a
                            href="/blanketter/autogiro.pdf"
                            download="Ansökan av autogiro.pdf"
                        >
                            <div className="button mb-4 flex flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-fit">
                                Autogiro <FiDownload />
                            </div>
                        </a>
                        <a
                            href="/blanketter/andrahand_mall.pdf"
                            download="Mall för andrahandsuthyrning.pdf"
                        >
                            <div className="button mb-4 flex flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-fit">
                                Mall för andrahandsuthyrning <FiDownload />
                            </div>
                        </a>
                        <a
                            href="/blanketter/andrahand_avtal.pdf"
                            download="Avtal för andrahandsuthyrning.pdf"
                        >
                            <div className="button mb-4 flex flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-fit">
                                Avtal för andrahandsuthyrning <FiDownload />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import headerImg from './../public/img/headers/info.jpg';
import { FiDownload } from 'react-icons/fi';
import { useParallax } from 'react-scroll-parallax';

export default function Forms() {
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
                            <button className="button mb-4 flex w-full flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-auto">
                                Autogiro <FiDownload />
                            </button>
                        </a>
                        <a
                            href="/blanketter/andrahand_mall.pdf"
                            download="Mall för andrahandsuthyrning.pdf"
                        >
                            <button className="button mb-4 flex w-full flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-auto">
                                Mall för andrahandsuthyrning <FiDownload />
                            </button>
                        </a>
                        <a
                            href="/blanketter/andrahand_avtal.pdf"
                            download="Avtal för andrahandsuthyrning.pdf"
                        >
                            <button className="button mb-4 flex w-full flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-auto">
                                Avtal för andrahandsuthyrning <FiDownload />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

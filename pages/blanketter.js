import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import headerImg from "./../public/img/headers/info.jpg";
import { FiDownload } from "react-icons/fi";

export default function Forms() {
    return (
        <div className="container flex flex-col items-center px-8 2xl:py-8">
            <Head>
                <title>Blanketter</title>
            </Head>
            <div className="relative h-80 w-screen 2xl:h-[35rem] 2xl:w-full">
                <Image
                    className="object-cover 2xl:rounded-xl"
                    src={headerImg}
                    alt="Bild på Birkagatan 55"
                    fill
                ></Image>
            </div>
            <div className="w-full py-8">
                <h3 className="mb-4 text-4xl font-semibold">Blanketter</h3>
                <div className="gap-8 lg:grid lg:grid-cols-[1.5fr,20rem,20rem]">
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
                            <div className="button mb-4 flex h-20 flex-row items-center justify-between gap-4 p-4 text-xl font-semibold ">
                                Ansökan om autogiro <FiDownload />
                            </div>
                        </a>
                        <a
                            href="/blanketter/andrahand_mall.pdf"
                            download="Mall för andrahandsuthyrning.pdf"
                            className="w-full"
                        >
                            <div className="button mb-4 flex h-20 flex-row items-center justify-between gap-4 p-4 text-xl font-semibold ">
                                Ansökan om andrahandsuthyrning <FiDownload />
                            </div>
                        </a>
                        <a
                            href="/blanketter/andrahand_avtal.pdf"
                            download="Avtal för andrahandsuthyrning.pdf"
                            className="w-full"
                        >
                            <div className="button mb-4 flex h-20 flex-row items-center justify-between gap-4 p-4 text-xl font-semibold ">
                                Avtal för andrahandsuthyrning <FiDownload />
                            </div>
                        </a>
                    </div>

                    <div>
                        <a
                            href="/blanketter/valkommen_som_hyresgast.pdf"
                            download="Välkommen som hyresgäst.pdf"
                            className="w-full"
                        >
                            <div className="button mb-4 flex h-20 flex-row items-center justify-between gap-4 p-4 text-xl font-semibold ">
                                Välkommen som hyresgäst <FiDownload />
                            </div>
                        </a>
                        <a
                            href="/blanketter/tips_infor_flytten.pdf"
                            download="Tips inför flytten.pdf"
                            className="w-full"
                        >
                            <div className="button mb-4 flex h-20 flex-row items-center justify-between gap-4 p-4 text-xl font-semibold ">
                                Tips inför flytten <FiDownload />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

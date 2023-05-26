import Image from 'next/image';
import Link from 'next/link';
import headerImg from './../public/img/headers/info.jpg';
import { FiDownload } from 'react-icons/fi';

const handleDownload = (filepath, filename) => {
    if (typeof window !== 'undefined') {
        // Create a dummy element
        const link = window.document.createElement('a');
        link.href = filepath; // Replace with the actual file URL
        link.setAttribute('download', filename); // Replace with the desired file name and extension
        window.document.body.appendChild(link);

        // Simulate a click on the link
        link.click();

        // Clean up
        window.document.body.removeChild(link);
    }
};

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
                        <button
                            className="button mb-4 flex w-full flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-auto"
                            onClick={() =>
                                handleDownload(
                                    '/blanketter/autogiro.pdf',
                                    'Ansökan av autogiro.pdf'
                                )
                            }
                        >
                            Autogiro <FiDownload />
                        </button>
                        <button
                            className="button mb-4 flex w-full flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-auto"
                            onClick={() =>
                                handleDownload(
                                    '/blanketter/andrahand_mall.pdf',
                                    'Mall för andrahandsuthyrning.pdf'
                                )
                            }
                        >
                            Mall för andrahandsuthyrning <FiDownload />
                        </button>
                        <button
                            className="button mb-4 flex w-full flex-row items-center justify-between gap-4 p-4 text-xl font-semibold lg:w-auto"
                            onClick={() =>
                                handleDownload(
                                    '/blanketter/andrahand_avtal.pdf',
                                    'Avtal för andrahandsuthyrning.pdf'
                                )
                            }
                        >
                            Avtal för andrahandsuthyrning <FiDownload />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

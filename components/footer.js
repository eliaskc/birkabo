import Link from "next/link";

export default function Footer() {
    var mapUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.7151654728164!2d12.020634615910245!3d57.70430888112006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff38b78c4bd83%3A0x749445e38ca99e08!2sBirkagatan%2055%2C%20416%2056%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1626706289688!5m2!1ssv!2sse";
    const links = [
        { href: "/", label: "Hem" },
        { href: "/fastigheter.html", label: "Våra fastigheter" },
        { href: "/ansokan.html", label: "Ansökan" },
        { href: "/blanketter.html", label: "Blanketter" },
        { href: "/kontakt.html", label: "Kontakta oss" },
        { href: "/om.html", label: "Om Birkabo" },
    ];

    return (
        <footer className="flex w-full flex-grow justify-center bg-cyan-900 text-white">
            <div className="container grid grid-cols-1 gap-y-8 p-8 pb-16 lg:grid-cols-[1.25fr,1.25fr,2fr]">
                <div className="flex flex-col items-start">
                    <h1 className="mb-4 text-2xl font-bold">Meny</h1>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            className="animated-underline my-2 text-lg font-medium text-link after:bg-link"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col items-start">
                    <h1 className="mb-4 text-2xl font-bold">Kontakt</h1>

                    <Link
                        className="animated-underline my-2 text-lg font-medium text-link after:bg-link"
                        href="tel:0706566726"
                    >
                        0706 - 56 67 26
                    </Link>
                    <Link
                        className="animated-underline my-2 text-lg font-medium text-link after:bg-link"
                        href="mailto:info@birkabo.se"
                    >
                        info@birkabo.se
                    </Link>

                    <p className="mt-4 text-lg font-medium">Birkagatan 55A</p>
                    <p className="text-lg font-medium">416 56 Göteborg</p>
                </div>

                <iframe
                    className="aspect-[4/3] w-full rounded-lg"
                    src={mapUrl}
                    allowFullScreen=""
                    loading="lazy"
                    title="Karta som visar plats för Birkabos kontor"
                ></iframe>
            </div>
        </footer>
    );
}

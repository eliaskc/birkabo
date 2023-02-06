import Link from "next/link"

export default function Footer() {
    var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.7151654728164!2d12.020634615910245!3d57.70430888112006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff38b78c4bd83%3A0x749445e38ca99e08!2sBirkagatan%2055%2C%20416%2056%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1626706289688!5m2!1ssv!2sse"
    const links = [
        { href: '/', label: 'Hem' },
        { href: '/fastigheter', label: 'Våra fastigheter' },
        { href: '/ansokan', label: 'Ansökan' },
        { href: '/blanketter', label: 'Blanketter' },
        { href: '/kontakt', label: 'Kontakta oss' },
        { href: '/om', label: 'Om Birkabo' },
    ]

    return (
        <footer className="flex justify-center w-full bg-slate-700">
            <div className="container grid grid-cols-1 gap-y-8 p-8 pb-16 bg-slate-700 text-white lg:grid-cols-[1.25fr,1.25fr,2fr] lg:px-0">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold mb-4">Meny</h1>
                    {links.map((link) => (
                        <Link key={link.href} className='text-lg my-1 font-medium text-link underline' href={link.href}>{link.label}</Link>
                    ))}
                </div>

                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold mb-4">Kontakt</h1>

                    <Link className="text-lg my-1 font-medium text-link underline" href="tel:0706566726">0706 - 56 67 26</Link>
                    <Link className="text-lg my-1 font-medium text-link underline" href="mailto:info@birkabo.se">info@birkabo.se</Link>

                    <p className="text-lg mt-4 font-medium">Birkagatan 55A</p>
                    <p className="text-lg font-medium">416 56 Göteborg</p>
                </div>

                <iframe className="w-full rounded-lg lg:h-full" src={mapUrl} width="300" height="225" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </footer >
    )
}
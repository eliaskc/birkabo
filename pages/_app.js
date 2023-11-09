import '../styles/globals.scss';
import Head from 'next/head';
import { Inter } from 'next/font/google';

import Footer from '../components/footer';
import Header from '../components/header';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const productJsonLd = {
    __html: `{
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Birkabo Förvaltning",
        "image": "https://birkabo.se/_next/static/media/birkabo_logo_no_bg.1bdbf164.png",
        "telephone": "0706 - 56 67 26",
        "email": "info@birkabo.se",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Birkagatan 55A",
            "addressLocality": "Göteborg",
            "postalCode": "416 56"
        }
    }`,
};
function MyApp({ Component, pageProps }) {
    return (
        <div
            className={`${inter.variable} flex min-h-screen flex-col bg-gradient-to-br from-birkabo via-birkabo/[.15] font-body`}
        >
            <Head>
                <title>Birkabo Förvaltning</title>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={productJsonLd}
                    key="product-jsonld"
                />
                <meta
                    name="description"
                    content="Birkabo Förvaltning är ett familjedrivet fastighetsbolag som förvaltar hyresrätter i Göteborg."
                />
                <meta name="viewport" content="width=device-width" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="48x48"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="48x48"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="48x48"
                    href="/favicon-48x48.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </Head>
            <Header />
            <div className="h-24 lg:h-20"></div> {/* Dummy spacer for header */}
            <main className="z-1 flex min-h-[calc(100vh-6rem)] w-full justify-center lg:min-h-[calc(100vh-5rem)]">
                <Component {...pageProps} />
            </main>
            <Footer></Footer>
        </div>
    );
}

export default MyApp;

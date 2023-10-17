import '../styles/globals.scss';
import Head from 'next/head';
import { Inter } from 'next/font/google';

import Footer from '../components/footer';
import Header from '../components/header';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

function MyApp({ Component, pageProps }) {
    return (
        <div
            className={`${inter.variable} flex min-h-screen flex-col bg-gradient-to-br from-birkabo via-birkabo/[.15] font-body`}
        >
            <Head>
                <title>Birkabo Förvaltning</title>
                <meta
                    name="description"
                    content="Hemsida för Birkabo Förvaltning"
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

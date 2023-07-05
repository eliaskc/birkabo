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
            className={`${inter.variable} bg-gradient-to-br from-birkabo via-birkabo/[.15] font-body`}
        >
            <Head>
                <title>Birkabo Förvaltning</title>
                <meta
                    name="description"
                    content="Hemsida för Birkabo Förvaltning"
                />
                <meta name="viewport" content="width=device-width" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </Head>
            <Header />
            <div className="h-20"></div> {/* Dummy spacer for header */}
            <main className="z-1 flex min-h-[calc(100vh-5rem)] w-full justify-center">
                <Component {...pageProps} />
            </main>
            <Footer></Footer>
        </div>
    );
}

export default MyApp;

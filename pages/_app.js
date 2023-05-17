import '../styles/globals.sass';
import Head from 'next/head';

import Footer from '../components/footer';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
    return (
        <div
            className=" font-['Work_Sans'] contrast-125"
            style={{
                background:
                    'linear-gradient(125deg, rgba(150,209,255,1), rgba(150,209,255,0.15), rgba(255,255,255,0)), url(/grain.svg) !important',
            }}
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
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&family=Work+Sans:wght@100..900&family=Lobster&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <div className="h-20"></div> {/* Dummy spacer for header */}
            <main className="z-1 flex min-h-screen w-full justify-center pb-16">
                <Component {...pageProps} />
            </main>
            <Footer></Footer>
        </div>
    );
}

export default MyApp;

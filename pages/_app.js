import '../styles/globals.sass';
import Head from 'next/head';

import Footer from '../components/footer';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-gradient-to-br from-birkabo via-birkabo/[.15] font-['Work_Sans']">
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

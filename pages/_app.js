import '../styles/globals.sass';
import Head from 'next/head';
import { Inter, Work_Sans } from 'next/font/google';

import Footer from '../components/footer';
import Header from '../components/header';
import { ParallaxProvider } from 'react-scroll-parallax';

const inter = Inter({ subsets: ['latin'] });
const workSans = Work_Sans({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <div className="--font-workSans bg-gradient-to-br from-birkabo via-birkabo/[.15]">
                <Head>
                    <title>Birkabo Förvaltning</title>
                    <meta
                        name="description"
                        content="Hemsida för Birkabo Förvaltning"
                    />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                </Head>
                <Header />
                <div className="h-20"></div> {/* Dummy spacer for header */}
                <main className="z-1 flex min-h-screen w-full justify-center pb-16">
                    <Component {...pageProps} />
                </main>
                <Footer></Footer>
            </div>
        </ParallaxProvider>
    );
}

export default MyApp;

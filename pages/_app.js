import '../styles/globals.sass'
import Head from 'next/head'

import Footer from "../components/footer"
import Header from "../components/header"

function MyApp({ Component, pageProps }) {

  return (
    <div className='bg-gradient-to-br from-birkabo via-transparent'>
      {/* <div className='bg-stone-100'> */}
      <Head>
        <title>Birkabo Förvaltning</title>
        <meta name="description" content="Hemsida för Birkabo Förvaltning" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='z-1 w-full min-h-screen flex justify-center pb-16'>
        <Component {...pageProps} />
      </main>

      <Footer></Footer>
    </div >
  )
}

export default MyApp

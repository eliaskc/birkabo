import '../styles/globals.sass'
import Head from 'next/head'

import Footer from "../components/footer"
import Header from "../components/header"

function MyApp({ Component, pageProps }) {

  return (
    <div className='bg-stone-100'>
      <Head>
        <title>Birkabo Förvaltning</title>
        <meta name="description" content="Hemsida för Birkabo Förvaltning" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main>
        <Component {...pageProps} />
      </main>

      <Footer></Footer>
    </div >
  )
}

export default MyApp

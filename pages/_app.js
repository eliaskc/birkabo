import '../styles/globals.sass'
import Head from 'next/head'

import Footer from "../components/footer"
import Header from "../components/header"

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Birkabo Förvaltning</title>
        <meta name="description" content="Hemsida för Birkabo Förvaltning" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone" />
      </Head>

      <Header></Header>

      <main className='bg-stone-100'>
        <Component {...pageProps} />
      </main>

      <Footer></Footer>
    </div >
  )
}

export default MyApp

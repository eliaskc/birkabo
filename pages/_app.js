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
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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

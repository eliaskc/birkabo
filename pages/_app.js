import '../styles/globals.sass'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/birkabo_logo.svg'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Birkabo Förvaltning</title>
        <meta name="description" content="Hemsida för Birkabo Förvaltning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Image src={logo} width="150px" height="75px"/>
        <h3>Meny</h3>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default MyApp

import '../styles/globals.sass'
import Head from 'next/head'
import Image from 'next/Image'
import Link from 'next/Link'
import logo from '../public/birkabo_logo.svg'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Birkabo Förvaltning</title>
        <meta name="description" content="Hemsida för Birkabo Förvaltning" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <header>
        <Link href="/">
          <Image src={logo} width="150px" height="75px" />
        </Link>
        <span class="material-icons md-36">menu</span>
        {/* <div className="menuButton">
          <h4 style={{margin: "0 1rem 0 0"}}>Meny</h4>
          <span class="material-icons md-36">menu</span>
        </div> */}
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>

      </footer>
    </div >
  )
}

export default MyApp

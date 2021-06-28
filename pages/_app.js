import '../styles/globals.sass'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Drawer } from '@material-ui/core'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Birkabo Förvaltning</title>
        <meta name="description" content="Hemsida för Birkabo Förvaltning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* <Image>Birkabo logga</Image> */}
        <Drawer anchor={'right'} open={false}>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
        </Drawer>
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

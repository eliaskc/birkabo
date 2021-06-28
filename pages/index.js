import styles from '../styles/Home.module.sass'
import Image from 'next/image'
import { Button } from '@material-ui/core'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src="/" layout="fill"></Image>
      <h1>Välkommen till Birkabo Förvaltning!</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo tempora libero et dolorum voluptatum
        ab eaque itaque animi dicta, enim sequi at iste! Saepe sint explicabo excepturi tempora magnam.</p>

      <div className={styles.buttonLinks}>
        <Button color="primary" variant="contained">Våra Fastigheter</Button>
        <Button color="primary" variant="contained">Hyregästinfo</Button>
        <Button color="primary" variant="contained">Kontakta oss</Button>
        <Button color="primary" variant="contained">Om Birkabo</Button>
      </div>
    </div>
  )
}

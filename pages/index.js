import styles from '../styles/modules/Hem.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'

import welcomeImg from '../public/img/Birkagatan/20190521-IMG_9001.jpg'
import welcomeImgMobile from '../public/img/Birkagatan/20190521-IMG_9013.jpg'

export default function Hem() {

  return (
    <div className={styles.container}>
      <div className={styles.welcomeImg}>
        <Image src={welcomeImgMobile} alt="Bild av uteplats på Birkagatan 55" /* width={1200} height={600} */ layout="fill" objectFit="cover"></Image>
      </div>

      <div className={styles.textContainer}>
        <h1 className="large">Välkommen till</h1>
        <h1 className="xxlarge">Birkabo Förvaltning</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo tempora libero et dolorum voluptatum
          ab eaque itaque animi dicta. </p>
      </div>


      <div className={styles.buttonContainer}>
        <Link href="/fastigheter">
          <Button variant="homeScreenButton">Våra fastigheter</Button>
        </Link>
        <Link href="/info">
          <Button variant="homeScreenButton">Hyregästinformation</Button>
        </Link>
        <Link href="/kontakt">
          <Button variant="homeScreenButton">Kontakta oss</Button>
        </Link>
        <Link href="/om">
          <Button variant="homeScreenButton">Om Birkabo</Button>
        </Link>
      </div>
    </div>
  )
}

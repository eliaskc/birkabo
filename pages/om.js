import styles from "../styles/modules/Om.module.sass"
import Image from 'next/image'

import headerImg from "./../public/img/headers/info.jpg"

export default function Om() {

    return (
        <div className={styles.container}>
            <div className={styles.headerImg}>
                <Image src={headerImg} layout="fill" objectFit="cover"></Image>
            </div>
            <div className={styles.textContainer}>
                <div>
                    <h1 className="xlarge">Om Birkabo</h1>
                </div>
                <div>
                    <h2>Historia</h2>
                    <p>Birkabo Förvaltning grundades 1995 av Bertil Kjellberg och sedan dess har fastigheterna fortsatt
                        förvaltats av familjen Kjellberg.</p>
                    <p>Idag är det Johannes Kjellberg Carlson & Peter Carlson som ....</p>
                </div>

                <div>
                    <h2>Ytterligare stycke?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo tempora libero et dolorum voluptatum
                        ab eaque itaque animi dicta. </p>
                </div>
            </div>
        </div>
    )
}
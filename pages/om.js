import styles from "../styles/modules/Om.module.sass"

export default function Om() {
    return (
        <div className={styles.container}>
            <div>
                <h1 class="xlarge">Om Birkabo</h1>
            </div>
            <div>
                <h1>Historia</h1>
                <p>Birkabo Förvaltning grundades 1995 av Bertil Kjellberg och sedan dess har fastigheterna fortsatt
                    förvaltats av familjen Kjellberg.</p>
                <p>Idag är det Johannes Kjellberg Carlson & Peter Carlson som ....</p>
            </div>

            <div>
                <h1>Ytterligare stycke?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo tempora libero et dolorum voluptatum
                    ab eaque itaque animi dicta. </p>
            </div>
        </div>
    )
}
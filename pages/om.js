import styles from "../styles/modules/Om.module.sass"

export default function Om() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Om Birkabo</h1>
            </div>
            <div>
                <h4>Historia</h4>
                <p>Birkabo Förvaltning grundades 1995 av Bertil Kjellberg och sedan dess har fastigheterna fortsatt
                    förvaltats av familjen Kjellberg.</p>
                <p>Idag är det Johannes Kjellberg Carlson & Peter Carlson som ....</p>
            </div>

            <div>
                <h4>Ytterligare stycke?</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo tempora libero et dolorum voluptatum
                    ab eaque itaque animi dicta. </p>
            </div>
        </div>
    )
}
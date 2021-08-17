import Image from 'next/image'
import styles from '../styles/modules/components/EmblaCarousel.module.sass'

export const Thumb = ({ selected, onClick, imgSrc }) => (
    <div
        className={selected ? styles["embla__slide"] + " " + styles["embla__slide--thumb"] + " " + styles["is-selected"] :  styles["embla__slide"] + " " + styles["embla__slide--thumb"]}
    >
        <button
            onClick={onClick}
            className={styles["embla__slide__inner"] + " " + styles["embla__slide__inner--thumb"]}
            type="button"
        >
            <Image className={styles["embla__slide__thumbnail"]} layout="fill" objectFit="cover" src={imgSrc} alt="" />
        </button>
    </div>
);

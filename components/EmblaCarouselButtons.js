import styles from '../styles/modules/components/EmblaCarouselButtons.module.sass'

export const PrevButton = ({ enabled, onClick }) => (
    <span onClick={onClick}
        className={styles.embla__button + " material-icons-round"}
        style={!enabled ? { display: "none", left: 0, } : { left: 0, }}>
        navigate_before
    </span>
);

export const NextButton = ({ enabled, onClick }) => (
    <span onClick={onClick}
        disabled={!enabled}
        className={styles.embla__button + " material-icons-round"}
        style={!enabled ? { display: "none", right: 0, } : { right: 0, }}>
        navigate_next
    </span>
);

export const DotButton = ({ selected, onClick }) => (
    <button
        className={selected ? styles["embla__dot"] + " " + styles["is-selected"] : styles.embla__dot}
        type="button"
        onClick={onClick}
    />
);
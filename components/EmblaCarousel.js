import { useEmblaCarousel } from 'embla-carousel/react'
import styles from '../styles/modules/components/EmblaCarousel.module.sass'
import Image from 'next/image';
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import { Thumb } from './EmblaCarouselThumb'
import { useState, useEffect, useCallback } from "react";


export default function EmblaCarousel(props) {
  const [mainViewportRef, embla] = useEmblaCarousel({
    loop: "true"
  });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    loop: "true"
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={styles.container}>
      <div className={styles.embla} >
        <div className={styles.embla__viewport} ref={mainViewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <Image className={styles.embla__slide__inner_img} src={props.galleryPath + '/' + (index + 1) + '.jpg'} layout="fill" objectFit="cover"></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className={styles["embla"] + " " + styles["embla--thumb"]}>
        <div className={styles["embla__viewport"] + " " + styles["embla__viewport--thumb"]} ref={thumbViewportRef}>
          <div className={styles["embla__container"] + " " + styles["embla__container--thumb"]}>
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={props.galleryPath + '/' + (index + 1) + '.jpg'}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
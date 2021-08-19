import { useEmblaCarousel } from 'embla-carousel/react'
import styles from '../styles/modules/components/EmblaCarousel.module.sass'
import Image from 'next/image';
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import { Thumb } from './EmblaCarouselThumb'
import { useState, useEffect, useCallback } from "react";
import { mediaByIndexVR, mediaVR } from '../public/img/VR_gallery/indexVR'
import { mediaByIndexB51, mediaB51 } from '../public/img/B51_gallery/indexB51'
import { mediaByIndexB55, mediaB55 } from '../public/img/B55_gallery/indexB55'



export default function EmblaCarousel(props) {
  let media = [];
  let mediaByIndex;
  let slides;

  if (!props.estateShort) {
    return
  } else if (props.estateShort === "VR") {
    media = mediaVR;
    mediaByIndex = mediaByIndexVR;
  } else if (props.estateShort === "B51") {
    media = mediaB51;
    mediaByIndex = mediaByIndexB51;
  } else if (props.estateShort === "B55") {
    media = mediaB55;
    mediaByIndex = mediaByIndexB55;
  }

  slides = Array.from(Array(media.length).keys());

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
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    // emblaThumbs.scrollTo(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={styles.container}>
      <div className={styles.embla} >
        <div className={styles.embla__viewport} ref={mainViewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index} style={ mediaByIndex(index).height > mediaByIndex(index).width ? { "min-width": "50%" } : { "min-width": "100%" }}>
                <div className={styles.embla__slide__inner}>
                  {/* <Image className={styles.embla__slide__inner_img} src={props.galleryPath + '/' + (index + 1) + '.jpg'} layout="fill" objectFit="cover"></Image> */}
                  <Image className={styles.embla__slide__inner_img} src={mediaByIndex(index)} layout="fill" objectFit="cover"></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* <div className={styles["embla"] + " " + styles["embla--thumb"]}>
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
      </div> */}
    </div>
  )
}
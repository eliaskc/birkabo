import styles from "../styles/modules/components/Fastighet.module.sass"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Fastighet(props) {
    var galleryPath = "/img/" + props.estateShort + "_gallery"

    return (
        <div className="container lg:grid lg:grid-cols-[2fr,1.5fr] lg:grid-rows-[2rem,auto] lg:gap-x-16 lg:m-16 lg:mt-8">
            <div className="flex gap-x-2 my-2 ml-2 lg:m-0">
                <Link href='/fastigheter'>
                    <span className="text-blue-500 lg:hover:underline">Våra fastigheter</span>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>
                <Link href={`/fastigheter/${props.estateShort}`}>
                    <span className="text-gray-500 cursor-not-allowed">{props.estateName}</span>
                </Link>
            </div>

            <div className="lg:col-start-1">
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <img className="rounded-xl" src={galleryPath + '/1.jpg'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={galleryPath + '/2.jpg'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={galleryPath + '/1.jpg'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={galleryPath + '/1.jpg'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={galleryPath + '/1.jpg'} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>
                <div>
                    <h1 className="text-4xl">{props.estateName}</h1>
                    <p>{props.estateDescription}</p>
                    <p><b>Byggnadsår: </b>{props.year}</p>
                    <p><b>Område: </b>{props.area}</p>
                </div>

                <iframe className={styles.embedMap} src={props.mapUrl} width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div >
    )
}
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Navigation, Pagination } from "swiper"
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { galleryVR } from '../public/img/VR_gallery/indexVR'
import { galleryB51 } from '../public/img/B51_gallery/indexB51'
import { galleryB55 } from '../public/img/B55_gallery/indexB55'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Fastighet(props) {
    var gallery;

    if (props.estateShort === "VR") {
        gallery = galleryVR;
    } else if (props.estateShort === "B51") {
        gallery = galleryB51;
    } else if (props.estateShort === "B55") {
        gallery = galleryB55;
    }

    return (
        <div className="container mb-16 lg:grid lg:grid-cols-[2fr,1.5fr] lg:gap-x-16 lg:m-16 lg:mt-8">
            <div className="lg:col-start-1">
                <div className="flex gap-x-2 ml-4 my-4 lg:m-0 lg:mb-8">
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

                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={20}
                    loop={true}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="bg-birkabo w-6 h-6 ' + className + '">' + "</span>";
                        },
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    style={{
                        '--swiper-pagination-bullet-inactive-opacity': '.4',
                    }}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="h-[67vw] lg:w-[750px] lg:h-[500px] lg:rounded-xl"
                >
                    {gallery.map((image, index) => (
                        <SwiperSlide key={index} className={(image.height > image.width ? 'w-[50vw] lg:w-[300px]' : '')}>
                            <Image fill={true} className='object-cover lg:rounded-xl' src={image} alt="" />
                        </SwiperSlide>
                    ))}

                    <FaChevronCircleLeft className="hidden lg:block text-birkabo swiper-button-prev w-10 h-10 after:content-[''] rounded-full stroke-2 text-bold" />
                    <FaChevronCircleRight className="hidden lg:block text-birkabo swiper-button-next w-10 h-10 after:content-[''] rounded-full stroke-2 text-bold" />
                </Swiper>
            </div>

            <div className="p-8 lg:p-0">
                <h1 className="text-4xl">{props.estateName}</h1>
                <div className="py-8">
                    <p>{props.estateDescription}</p>
                    <p><b>Byggnadsår: </b>{props.year}</p>
                    <p><b>Område: </b>{props.area}</p>
                </div>

                <iframe className="w-full h-[300px] lg:h-[400px]" src={props.mapUrl} style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div >
    )
}
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { galleryVR } from '../public/img/VR_gallery/indexVR';
import { galleryB51 } from '../public/img/B51_gallery/indexB51';
import { galleryB55 } from '../public/img/B55_gallery/indexB55';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Estate(props) {
    var gallery;

    if (props.estateShort === 'VR') {
        gallery = galleryVR;
    } else if (props.estateShort === 'B51') {
        gallery = galleryB51;
    } else if (props.estateShort === 'B55') {
        gallery = galleryB55;
    }

    return (
        <div className="container mb-16 lg:m-16 lg:mt-8 lg:grid lg:grid-cols-[2fr,1.5fr] lg:gap-x-16">
            <div className="lg:col-start-1">
                <div className="my-4 ml-4 flex gap-x-2 font-semibold lg:m-0 lg:mb-4 lg:text-lg">
                    <Link
                        href="/fastigheter"
                        className="animated-underline text-black"
                    >
                        Våra fastigheter
                    </Link>
                    /
                    <Link
                        href={`/fastigheter/${props.estateShort}`}
                        className="cursor-default text-gray-500"
                    >
                        {props.estateName}
                    </Link>
                </div>

                <Swiper
                    slidesPerView={'auto'}
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
                            return (
                                '<span class="bg-birkabo w-6 h-6 lg:hover:scale-125 lg:duration-300 ' +
                                className +
                                '">' +
                                '</span>'
                            );
                        },
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    style={{
                        '--swiper-pagination-bullet-inactive-opacity': '.4',
                    }}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="h-[67vw] lg:h-[500px] lg:w-[750px] lg:rounded-xl"
                >
                    {gallery.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className={
                                image.height > image.width
                                    ? 'w-[50vw] lg:w-[300px]'
                                    : ''
                            }
                        >
                            <Image
                                fill={true}
                                className="object-cover lg:rounded-xl"
                                src={image}
                                alt=""
                            />
                        </SwiperSlide>
                    ))}

                    {/* https://codepen.io/poopsplat/pen/EPaeEE */}
                    {/* https://codepen.io/chrysokitty/pen/eYoRWK */}
                    {/* https://codepen.io/nickryan/pen/wvdqEj */}
                    <FaChevronCircleLeft className="swiper-button-prev hidden h-10 w-10 rounded-full text-birkabo after:content-[''] lg:block lg:duration-300 lg:hover:scale-110" />
                    <FaChevronCircleRight className="swiper-button-next hidden h-10 w-10 rounded-full text-birkabo after:content-[''] lg:block lg:duration-300 lg:hover:-translate-x-1 lg:hover:scale-110" />
                </Swiper>
            </div>

            <div className="p-8 lg:p-0">
                <h1 className="text-4xl font-semibold">{props.estateName}</h1>
                <div className="py-8">{props.estateDescription}</div>

                <iframe
                    className="h-[300px] w-full rounded-xl lg:h-[400px]"
                    src={props.mapUrl}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

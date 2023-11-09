import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
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
        <div className="container mb-16 px-8 lg:mt-8">
            <Head>
                <title>{props.estateName}</title>
            </Head>
            <div className="my-4 flex gap-x-2 font-semibold lg:m-0 lg:mb-4 lg:text-lg">
                <Link
                    href="/fastigheter"
                    className="animated-underline text-black after:bg-black"
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
            <div className="lg:flex lg:gap-8">
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides
                    spaceBetween={20}
                    loop
                    grabCursor
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return (
                                '<span class="bg-birkabo rounded-lg w-6 h-6 hover:opacity-75 duration-300 ' +
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
                        '--swiper-pagination-bullet-inactive-opacity': '.6',
                    }}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="m-0 h-[67vw] overflow-hidden max-sm:-mx-8 max-sm:w-screen sm:rounded-xl lg:aspect-[3/2] lg:h-[32rem]"
                >
                    {gallery.map((image) => (
                        <SwiperSlide
                            key={image}
                            className={
                                image.height > image.width
                                    ? 'w-1/2 lg:h-full'
                                    : ''
                            }
                        >
                            <Image
                                fill={true}
                                className="object-cover lg:rounded-xl"
                                src={image}
                                alt={'Bild på ' + props.estateName}
                            />
                        </SwiperSlide>
                    ))}

                    <FaChevronCircleLeft className="swiper-button-prev hidden h-10 w-10 rounded-full border-2 border-white bg-white text-birkabo duration-300 hover:scale-110 lg:block" />
                    <FaChevronCircleRight className="swiper-button-next hidden h-10 w-10 rounded-full border-2 border-white bg-white text-birkabo duration-300 hover:scale-110 lg:block" />
                </Swiper>

                <div className="py-8 lg:p-0">
                    <h1 className="text-4xl font-semibold">
                        {props.estateName}
                    </h1>
                    <div className="py-8">{props.estateDescription}</div>
                </div>
            </div>

            <iframe
                title={'Karta som visar plats för ' + props.estateName}
                className="h-[20rem] w-full rounded-xl lg:h-[30rem] lg:pt-16"
                src={props.mapUrl}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

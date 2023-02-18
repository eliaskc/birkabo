import Image from 'next/image'
import headerImg from "./../public/img/headers/historia.jpg"

export default function About() {

    return (
        <div className='container pt-8 pb-16 grid grid-rows-[1fr,1.25fr] lg:grid-cols-[1.25fr,1fr] lg:grid-rows-1'>
            <div className='relative h-72 w-screen lg:w-full lg:h-full'>
                <Image src={headerImg} fill className='object-cover lg:rounded-2xl'></Image>
            </div>
            <div className='p-8 lg:py-0 justify-self-center'>
                <div>
                    <p className='text-4xl font-semibold mb-4'>Om Birkabo</p>
                    <p>Birkabo Förvaltning grundades 1995 av Bertil Kjellberg och sedan dess har fastigheterna fortsatt
                        förvaltats av familjen Kjellberg.</p>
                    <p>Idag är det Johannes Kjellberg Carlson & Peter Carlson som ....</p>
                </div>
            </div>

        </div>
    )
}
import Image from 'next/image'
import headerImg from "./../public/img/headers/historia.jpg"

export default function About() {

    return (
        <div className='grid grid-rows-[1fr,1.25fr] lg:grid-cols-[1.75fr,1fr] lg:grid-rows-1 2xl:container'>
        {/* <div className='grid grid-rows-[1fr,1.25fr] grid-cols-1'> */}
            {/* <div className='relative h-80 w-screen'> */}
            <div className='relative'>
                <Image src={headerImg} fill className='object-cover'></Image>
            </div>
            <div className='container p-8 justify-self-center'>
            {/* <div className='p-8'> */}
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
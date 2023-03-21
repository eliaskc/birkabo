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
                    <p>Birkabo Förvaltning är ett familjeföretag som grundades 1995 av Bertil Kjellberg. </p>
                    <p className='mt-2'>Sedan 2017 tillbaka drivs bolaget av Johannes Kjellberg Carlson & Peter Carlson.</p>
                </div>
            </div>

        </div>
    )
}
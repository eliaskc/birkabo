import Image from 'next/image'
import Link from 'next/link'

import welcomeImg from '../public/img/Birkagatan/20190521-IMG_9013.jpg'

export default function Hem() {

  return (
    <div className='container grid grid-cols-1 gap-y-8 mb-16 px-8 justify-items-center lg:gap-8 lg:grid-cols-4 lg:mt-8 lg:mb-32 lg:p-0 lg:grid-rows-[2.5fr,1fr] lg:max-h-[50rem]'>
      <div className='relative h-72 w-screen lg:w-full lg:h-full lg:col-start-3 lg:col-span-2'>
        <Image className='object-cover lg:rounded-2xl' src={welcomeImg} alt="Bild av uteplats på Birkagatan 55" fill={true}></Image>
      </div>

      <div className='self-center place-self-start lg:col-span-2 lg:col-start-1 lg:row-start-1'>
        <h1 className="text-4xl font-light m-0">Välkommen till</h1>
        <h1 className="text-5xl font-bold m-0">Birkabo Förvaltning</h1>
      </div>


      <Link href="/fastigheter" className='w-full'>
        <button type='button' className='text-xl break-all px-4 font-bold bg-emerald-200 w-full h-28 rounded-2xl lg:h-40 lg:row-start-2 hover:bg-emerald-200'>Våra fastigheter</button>
      </Link>
      <Link href="/ansokan" className='w-full'>
        <button type='button' className='text-xl break-all px-4 font-bold bg-emerald-200 w-full h-28 rounded-2xl lg:h-40 lg:row-start-2 hover:bg-emerald-200'>Ansökan</button>
      </Link>
      <Link href="/blanketter" className='w-full'>
        <button type='button' className='text-xl break-all px-4 font-bold bg-emerald-200 w-full h-28 rounded-2xl lg:h-40 lg:row-start-2 hover:bg-emerald-200'>Blanketter</button>
      </Link>
      <Link href="/kontakt" className='w-full'>
        <button type='button' className='text-xl break-all px-4 font-bold bg-emerald-200 w-full h-28 rounded-2xl lg:h-40 lg:row-start-2 hover:bg-emerald-200'>Kontakta oss</button>
      </Link>
    </div>
  )
}

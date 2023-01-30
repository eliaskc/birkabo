import Image from 'next/image'
import Link from 'next/link'

import welcomeImgAlt from '../public/img/Birkagatan/20190521-IMG_9001.jpg'
import welcomeImg from '../public/img/Birkagatan/20190521-IMG_9013.jpg'

export default function Hem() {

  return (
    <div className='container grid grid-cols-1 gap-y-8 justify-items-center px-8 mb-16 lg:grid-cols-4 lg:gap-16 lg:m-16 lg:grid-rows-[2fr,1fr]'>
      <div className='relative h-72 w-screen lg:w-full lg:h-full lg:col-start-3 lg:col-span-2'>
        <Image className='lg:rounded-lg' src={welcomeImg} alt="Bild av uteplats på Birkagatan 55" layout="fill" objectFit="cover"></Image>
      </div>

      <div className='self-center place-self-start lg:col-span-2 lg:col-start-1 lg:row-start-1'>
        <h1 className="text-4xl font-light m-0">Välkommen till</h1>
        <h1 className="text-5xl font-bold m-0">Birkabo Förvaltning</h1>
      </div>


      <Link href="/fastigheter" className='w-full'>
        <button type='button' className='text-xl font-bold bg-emerald-300 w-full h-28 rounded-lg lg:h-44 lg:row-start-2 hover:bg-emerald-200'>Våra fastigheter</button>
      </Link>
      <Link href="/info" className='w-full'>
        <button type='button' className='text-xl font-bold bg-emerald-300 w-full h-28 rounded-lg lg:h-44 lg:row-start-2 hover:bg-emerald-200'>Hyresgästinformation</button>
      </Link>
      <Link href="/kontakt" className='w-full'>
        <button type='button' className='text-xl font-bold bg-emerald-300 w-full h-28 rounded-lg lg:h-44 lg:row-start-2 hover:bg-emerald-200'>Kontakta oss</button>
      </Link>
      <Link href="/om" className='w-full'>
        <button type='button' className='text-xl font-bold bg-emerald-300 w-full h-28 rounded-lg lg:h-44 lg:row-start-2 hover:bg-emerald-200'>Om Birkabo</button>
      </Link>
    </div>
  )
}

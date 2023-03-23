import Image from 'next/image'
import Link from 'next/link'

import welcomeImg from '../public/img/Birkagatan/20190521-IMG_9013.jpg'

export default function Hem() {

  const links = [
    { href: '/fastigheter', label: 'Våra fastigheter' },
    { href: '/ansokan', label: 'Ansökan' },
    { href: '/blanketter', label: 'Blanketter' },
    { href: '/kontakt', label: 'Kontakta oss' },
  ]

  return (
    <div className='container grid grid-cols-1 gap-y-8 mb-16 px-8 justify-items-center lg:gap-8 lg:gap-y-16 lg:grid-cols-4 lg:mb-16 lg:p-0 lg:py-8 lg:grid-rows-[2.5fr,1fr]'>
      <div className='relative h-72 w-screen lg:w-full lg:h-full lg:col-start-3 lg:col-span-2'>
        <Image className='object-cover lg:rounded-2xl' src={welcomeImg} alt="Bild av uteplats på Birkagatan 55" fill></Image>
      </div>

      <div className='self-center place-self-start lg:col-span-2 lg:col-start-1 lg:row-start-1'>
        <h1 className="text-4xl font-light m-0">Välkommen till</h1>
        <h1 className="text-5xl font-bold m-0">Birkabo Förvaltning</h1>
      </div>

      {links.map((link) => (
        <Link key={link.href} href={link.href} className='w-full'>
          <button type='button' className='border-4 border-black shadow-lg text-xl break-all px-4 font-bold w-full h-20 rounded-2xl lg:border-8 lg:h-40 lg:row-start-2 lg:hover:underline'>{link.label}</button>
        </Link>
      ))}

    </div>
  )
}

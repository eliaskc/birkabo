import Image from 'next/image';
import headerImg from './../public/img/headers/historia.jpg';

export default function About() {
    return (
        <div className="container grid grid-rows-[1fr,1.25fr] pt-8 pb-16 lg:grid-cols-[1.25fr,1fr] lg:grid-rows-1">
            <div className="relative h-72 w-screen lg:h-full lg:w-full">
                <Image
                    src={headerImg}
                    fill
                    className="object-cover lg:rounded-2xl lg:border-4 lg:border-black"
                ></Image>
            </div>
            <div className="justify-self-center p-8 lg:py-0">
                <div>
                    <p className="mb-4 text-4xl font-semibold">Om Birkabo</p>
                    <p>
                        Birkabo Förvaltning är ett familjeföretag som grundades
                        1995 av Bertil Kjellberg.{' '}
                    </p>
                    <p className="mt-2">
                        Sedan 2017 tillbaka drivs bolaget av Johannes Kjellberg
                        Carlson & Peter Carlson.
                    </p>
                </div>
            </div>
        </div>
    );
}

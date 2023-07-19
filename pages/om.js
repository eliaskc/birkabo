import Image from 'next/image';
import headerImg from './../public/img/headers/historia.jpg';

export default function About() {
    return (
        <div className="container flex flex-col gap-8 pt-8 pb-16 max-lg:items-center lg:flex-row">
            <div className="w-screen lg:left-8 lg:w-4/6">
                <Image src={headerImg} className="lg:rounded-2xl"></Image>
            </div>
            <div className="px-8">
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

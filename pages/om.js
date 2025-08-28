import Image from "next/image";
import Head from "next/head";
import headerImg from "./../public/img/headers/historia.jpg";

export default function About() {
    return (
        <div className="container flex flex-col gap-8 p-8 pb-16 max-lg:items-center lg:flex-row">
            <Head>
                <title>Om Birkabo</title>
            </Head>
            <div className="w-screen lg:left-8 lg:w-4/6">
                <Image
                    src={headerImg}
                    className="lg:rounded-2xl"
                    alt="Historisk bild på Viktor Rydbergsgatan 30"
                ></Image>
            </div>
            <div className="px-8">
                <div>
                    <h2 className="mb-4 text-4xl font-semibold">Om Birkabo</h2>
                    <p>
                        Birkabo Förvaltning är ett familjeföretag som grundades
                        1995 av Bertil Kjellberg.{" "}
                    </p>
                    <p className="mt-2">
                        Sedan 2017 drivs bolaget av Johannes Kjellberg Carlson &
                        Peter Carlson.
                    </p>
                </div>
            </div>
        </div>
    );
}

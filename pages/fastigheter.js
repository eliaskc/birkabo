import Head from "next/head";
import EstateCard from "../components/estateCard";

export default function Estates() {
    return (
        <div className="w-screen lg:container">
            <Head>
                <title>Våra Fastigheter</title>
            </Head>
            <div className="grid h-full grid-cols-1 grid-rows-3 justify-items-center gap-8 p-8 lg:max-2xl:grid-cols-3 lg:max-2xl:grid-rows-1">
                <EstateCard
                    estateShort="VR"
                    estateName="Viktor Rydbergsgatan 30"
                ></EstateCard>
                <EstateCard
                    estateShort="B51"
                    estateName="Birkagatan 51"
                ></EstateCard>
                <EstateCard
                    estateShort="B55"
                    estateName="Birkagatan 55"
                ></EstateCard>
            </div>
        </div>
    );
}

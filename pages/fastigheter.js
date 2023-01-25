import FastighetCard from "../components/fastighetCard"

export default function Fastigheter() {
    return (
        <div className='w-screen 2xl:container'>
            <div className='h-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 2xl:gap-x-16 2xl:items-center'>
                <FastighetCard estateShort="VR" estateName="Viktor Rydbergsgatan 30"></FastighetCard>
                <FastighetCard estateShort="B51" estateName="Birkagatan 51"></FastighetCard>
                <FastighetCard estateShort="B55" estateName="Birkagatan 55"></FastighetCard>
            </div>
        </div>
    )
}
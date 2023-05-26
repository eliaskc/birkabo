import EstateCard from '../components/estateCard';

export default function Estates() {
    return (
        <div className="w-screen 2xl:container">
            <div className="grid h-full grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 2xl:items-center 2xl:gap-x-16">
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

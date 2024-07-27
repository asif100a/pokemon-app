import PropTypes from "prop-types";
import Images from "./Images";

const DataCards = ({ data }) => {
    const images = Images();
    const [
        BULBASAUR, IVYSAUR, VENUSAUR, CHARMANDER, CHARMELEON, CHARIZARD, SQUIRTLE,
        WARTORTLE, BLASTOISE, CATERPIE, METAPOD, BUTTERFREE, WEEDLE, KAKUNA,
        BEEDRILL, PIDGEY, PIDGEOTTO, PIDGEOT, RATTATA, RATICATE
    ] = images;

    const imageMap = {
        BULBASAUR, IVYSAUR, VENUSAUR, CHARMANDER, CHARMELEON, CHARIZARD, SQUIRTLE,
        WARTORTLE, BLASTOISE, CATERPIE, METAPOD, BUTTERFREE, WEEDLE, KAKUNA,
        BEEDRILL, PIDGEY, PIDGEOTTO, PIDGEOT, RATTATA, RATICATE
    };

    console.log(BULBASAUR);

    return (
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data?.map((card, i) => (
                    <div key={i} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className="w-full h-64 rounded-lg shadow-md">
                            <img src={imageMap[card?.name.toUpperCase()]} alt="Pokemon image" className="w-fit mx-auto" />
                        </div>

                        <div className="w-40 -mt-10 overflow-hidden bg-white rounded-full dark:bg-gray-800 border-2 border-green-600">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{card?.name}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

DataCards.propTypes = {
    data: PropTypes.object
};

export default DataCards;
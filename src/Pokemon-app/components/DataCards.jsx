import PropTypes from "prop-types";

const DataCards = ({ data }) => {
    console.log(data);

    return (
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data?.map((card, i) => (
                    <div key={i} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                            <img src={card?.image} alt="Pokemon image" />
                        </div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
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
import { useEffect, useState } from "react";
import DataCards from "./components/DataCards";
import axios from "axios";
import SearchData from "./components/SearchData";

const PokemonApp = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/`);
            setPokemonData(data.results);
        };

        getData();
    }, []);

    return (
        <div>
            <SearchData />
            <DataCards data={pokemonData} />
        </div>
    );
};

export default PokemonApp;
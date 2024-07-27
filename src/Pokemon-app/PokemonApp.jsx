import { useEffect, useState } from "react";
import DataCards from "./components/DataCards";
import axios from "axios";
import SearchData from "./components/SearchData";

const PokemonApp = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearchText = (text) => {
        setSearchText(text);
    };
    console.log(searchText);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('https://pokeapi.co/api/v2/pokemon/');
            setPokemonData(data.results);
        };

        getData();
    }, [searchText]);

    const filteredData = pokemonData?.filter(data => (
        data?.name.toLowerCase().includes(searchText.toLowerCase()
        )
    ));

    return (
        <div>
            <SearchData handleSearchText={handleSearchText} />
            <DataCards data={filteredData} />
        </div>
    );
};

export default PokemonApp;
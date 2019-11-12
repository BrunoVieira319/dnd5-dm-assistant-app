import React, {useState, useEffect, createContext} from 'react'
import axios from "axios"

const CharactersContext = createContext({});

const CharactersProvider = component => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchCharacters = async() => {
            const response = await axios.get(`http://localhost:8000/characters`, {
                cancelToken: source.token});

            if (response.status === 200) {
                setCharacters(response.data)
            }
        };

        fetchCharacters();
        return () => source.cancel();
    }, []);

    return(
        <CharactersContext.Provider
            value={{characters}}
        >
            {component.children}
        </CharactersContext.Provider>
    )
};

export {CharactersContext, CharactersProvider}
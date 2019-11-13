import React, {useState, useEffect, createContext} from 'react'
import axios from "axios"

const CharactersContext = createContext({});

const CharactersProvider = component => {
    const [characters, setCharacters] = useState([]);
    const [hp, setHp] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/characters`)
            .then(response => setCharacters(response.data));
    }, []);

    const handleHp = e => setHp(e.target.value);

    const changeHp = id => {
        axios.put(`http://localhost:8000/characters/${id}/hp/${hp}`)
            .then(response => {
                let i = characters.findIndex(c => c.id === id);
                let charactersCopy = characters;
                charactersCopy[i] = response.data;
                setCharacters(charactersCopy);
                setHp("")
            });
    };

    return (
        <CharactersContext.Provider
            value={{
                characters,
                hp,
                handleHp,
                changeHp
            }}
        >
            {component.children}
        </CharactersContext.Provider>
    )
};

export {CharactersContext, CharactersProvider}
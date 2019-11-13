import React, {useState, createContext} from 'react'
import axios from "axios"

const CharacterFormContext = createContext({});

const CharacterFormProvider = component => {
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [hitPoints, setHitPoints] = useState("");
    const [race, setRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [image, setImage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleName = e => setName(e.target.value);
    const handleLevel = e => setLevel(e.target.value);
    const handleHitPoints = e => setHitPoints(e.target.value);
    const handleRace = e => setRace(e.target.value);
    const handleCharacterClass = e => setCharacterClass(e.target.value);
    const handleImage = e => setImage(e.target.value);

    const saveCharacter = () => {
        const character = {
            character_name: name,
            level: parseInt(level),
            max_hp: parseInt(hitPoints),
            race,
            character_class: characterClass,
            image
        };
        axios.post(`http://localhost:8000/characters`, character)
            .then(response => {
                if (response.status >= 200 && response.status < 300) setRedirect(true)
            })
    };

    return (
        <CharacterFormContext.Provider
            value={{
                name,
                level,
                hitPoints,
                race,
                characterClass,
                image,
                handleName,
                handleLevel,
                handleHitPoints,
                handleRace,
                handleCharacterClass,
                handleImage,
                saveCharacter,
                redirect
            }}
        >
            {component.children}
        </CharacterFormContext.Provider>
    )
};

export {CharacterFormContext, CharacterFormProvider}
import React, {useState, createContext} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const CharacterNotesContext = createContext({});

const CharacterNotesProvider = component => {
    let {id} = useParams();

    return (
        <CharacterNotesContext.Provider>
            {component.children}
        </CharacterNotesContext.Provider>
    );
};

export {CharacterNotesContext, CharacterNotesProvider}
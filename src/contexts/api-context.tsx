import React, {createContext, FunctionComponent, useState} from "react";
import Character from "../models/character";
import {Params} from "react-router-dom";

type PropsContext = {
    characters: Character[],
    getAll: Function,
    getById: Function,
    updateCharacter: Function,
    deleteCharacter: Function,
    addCharacter: Function
}

const ApiContext = createContext<PropsContext>({
    characters: [],
    getAll: (): void => {},
    getById: (): void => {},
    updateCharacter: (): void => {},
    deleteCharacter: (): void => {},
    addCharacter: (): void => {}
});

const ApiProvider: FunctionComponent<any> = ({children}) => {
    // Parameters
    const BaseUrl: string = "http://localhost:3001/characters";

    // Hooks
    const [characters, setCharacters] = useState<Character[]>([])

    const getAll = async (): Promise<void> => {
        try{
            const response: Response = await fetch(BaseUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const characters: Character[] = await response.json();
            setCharacters(characters);
        }catch(error: any){
            console.log(error.message);
            throw new Error("Les personnages n'ont pas pu être récupérés.");
        }

    }

    const getById = async(id: number): Promise<Character|null> => {
        try{
            const response: Response = await fetch(`${BaseUrl}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const char: Character = await response.json();
            if(Object.keys(char).length > 0){
                return char;
            }
            return null;
        }catch(error: any){
            console.log(error.message);
            throw new Error("Le personnage n'a pas pu être récupéré.");
        }
    }

    const addCharacter = async (character: Character): Promise<Character> => {
        try{
            const response: Response = await fetch(`${BaseUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(character)
            });
            return await response.json();

        }catch(error: any){
            console.log(error.message);
            throw new Error("Le personnage n'a pas pu être ajouté.");
        }
    }

    const updateCharacter = async (character: Character): Promise<Character> => {
        try{
            const response: Response = await fetch(`${BaseUrl}/${character.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(character)
            });
            return await response.json();

        }catch(error: any){
            console.log(error.message);
            throw new Error("Le personnage n'a pas pu être édité.");
        }
    }

    const deleteCharacter = async(character: Character): Promise<{}> =>{
        try{
            const response: Response = await fetch(`${BaseUrl}/${character.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(character)
            });
            return await response.json();

        }catch(error: any){
            console.log(error.message);
            throw new Error("Le personnage n'a pas pu être supprimé.");
        }
    }

    return (
        <ApiContext.Provider
            value={{
                characters,
                getAll,
                getById,
                updateCharacter,
                deleteCharacter,
                addCharacter
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}
export {ApiProvider};
export default ApiContext;

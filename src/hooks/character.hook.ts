import { useEffect, useState } from "react";
import Character from "../models/character";
import CHARACTERS from "../models/mock-character";

const useCharacters = () => {
    const [listCharacters, setListCharacters] = useState<Character[]>([]);

    // Initialize listCharacters
    useEffect(() => {
        setListCharacters(CHARACTERS);
    }, []);

    return listCharacters;
}

export default useCharacters;
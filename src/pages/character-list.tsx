import React, {FunctionComponent, useEffect, useState} from "react";
import Character from "../models/character";
import CHARACTERS from "../models/mock-character";
import CharacterCard from "../components/character-card";
import { Heading, SimpleGrid, Center } from "@chakra-ui/react";

const CharacterList = () => {
    const [listCharacters, setListCharacters] = useState<Character[]>([]);

    // Initialize listCharacters
    useEffect(() => {
        setListCharacters(CHARACTERS);
    }, []);

    return (
        <>
        <Center>
            <Heading 
            as='h1'
            size='lg'
            m={'40px'}
            >Liste des personnages de One Piece.</Heading>
        </Center>
        
        <SimpleGrid
            mt={'10px'}
            mb={'30px'}
            spacing={4}
            minChildWidth='350px'
        >
            {listCharacters.map(character => (
                <CharacterCard key={character.id+'_op'}  character={character}/>
            ))
            }
        </SimpleGrid>
        </>
    );
}

export default CharacterList;
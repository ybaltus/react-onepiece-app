import React, {FunctionComponent, useEffect, useState} from "react";
import Character from "../models/character";
import {useNavigate, useParams} from "react-router-dom";
import CHARACTERS from "../models/mock-character";
import {Box, Button, Center, Heading, Text} from "@chakra-ui/react";
import CharacterForm from "../components/character-form/character-form";

const CharacterEdit: FunctionComponent = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState<Character>();

    useEffect(() => {
        CHARACTERS.map(char => {
            if(params.id === char.id.toString()){
                setCharacter(char)
            }
        });

    }, [params.id]);

    const navChar = () => {
        if(character) {
            navigate(`/characters/${character.id}`)
        } else {
            navigate(`/characters`)
        }
    }

    return (
        <Center>
            <Box>
                <Heading>Éditer un personnage</Heading>
                { character ? (
                    <CharacterForm character={character}/>
                ) : (
                    <Text>Aucun personnage à éditer !</Text>
                )}
                <Button
                    my={10}
                    variant='solid'
                    colorScheme='gray'
                    onClick={navChar}
                >
                    Retour
                </Button>
            </Box>
        </Center>
    )
}

export default CharacterEdit;
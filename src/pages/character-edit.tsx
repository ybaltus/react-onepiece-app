import React, {FunctionComponent, useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Center, Heading, Text} from "@chakra-ui/react";
import CharacterForm from "../components/character-form/character-form";
import ApiContext from "../contexts/api-context";
import Character from "../models/character";
import Loader from "../components/loader/loader";

const CharacterEdit: FunctionComponent = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState<Character|null>(null)
    const {getById} = useContext(ApiContext);

    useEffect(() => {
        getById(params.id).then((char: Character|null) => {
            setCharacter(char);
        })
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
                    // <Text>Aucun personnage à éditer !</Text>
                    <Loader/>
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